import { Review as ReviewModel } from "@/redux/services/movieApi";
import Image from "next/image";
import { FC } from "react";
import review from "./review.module.css";
import Photo from "../../../public/photo.svg";
import { Card } from "../Card/Card";

interface ReviewProps {
  review: ReviewModel;
}
export const Review: FC<ReviewProps> = ({ review: data }) => {
  return (
    <Card
      className={review.wrapper}
      image={
        data.image ? (
          <Image
            width={100}
            height={100}
            src={data.image}
            className={review.avatar}
            alt={data.name}
          />
        ) : (
          <div className={review.defaultWrapper}>
            <Photo width={26} height={22} />
          </div>
        )
      }
      info={
        <>
          <div className={review.header}>
            <p className={review.name}>{data.name}</p>
            <p>
              Оценка: <b>{data.rating}</b>
            </p>
          </div>
          <p className={review.text}>{data.text}</p>
        </>
      }
    />
  );
};
