import { useRef, useEffect } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

export const useDimensions = (ref: React.MutableRefObject<any>): Dimensions => {
  const dimensions = useRef<Dimensions>({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
