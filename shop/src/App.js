import "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import { useState } from "react";
import Products from "./containers/Products/Products";
import ProductPage from "./containers/ProductPage";
function App() {
    const [hats, setHats] = useState([]);
    const [carousel, setCarousel] = useState([]);
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                hats={hats}
                                setHats={setHats}
                                carousel={carousel}
                                setCarousel={setCarousel}
                            />
                        }
                    />
                    <Route
                        path="/products"
                        element={<Products hats={hats} setHats={setHats} />}
                    />
                    <Route
                        path="/products/:productId"
                        element={<ProductPage />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
