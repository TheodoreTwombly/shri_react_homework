import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface MovieValue {
  title: string,
  posterUrl: string,
  releaseYear: number,
  description: string,
  genre: string,
  id: string,
  rating: number,
  director: string,
  reviewIds: string | string[],
}

export interface CinemaValue {
  id: string,
  name: string,
  movieIds: string[]
}

export interface Review {
  id: string,
  name: string,
  text: string,
  rating: number,
  image?: string,
}

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<MovieValue[], string | void>({ query: (cinemaId) => cinemaId ? `movies?cinemaId=${cinemaId}` : 'movies' }),
    getMovie: builder.query<MovieValue, string>({query: (movieId) => `movie?movieId=${movieId}`}),
    getCinemas: builder.query<CinemaValue[], void>({ query: () => "cinemas" }),
    getReviews: builder.query<Review[], string>({query: (movieId) => `reviews?movieId=${movieId}`})
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery, useGetCinemasQuery, useGetReviewsQuery  } = movieApi;
