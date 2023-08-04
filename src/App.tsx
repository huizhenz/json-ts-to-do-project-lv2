import React from "react";
import Router from "./shared/Router";
import GlobalStyle from "./GlobalStyle";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
