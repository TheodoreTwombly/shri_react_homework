"use client";

import { useGetMovieQuery } from "@/redux/services/movieApi";
import { FC } from "react";
import movieCard from "./movieCard.module.css";
import { Counter } from "../Counter/Counter";
import Image from "next/image";
import { genres } from "@/constants/genre";
import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";

interface MovieCardProps {
  id: string;
}

export const MovieCard: FC<MovieCardProps> = ({ id }) => {
  const { data, isLoading, error } = useGetMovieQuery(id);

  if (isLoading || !data) {
    return <Loader />;
  }
  return (
    <Card
      image={
        <Image
          className={movieCard.poster}
          src={data.posterUrl}
          width={400}
          height={500}
          alt={data.title}
        />
      }
      info={
        <div className={movieCard.info}>
          <div className={movieCard.titleWrapper}>
            <h2>{data.title}</h2>
            <Counter movieId={data.id} />
          </div>
          <p className={movieCard.row}>
            <b className={movieCard.subtitle}>Жанр: </b>
            <span>{genres[data.genre]}</span>
          </p>
          <p className={movieCard.row}>
            <b className={movieCard.subtitle}>Год выпуска: </b>
            <span>{data.releaseYear}</span>
          </p>
          <p className={movieCard.row}>
            <b className={movieCard.subtitle}>Рейтинг: </b>
            <span>{data.rating}</span>
          </p>
          <p className={movieCard.row}>
            <b className={movieCard.subtitle}>Режиссер: </b>
            <span>{data.director}</span>
          </p>
          <p className={`${movieCard.description} ${movieCard.subtitle}`}>
            Описание
          </p>
          <p className={movieCard.descriptionText}>{data.description}</p>
        </div>
      }
    />
  );
};
