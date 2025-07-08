
import { useState, useEffect } from 'react';

const useIsDesktop = (breakpoint: number = 1024): boolean => {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= breakpoint);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    checkWidth(); 

    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, [breakpoint]);

  return isDesktop;
};

export default useIsDesktop;
