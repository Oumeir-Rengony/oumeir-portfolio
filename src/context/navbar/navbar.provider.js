import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
  } from "react";
  import { getMenu } from "../../data";
  import { ScreenContext } from "../screen/screen.provider";
  import { getActiveMenuItemState } from "./navbar.utils";
  
  export const NavbarContext = createContext({
    menu: {},
    portfolioDivRef: null,
    navbarActive: false,
    setNavbarActive: () => {},
    activeMenuItem: {},
    setActiveMenuItem: () => {},
  });
  
  const NavbarProvider = ({ children }) => {
    //content for navbar
    const menu = getMenu();
  
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
  
    //state to toggle navbar
    const [navbarActive, setNavbarActive] = useState(false);
  
    //ref for portfolio div
    const portfolioDivRef = useRef(null);
  
    //changes whenever screen resizes
    const { screenWidth } = useContext(ScreenContext);
  
    //This is used only to stop linting from showing missing dependency
    const initialScreenWidthRef = useRef(false);
  
  
    //this renders 1st time only as menu never changes
    //and initialScreenWidthRef prevents additional rendering
    useEffect(() => {
  
      if (!initialScreenWidthRef.current) {
        let initialActiveItem;
  
        if (screenWidth >= 1121) {
          initialActiveItem = "about";
        } else {
          initialActiveItem = "home";
        }
        setActiveMenuItem(getActiveMenuItemState(menu, initialActiveItem));
        initialScreenWidthRef.current = true;
      }
  
    }, [menu, screenWidth]);
  
    return (
      <NavbarContext.Provider
        value={{
          menu,
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
  