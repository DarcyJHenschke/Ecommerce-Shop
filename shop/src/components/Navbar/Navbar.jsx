import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <h2 className={styles.Span}>The Universal Iconic</h2>
            <ul className={styles.List}>
                <li>
                    <Link className={styles.Item} to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className={styles.Item} to="/products">
                        Products
                    </Link>
                </li>
                <li>
                    <Link className={styles.Item} to="/favourites">
                        Favourites
                    </Link>
                </li>
                <li>
                    <Link className={styles.Item} to="/cart">
                        Cart
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
