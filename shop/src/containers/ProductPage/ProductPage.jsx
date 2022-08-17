import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    addCartItem,
    favProduct,
    getProductById,
    updateCartSmall,
    updateQuantitySmall,
    updateCartMedium,
    updateCartLarge,
    updateQuantityMedium,
    updateQuantityLarge,
} from "../../services/data";
import styles from "./ProductPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";

const ProductPage = ({ items, handleChange }) => {
    const navigate = useNavigate();

    const { productId } = useParams();

    const id = productId;

    const [item, setItem] = useState({});

    useEffect(() => {
        setItem(items.find((item) => item.id == id));
    }, [items, id]);

    const [fav, setFav] = useState(false);

    console.log(item);

    const handleFav = () => {
        setFav(!fav);
    };

    useEffect(() => {
        const wrapper = async () => {
            await favProduct(id, fav);
        };
        wrapper();
    }, [fav]);

    const favIcon = fav ? faHeartCircleCheck : faHeart;

    const [size, setSize] = useState("Small");
    const inputChange = (event) => {
        setSize(event.target.value);
    };

    useEffect(() => {
        
    }, [size])

    console.log(size);

    const addToCart = async () => {
        switch (size) {
            case "Small":
                if (item.quantity.Small <= 0) {
                    alert("no stock in this size");
                } else {
                    updateCartSmall(id, item.cart.Small);
                    updateQuantitySmall(id, item.quantity.Small);
                }
                break;
            case "Medium":
                if (item.quantity.Medium <= 0) {
                    alert("no stock in this size");
                } else {
                    updateCartMedium(id, item.cart.Medium);
                    updateQuantityMedium(id, item.quantity.Medium);
                }
                break;
            case "Large":
                if (item.quantity.Large <= 0) {
                    alert("no stock in this size");
                } else {
                    updateCartLarge(id, item.cart.Large);
                    updateQuantityLarge(id, item.quantity.Large);
                }
                break;
            default:
                alert("issue");
        }
    };

    return (
        <>
            {item && (
                <div className={styles.ProductPage}>
                    <div className={styles.ImageWrapper}>
                        <img
                            className={styles.Image}
                            src={item.image}
                            alt={item.name}
                        />
                    </div>
                    <div className={styles.TextWrapper}>
                        <h2>{item.name}</h2>
                        <FontAwesomeIcon icon={favIcon} onClick={handleFav} />

                        <p className={styles.TextItems}>{item.price}</p>
                        <p className={styles.TextItems}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatem deserunt corporis reprehenderit
                            magni pariatur eius cupiditate. Fugiat molestias
                            beatae quibusdam hic animi voluptate minus esse
                            eaque autem aspernatur, optio iste?
                        </p>
                        <form onChange={inputChange} className={styles.Form}>
                            <div className={styles.SelectWrapper}>
                                <div className={styles.DropdownWrapper}>
                                    <label htmlFor="size">Size:</label>
                                    <select name="size" id="size">
                                        <option value="Small">Small</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Large">Large</option>
                                    </select>
                                </div>
                            </div>
                            <button
                                onClick={addToCart}
                                className={styles.Button}
                                type="submit"
                            >
                                <h3>Add to Cart</h3>
                            </button>
                            {/* {size === "Small" && <p>{item.quantity.Small}</p>} */}
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductPage;
