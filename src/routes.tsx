import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./pages/product";
import { GlobalStyle } from "./styles/GlobalStyle";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
