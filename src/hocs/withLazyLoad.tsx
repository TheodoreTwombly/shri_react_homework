import React, { useRef, useEffect, useState, FC } from "react";

function withLazyLoad<T extends {}>(WrappedComponent: FC<T>) {
  return function LazyLoad({ ...props }: T) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!ref.current) {
        return;
      }
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [ref]);

    return (
      <div ref={ref} style={{ minHeight: 100 }}>
        {isVisible && <WrappedComponent {...props} />}
      </div>
    );
  };
}

export default withLazyLoad;
