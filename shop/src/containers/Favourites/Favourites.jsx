import React from "react";
import { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { getHats } from "../../services/data";
import styles from "./Favourites.module.scss";

const Favourites = ({ hats, setHats }) => {
    useEffect(() => {
        const wrapper = async () => {
            const data = await getHats();
            const favHats = data.filter((hat) => hat.favourited === true);
            setHats(favHats);
            console.log(favHats);
        };
        wrapper();
    }, []);
    console.log(hats);
    return (
        <section className={styles.ProductsGrid}>
            <h1>Favourites</h1>
            <div className={styles.Grid}>
                {hats.map((hat) => (
                    <ProductCard hat={hat} />
                ))}
            </div>
        </section>
    );
};

export default Favourites;
