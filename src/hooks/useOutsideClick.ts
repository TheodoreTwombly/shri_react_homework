import { useEffect } from "react";
import { useLatest } from "./useLatest";

function useOutsideClick(elementRef: React.RefObject<HTMLElement>,
    handler: () => void, attached = true) {
    const latestHandler = useLatest(handler);
  
    useEffect(() => {
      if (!attached) return;
  
      const handleClick = (e:MouseEvent) => {
        const target = e.target;
        if (!(target instanceof HTMLElement)) {
            return;
        }
        if (!elementRef.current) return;
  
        if (!elementRef.current.contains(target)) {
          latestHandler.current();
        }
      };
  
      document.addEventListener("click", handleClick);
  
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [elementRef, latestHandler, attached]);
}

export default useOutsideClick