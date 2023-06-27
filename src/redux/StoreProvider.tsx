"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { FC } from "react";

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
