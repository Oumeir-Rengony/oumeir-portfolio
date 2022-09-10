import React, {
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useQuery } from "react-query";
import useWindowSize from "../../components/hook/useWindowSize";
import { getMenu } from "../../GraphQl";
import { getActiveMenuItemState } from "./navbar.utils";

export const NavbarContext = createContext({
  portfolioDivRef: null,
  navbarActive: false,
  setNavbarActive: () => {},
  activeMenuItem: {},
  setActiveMenuItem: () => {},
});

const NavbarProvider = ({ children }) => {

  const { data } = useQuery("menu", getMenu);

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
    if (data && data[0].node) {
      const menu = data[0].node.links;
      const initialActiveItem = window.innerWidth >= 1121 ? "about" : "home";
      const activeMenu = getActiveMenuItemState(menu, initialActiveItem);
      setActiveMenuItem(activeMenu);
    }
  }, [data]);


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
