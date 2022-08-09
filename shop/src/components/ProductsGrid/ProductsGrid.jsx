import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getHats } from "../../services/data";
import styles from "./ProductsGrid.module.scss";
import ProductCard from "./../ProductCard/ProductCard";

const ProductsGrid = ({ hats, setHats }) => {
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
                    <ProductCard key={hat.id} hat={hat} />
                ))}
            </div>
        </section>
    );
};

export default ProductsGrid;
