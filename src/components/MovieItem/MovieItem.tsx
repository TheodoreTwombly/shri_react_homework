import Image from "next/image";
import movieItem from "./movieItem.module.css";
import { Counter } from "../Counter/Counter";
import Link from "next/link";
import { genres } from "@/constants/genre";
import { Card } from "../Card/Card";
import { FC } from "react";

export interface MovieItemProps {
  id: string;
  imageSrc: string;
  title: string;
  genre?: string;
  withDelete?: boolean;
}

export const MovieItem: FC<MovieItemProps> = ({
  id,
  imageSrc,
  title,
  genre,
  withDelete = false,
}) => {
  return (
    <Card
      image={
        <Image
          className={movieItem.poster}
          src={imageSrc}
          width={100}
          height={120}
          alt={title}
        />
      }
      info={
        <div className={movieItem.info}>
          <section>
            <Link href={`/movie/${id}`}>
              <h2 className={movieItem.title}>{title}</h2>
            </Link>
            {genre && <span className={movieItem.genre}>{genres[genre]}</span>}
          </section>
          <Counter movieId={id} withDelete={withDelete} />
        </div>
      }
    />
  );
};
