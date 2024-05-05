import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import theme from "src/constants/theme";
import store from "src/redux/store";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

const rootElement = document.getElementById("root");

// React PDF
pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.js", import.meta.url).toString();

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
