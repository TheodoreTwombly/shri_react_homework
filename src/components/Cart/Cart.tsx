"use client";
import {
  selectCartModule,
  selectTotalTicketAmount,
} from "@/redux/features/cart/selector";
import { useGetMoviesQuery } from "@/redux/services/movieApi";
import { useSelector } from "react-redux";
import { MovieItem } from "../MovieItem/MovieItem";
import cart from "./cart.module.css";
import { Loader } from "../Loader/Loader";

export const Cart = () => {
  const cartItems = useSelector(selectCartModule);
  const amount = useSelector(selectTotalTicketAmount);
  const { data, isLoading } = useGetMoviesQuery();

  if (isLoading || !data) {
    return (
      <main>
        <Loader />
      </main>
    );
  }
  return (
    <main className={cart.main}>
      <div className={cart.items}>
        {data?.map((movie) => {
          if (cartItems[movie.id]) {
            return (
              <MovieItem
                key={movie.id}
                id={movie.id}
                imageSrc={movie.posterUrl}
                title={movie.title}
                genre={movie.genre}
                withDelete={true}
              />
            );
          }
        })}
      </div>
      <div className={cart.amountWrapper}>
        <p>Итого билетов:</p>
        <p>{amount}</p>
      </div>
    </main>
  );
};
