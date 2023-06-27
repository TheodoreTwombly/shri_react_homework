"use client";

import select from "./select.module.css";
import Arrow from "../../../public/arrow.svg";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SelectItems } from "./SelectItems/SelectItems";

export interface SelectItem {
  id: string;
  name: string;
}

interface SelectProps {
  title: string;
  placeholder: string;
  id: string;
  className: string;
  items: SelectItem[] | undefined;
  onSelect: (value: string) => void;
  value: string;
  isLoading?: boolean;
}

export const Select = ({
  title,
  placeholder,
  id,
  className,
  items,
  onSelect,
  value,
  isLoading = false,
}: SelectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const refSelectItemsContainer = useRef<HTMLElement | null>(null);
  const refSelect = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    refSelectItemsContainer.current =
      document.querySelector<HTMLElement>("#selectItems");
  }, []);

  const clickSelect = () => {
    setIsModalOpen((isOpen) => !isOpen);
    setCoordinates({
      x: refSelect.current?.offsetLeft ?? 0,
      y: refSelect.current?.offsetTop ?? 0,
    });
  };
  const component = (
    <SelectItems
      style={coordinates}
      onClose={() => setIsModalOpen(false)}
      items={items}
      onSelect={onSelect}
      value={value}
      isLoading={isLoading}
    />
  );
  return (
    <div ref={refSelect}>
      <label className={select.title}>{title}</label>
      <div
        id={id}
        className={`${className} ${select.wrapperSelect} ${
          isModalOpen && select.opened
        }`}
        onClick={clickSelect}
      >
        <p className={select.selected}>
          {items?.find((item) => item.id === value)?.name ?? placeholder}
        </p>
        <Arrow
          className={`${select.image} ${isModalOpen && select.rotateArrow}`}
          width={18}
          height={18}
          alt="Open select"
        />
      </div>
      {isModalOpen &&
        refSelectItemsContainer.current &&
        createPortal(component, refSelectItemsContainer.current)}
    </div>
  );
};
