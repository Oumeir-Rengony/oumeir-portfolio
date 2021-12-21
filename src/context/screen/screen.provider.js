import { createContext, useEffect, useState } from "react";

export const ScreenContext = createContext({
  screenWidth: window.innerWidth,
  setScreenWidth: () => {},
});

const ScreenProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenContext.Provider
      value={{ screenWidth, setScreenWidth }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenProvider;
