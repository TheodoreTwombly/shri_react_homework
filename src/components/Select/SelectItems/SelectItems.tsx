import { ChangeEvent, FC, useEffect, useState, useRef } from "react";

import selectItems from "./selectItems.module.css";
import useOutsideClick from "@/hooks/useOutsideClick";
import { SelectItem } from "../Select";

interface Coordinates {
  x: number;
  y: number;
}

interface SelectItemsProps {
  style: Coordinates;
  onClose: () => void;
  items: SelectItem[] | undefined;
  onSelect: (value: string) => void;
  value: string;
  isLoading: boolean;
}

const defaultValue: SelectItem = {
  id: "",
  name: "Не выбрано",
};

export const SelectItems: FC<SelectItemsProps> = ({
  style,
  onClose,
  items,
  onSelect,
  isLoading,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const selectHeight = 63 + 84 + 30;

  const selectPadding = 32;

  useOutsideClick(ref, onClose);

  return (
    <div
      style={{ left: style.x + selectPadding, top: style.y + selectHeight }}
      className={selectItems.wrapper}
      ref={ref}
    >
      {!isLoading && Array.isArray(items)
        ? [defaultValue, ...items].map(({ id, name }) => (
            <div
              key={id}
              className={selectItems.itemWrapper}
              onClick={() => {
                onClose();
                onSelect(id);
              }}
            >
              {name}
            </div>
          ))
        : "Loading..."}
    </div>
  );
};
