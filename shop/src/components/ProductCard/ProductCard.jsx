import React from "react";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ hat }) => {
    console.log("hello");
    return (
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
    );
};

export default ProductCard;
