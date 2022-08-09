import React from "react";
import styles from "./Home.module.scss";
import Carousel from "../../components/Carousel/Carousel";
import ProductsGrid from "../../components/ProductsGrid";

const Home = ({ hats, setHats, carousel, setCarousel, items }) => {
    return (
        <>
            <Carousel />
            <ProductsGrid
                hats={hats}
                setHats={setHats}
                carousel={carousel}
                setCarousel={setCarousel}
            />
        </>
    );
};

export default Home;
