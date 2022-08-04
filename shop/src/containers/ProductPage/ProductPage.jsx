import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../services/data";
import styles from "./ProductPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();
    console.log(productId);
    const id = productId;

    useEffect(() => {
        getProductById(id).then(setProduct);
    }, [id]);
    return (
        <>
            {product && (
                <div className={styles.ProductPage}>
                    <div className={styles.ImageWrapper}>
                        <img
                            className={styles.Image}
                            src={product.image}
                            alt={product.name}
                        />
                    </div>
                    <div className={styles.TextWrapper}>
                        <div className={styles.Heart}>
                            <h2>{product.name}</h2>
                            <span className={styles.Icon}>
                                <FontAwesomeIcon icon={faHeart} size="2x" />
                            </span>
                        </div>
                        <p className={styles.TextItems}>{product.price}</p>
                        <p className={styles.TextItems}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatem deserunt corporis reprehenderit
                            magni pariatur eius cupiditate. Fugiat molestias
                            beatae quibusdam hic animi voluptate minus esse
                            eaque autem aspernatur, optio iste?
                        </p>
                        <form className={styles.Form} action="">
                            <div className={styles.SelectWrapper}>
                                <div className={styles.DropdownWrapper}>
                                    <label htmlFor="size">Size:</label>
                                    <select
                                        className={styles.Dropdown}
                                        id="size"
                                        name="size"
                                    >
                                        {product.size.map((item) => (
                                            <option value={item}>{item}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className={styles.DropdownWrapper}>
                                    <label htmlFor="quantity">Quantity:</label>
                                    <select
                                        className={styles.Dropdown}
                                        id="quantity"
                                        name="quantity"
                                    >
                                        {product.quantity.map((item) => (
                                            <option value={item}>{item}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <button className={styles.Button} type="submit">
                                <h3>Add to Cart</h3>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductPage;
