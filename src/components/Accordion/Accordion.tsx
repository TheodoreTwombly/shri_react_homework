"use client";

import React, { FC, PropsWithChildren, useCallback, useState } from "react";

interface AccordionContextValue {
  activeGroup?: string;
  switchGroup: (title: string) => void;
}

export const AccordionContext = React.createContext<AccordionContextValue>({
  activeGroup: "",
  switchGroup: () => {},
});

export const Accordion: FC<PropsWithChildren> = ({ children }) => {
  const [activeGroup, setActiveGroup] = useState<string>();

  const switchGroup = useCallback((title: string) => {
    setActiveGroup((activeTitle) =>
      activeTitle === title ? undefined : title
    );
  }, []);

  return (
    <AccordionContext.Provider value={{ activeGroup, switchGroup }}>
      {children}
    </AccordionContext.Provider>
  );
};
