"use client";

import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Select } from "../Select/Select";
import filters from "./filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/features/filters/selector";
import { filtersActions } from "@/redux/features/filters";
import useDebounce from "@/hooks/useDebounce";
import { useGetCinemasQuery } from "@/redux/services/movieApi";
import { selectItemsGenre } from "@/constants/genre";
import { Filters as FiltersModel } from "@/models/filter";
import { State } from "@/redux/store";

export const Filters = () => {
  const getFilters = useSelector<State, FiltersModel>((state) =>
    selectFilters(state)
  );
  const { data, isLoading, error } = useGetCinemasQuery();
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>(getFilters.title);

  const debouncedTitle = useDebounce<string>(title, 500);

  const setFilter = useCallback(
    (setting: keyof FiltersModel) => (item: string) => {
      dispatch(filtersActions.setFilter({ name: setting, item }));
    },
    [dispatch]
  );

  useEffect(() => {
    setFilter("title")(debouncedTitle);
  }, [debouncedTitle, setFilter]);

  return (
    <section className={filters.wrapper}>
      <h2>Фильтр поиска</h2>
      <div>
        <label className={filters.titleInput}>Название</label>
        <input
          value={title}
          type="text"
          id="name"
          className={filters.input}
          placeholder="Введите название"
          autoComplete="off"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <Select
        title="Жанр"
        placeholder="Выберите жанр"
        id="genre"
        className={filters.input}
        items={selectItemsGenre}
        onSelect={setFilter("genre")}
        value={getFilters.genre}
      />
      <Select
        title="Кинотеатр"
        placeholder="Выберите кинотеатр"
        id="cinema"
        className={filters.input}
        items={data}
        isLoading={isLoading}
        onSelect={setFilter("cinema")}
        value={getFilters.cinema}
      />
    </section>
  );
};
