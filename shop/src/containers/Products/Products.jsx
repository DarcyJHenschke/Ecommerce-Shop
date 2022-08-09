import React from "react";
import ProductsGrid from "../../components/ProductsGrid";

const Products = ({ hats, setHats }) => {
    return <ProductsGrid hats={hats} setHats={setHats} />;
};

export default Products;
