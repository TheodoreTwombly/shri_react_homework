"use client";

import {
  MovieItem as MovieItemBase,
  MovieItemProps,
} from "../MovieItem/MovieItem";
import moviesList from "./moviesList.module.css";
import { MovieValue, useGetMoviesQuery } from "@/redux/services/movieApi";
import { selectFilters } from "@/redux/features/filters/selector";
import { useSelector } from "react-redux";
import withLazyLoad from "@/hocs/withLazyLoad";
import { Loader } from "../Loader/Loader";

const MovieItem = withLazyLoad<MovieItemProps>(MovieItemBase);

export const MoviesList = () => {
  const filters = useSelector(selectFilters);
  const { data, isLoading, error } = useGetMoviesQuery(filters.cinema);

  if (isLoading) {
    return (
      <section className={moviesList.wrapper}>
        <Loader />
      </section>
    );
  }

  if (!data || error) {
    return (
      <section>
        <span>Not found!</span>
      </section>
    );
  }

  let filteredData: MovieValue[] = data;
  if (filters.title) {
    filteredData = filteredData.filter((item) => {
      return item.title.includes(filters.title);
    });
  }

  if (filters.genre) {
    filteredData = filteredData.filter((item) => {
      return item.genre === filters.genre;
    });
  }

  return (
    <section className={moviesList.wrapper}>
      {filteredData.map((movie) => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          imageSrc={movie.posterUrl}
          title={movie.title}
          genre={movie.genre}
        ></MovieItem>
      ))}
    </section>
  );
};
