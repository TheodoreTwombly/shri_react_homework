import { FC } from "react";

interface AccordionItemProps {
  text: string;
}

export const AccordionItem: FC<AccordionItemProps> = ({ text }) => {
  return <p>{text}</p>;
};
