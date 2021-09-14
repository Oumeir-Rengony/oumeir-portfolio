import { createContext, useEffect, useState, useRef } from "react";

export const ScreenContext = createContext({
  screenWidth: window.innerWidth,
  setScreenWidth: () => {},
  homeBannerWidth: 0,
  homeBannerRef: null,
});

const ScreenProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [homeBannerWidth, setHomeBannerWidth] = useState(0);

  const homeBannerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setHomeBannerWidth(homeBannerRef.current.clientWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenContext.Provider
      value={{ screenWidth, setScreenWidth, homeBannerWidth, homeBannerRef }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenProvider;
