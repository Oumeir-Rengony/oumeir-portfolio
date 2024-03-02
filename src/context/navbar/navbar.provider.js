import React, {
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useWindowSize from "../../components/hook/useWindowSize";
import { getActiveMenuItemState } from "./navbar.utils";
import data from "../../data/data.json";


export const NavbarContext = createContext({
  portfolioDivRef: null,
  navbarActive: false,
  setNavbarActive: () => {},
  activeMenuItem: {},
  setActiveMenuItem: () => {},
});

const NavbarProvider = ({ children }) => {


  /* 
      activeMenuItem: {
        home: true\false;
        about: false\true;
        contact: false;
        projects: false;
        resume: false;
        skills;
      }
    */
  const [activeMenuItem, setActiveMenuItem] = useState({});
  const [navbarActive, setNavbarActive] = useState(true);
  const portfolioDivRef = useRef(null);

  const { screenWidth } = useWindowSize();

  useEffect(() => {
    if (data) {
      const menu = data[0].menu.items;
      const initialActiveItem = window.innerWidth >= 1121 ? "about" : "home";
      const activeMenu = getActiveMenuItemState(menu, initialActiveItem);
      setActiveMenuItem(activeMenu);
    }
  }, []);


  useEffect(() => {
    //only for large screen since small screen has home whereas large screen does not.
    if(screenWidth >= 1121) {
      setActiveMenuItem(prev => prev.home ? 
        {...prev, home:false, about:true}: prev
      )
    }
    
  }, [screenWidth])

  return (
    <NavbarContext.Provider
      value={{
        portfolioDivRef,
        navbarActive,
        setNavbarActive,
        activeMenuItem,
        setActiveMenuItem,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
