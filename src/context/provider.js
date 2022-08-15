import { QueryClient, QueryClientProvider } from "react-query";

import NavbarProvider from "./navbar/navbar.provider";

const ContextProvider = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <NavbarProvider>{children}</NavbarProvider>
    </QueryClientProvider>
  );
};

export default ContextProvider;
