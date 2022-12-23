import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import ProductLayout from "./pages/ProductLayout";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/features" element={<Features />} />
         */}
        <Route path="/products" element={<ProductLayout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
          <Route path="features" element={<Features />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
