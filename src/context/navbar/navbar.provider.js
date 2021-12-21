import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useQuery } from "react-query";
import { getMenu } from "../../GraphQl";
import { ScreenContext } from "../screen/screen.provider";
import { getActiveMenuItemState } from "./navbar.utils";

export const NavbarContext = createContext({
  portfolioDivRef: null,
  navbarActive: false,
  setNavbarActive: () => {},
  activeMenuItem: {},
  setActiveMenuItem: () => {},
});

const NavbarProvider = ({ children }) => {

  const [menu, setMenu] = useState([]);

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

  //This is used to stop useEffect from rendering after activeMenuItem is fetched
  const [activeMenuItemFetched, setActiveMenuItemFetched] = useState(false);

  const [navbarActive, setNavbarActive] = useState(false);

  const portfolioDivRef = useRef(null);

  const { screenWidth } = useContext(ScreenContext);

  useEffect(() => {
    if (data && data[0].node) {
      setMenu(data[0].node.links);
    }
  }, [data]);


  useEffect(() => {
    
    if (!activeMenuItemFetched) {
      let initialActiveItem;

      if (screenWidth >= 1121) {
        initialActiveItem = "about";
      } else {
        initialActiveItem = "home";
      }
      setActiveMenuItem(getActiveMenuItemState(menu, initialActiveItem));
      
      if(JSON.stringify(activeMenuItem) !== '{}') setActiveMenuItemFetched(true);
    }
  }, [menu, screenWidth, activeMenuItemFetched, activeMenuItem]);

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
