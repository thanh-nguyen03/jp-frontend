import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import theme from "src/constants/theme";
import store from "src/redux/store";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider
      toastOptions={{ defaultOptions: { position: "top-right", duration: 3000, isClosable: true } }}
      theme={theme}
    >
      <StoreProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
