import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  console.log(searchParams.getAll("test"));
  return <h1>Product {id}</h1>;
};

export default Product;
