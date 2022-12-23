import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Products</h1>
      <button onClick={() => navigate("/products/3")}>Click</button>
    </>
  );
};

export default Products;
