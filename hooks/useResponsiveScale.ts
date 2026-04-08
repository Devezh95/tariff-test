import { useState, useEffect } from 'react';

const DESKTOP_MAX_WIDTH = 1920;
const DESKTOP_MIN_WIDTH = 1024;

export const useResponsiveScale = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= DESKTOP_MIN_WIDTH && width <= DESKTOP_MAX_WIDTH) {
        const scaleRange = 1 - DESKTOP_MIN_WIDTH / DESKTOP_MAX_WIDTH;
        const widthRange = DESKTOP_MAX_WIDTH - DESKTOP_MIN_WIDTH;
        const newScale =
          DESKTOP_MIN_WIDTH / DESKTOP_MAX_WIDTH +
          ((width - DESKTOP_MIN_WIDTH) * scaleRange) / widthRange;
        setScale(Math.min(1, Math.max(DESKTOP_MIN_WIDTH / DESKTOP_MAX_WIDTH, newScale)));
      } else if (width > DESKTOP_MAX_WIDTH) {
        setScale(1);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return scale;
};
