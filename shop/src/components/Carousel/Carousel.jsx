import React, { useEffect } from "react";
import styles from "./Carousel.module.scss";
import { getCarousel } from "../../services/data";
import { useState } from "react";
// link to be imported and put around card div

const Carousel = () => {
    const [images, setImages] = useState([]);
    const [current, setCurrent] = useState(0);
    const length = images.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    useEffect(() => {
        const wrapper = async () => {
            const data = await getCarousel();
            setImages(data);
        };
        wrapper();
    }, []);
    return (
        <>
            <section className={styles.Carousel}>
                {images.map((image, index) => (
                    <div className={styles.SlideActive} key={index}>
                        {index === current && (
                            <img
                                src={image.image}
                                className={styles.Image}
                            ></img>
                        )}
                    </div>
                ))}

                <button onClick={prevSlide} className={styles.ButtonLeft}>
                    &larr;
                </button>
                <button onClick={nextSlide} className={styles.ButtonRight}>
                    &rarr;
                </button>
            </section>
        </>
    );
};

export default Carousel;
