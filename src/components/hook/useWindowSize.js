import { useEffect, useState } from "react";


const useWindowSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth || 0,
    height: window.innerHeight || 0
  });


  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useWindowSize;