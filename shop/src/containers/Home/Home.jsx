import React from "react";
import styles from "./Home.module.scss";
import Carousel from "../../components/Carousel/Carousel";
import ProductsGrid from "../../components/ProductsGrid";

const Home = ({ hats, setHats }) => {
    return (
        <>
            <Carousel />
            <ProductsGrid hats={hats} setHats={setHats} />
        </>
    );
};

export default Home;
