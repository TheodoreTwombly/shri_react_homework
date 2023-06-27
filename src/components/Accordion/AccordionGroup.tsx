"use client";

import { FC, PropsWithChildren, useContext } from "react";
import Arrow from "../../../public/arrow.svg";
import { AccordionContext } from "./Accordion";
import accordionGroup from "./accordionGroup.module.css";

interface AccordionGroupProps {
  title: string;
}

export const AccordionGroup: FC<PropsWithChildren<AccordionGroupProps>> = ({
  children,
  title,
}) => {
  const { activeGroup, switchGroup } = useContext(AccordionContext);
  return (
    <div className={accordionGroup.wrapper}>
      <div
        className={accordionGroup.titleWrapper}
        onClick={() => switchGroup(title)}
      >
        <h3>{title}</h3>
        <Arrow
          className={`${activeGroup === title && accordionGroup.rotateArrow}`}
          width={28}
          height={28}
          alt="Open block"
        />
      </div>
      {activeGroup === title && (
        <section className={accordionGroup.text}>{children}</section>
      )}
    </div>
  );
};
