import { useState, useEffect } from 'react';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
  viewMode: string | undefined;
}

export function useResize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
    viewMode: undefined
  });

  const toggleViewMode = (mode: string) => {
    if (typeof window !== 'undefined') {
      setWindowSize((prevWindowSize) => ({
        ...prevWindowSize,
        viewMode: mode
      }));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        let viewMode = 'grid';

        if (width <= 1008) {
          viewMode = 'grid';
        } else {
          viewMode = width === 1010 ? 'list' : 'list'; // Condition for 1010 pixels, defaulting to 'list' for wider screens
        }

        setWindowSize({
          width,
          height: window.innerHeight,
          viewMode
        });
      }
    };

    if (typeof window !== 'undefined') {
      handleResize(); // Set initial window size and view mode on component mount

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return { ...windowSize, toggleViewMode };
}
