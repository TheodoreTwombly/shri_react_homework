import { FC, ReactNode } from "react";
import card from "./card.module.css";

interface CardProps {
  image: ReactNode;
  info: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ image, info, className }) => {
  return (
    <div className={`${card.wrapper} ${className}`}>
      <div className={card.image}>{image}</div>
      <div className={card.info}>{info}</div>
    </div>
  );
};
