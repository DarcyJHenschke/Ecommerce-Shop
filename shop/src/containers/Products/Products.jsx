import React from "react";
import ProductsGrid from "../../components/ProductsGrid";
import styles from "./Products.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import { getHats } from "../../services/data";
import { Link } from "react-router-dom";

const Products = ({ hats, setHats }) => {
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
                    <Link className={styles.Link} to={`/products/${hat.id}`}>
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
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Products;
