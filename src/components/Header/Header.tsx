"use client";

import { selectTotalTicketAmount } from "@/redux/features/cart/selector";
import Basket from "../../../public/basket.svg";
import header from "./header.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { State } from "@/redux/store";

export const Header = () => {
  const totalAmount = useSelector((state: State) =>
    selectTotalTicketAmount(state)
  );
  return (
    <header className={header.wrapper}>
      <Link href="/">Билетопоиск</Link>
      <div className={header.wrapperAmount}>
        {totalAmount > 0 && (
          <div className={header.amount}>
            <p>{totalAmount}</p>
          </div>
        )}
        <Link href="/cart">
          <Basket
            width={32}
            height={32}
            alt="Basket of shop"
            className={header.cart}
          />
        </Link>
      </div>
    </header>
  );
};
