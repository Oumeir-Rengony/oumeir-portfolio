import { useEffect, useState } from "react";


const useWindowSize = () => {
  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth || 0,
    screenHeight: window.innerHeight || 0
  });


  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useWindowSize;