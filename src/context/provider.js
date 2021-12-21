import { QueryClient, QueryClientProvider } from "react-query";

import NavbarProvider from "./navbar/navbar.provider";
import ScreenProvider from "./screen/screen.provider";

const ContextProvider = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ScreenProvider>
        <NavbarProvider>{children}</NavbarProvider>
      </ScreenProvider>
    </QueryClientProvider>
  );
};

export default ContextProvider;
