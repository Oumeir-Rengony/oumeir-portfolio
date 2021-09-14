import NavbarProvider from "./navbar/navbar.provider";
import ScreenProvider from "./screen/screen.provider";

const ContextProvider = ({ children }) => {
  return (
    <ScreenProvider>
      <NavbarProvider>
        {children}
      </NavbarProvider>
    </ScreenProvider>
  );
};

export default ContextProvider;
