import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getHats } from "../../services/data";
import styles from "./ProductsGrid.module.scss";
const ProductsGrid = ({ hats, setHats, carousel, setCarousel }) => {
    useEffect(() => {
        const wrapper = async () => {
            const hats = await getHats();
            setHats(hats);
        };
        wrapper();
    }, []);

    return (
        <section className={styles.ProductsGrid}>
            <h1>All Products</h1>
            <div className={styles.Grid}>
                {hats.map((hat) => (
                    <div key={hat.id}>
                        <div className={styles.Card}>
                            <img
                                className={styles.Card__Img}
                                src={hat.image}
                                alt={hat.name}
                            />
                            <div className={styles.Card__TextWrapper}>
                                <h2>{hat.name}</h2>
                                <p>{hat.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductsGrid;
