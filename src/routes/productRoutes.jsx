import Features from "../pages/Features";
import Product from "../pages/Product";
import ProductLayout from "../pages/ProductLayout";
import Products from "../pages/Products";

const productRoutes = [
  {
    path: "/products",
    element: <ProductLayout />,
    children: [
      { path: "", element: <Products /> },

      { path: ":id", element: <Product /> },
      { path: "features", element: <Features /> },
    ],
  },
];

export default productRoutes;
