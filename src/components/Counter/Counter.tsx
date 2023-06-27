"use client";

import Minus from "../../../public/minus.svg";
import Plus from "../../../public/plus.svg";
import counter from "./counter.module.css";
import { FC, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovieTicketAmount } from "../../redux/features/cart/selector";
import { cartActions } from "@/redux/features/cart";
import Close from "../../../public/close.svg";
import { State } from "@/redux/store";
import { createPortal } from "react-dom";
import { Dialog } from "../Dialog/Dialog";

interface CounterProps {
  movieId: string;
  withDelete?: boolean;
}

export const Counter: FC<CounterProps> = ({ movieId, withDelete = false }) => {
  const movieTicketAmount = useSelector((state: State) =>
    selectMovieTicketAmount(state, movieId)
  );
  const [isOpen, setOpen] = useState(false);

  const refModalContainer = useRef<HTMLElement | null>(null);

  useEffect(() => {
    refModalContainer.current =
      document.querySelector<HTMLElement>("#confirmDelete");
  }, []);

  const dispatch = useDispatch();

  return (
    <div className={counter.wrapper}>
      <Minus
        className={`${
          movieTicketAmount === 0 ? counter.buttonDisabled : counter.button
        }`}
        width={20}
        height={20}
        alt="Decrement amount"
        onClick={() => {
          if (movieTicketAmount === 1 && withDelete) {
            setOpen(true);
          } else {
            dispatch(cartActions.decrement(movieId));
          }
        }}
      />
      <span className={counter.countWrapper}>{movieTicketAmount}</span>
      <Plus
        className={`${
          movieTicketAmount === 30 ? counter.buttonDisabled : counter.button
        }`}
        width={20}
        height={20}
        alt="Increment amount"
        onClick={() => dispatch(cartActions.increment(movieId))}
      />
      {withDelete && (
        <div className={counter.deleteButton} onClick={() => setOpen(true)}>
          <Close width={13} height={13} />
        </div>
      )}
      {isOpen &&
        refModalContainer.current &&
        createPortal(
          <Dialog
            onClose={() => setOpen(false)}
            onConfirm={() => {
              dispatch(cartActions.remove(movieId));
              setOpen(false);
            }}
          />,
          refModalContainer.current
        )}
    </div>
  );
};
