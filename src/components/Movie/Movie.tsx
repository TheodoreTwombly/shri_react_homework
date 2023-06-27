"use client";

import { useGetReviewsQuery } from "@/redux/services/movieApi";
import { FC } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { Review } from "../Review/Review";
import { Loader } from "../Loader/Loader";

interface MovieProps {
  id: string;
}
export const Movie: FC<MovieProps> = ({ id }) => {
  const { data, isLoading, error } = useGetReviewsQuery(id);
  if (isLoading || !data) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  return (
    <main>
      <MovieCard id={id} />
      <section>
        {data.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </section>
    </main>
  );
};
