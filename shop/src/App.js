import "./App.module.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import { useEffect, useState } from "react";
import Products from "./containers/Products/Products";
import ProductPage from "./containers/ProductPage";
import Favourites from "./containers/Favourites/Favourites";
import { getHats } from "./services/data";
import Cart from "./containers/Cart/Cart";
function App() {
    const [items, setItems] = useState([]);
    const getData = async () => {
        const data = await getHats();
        setItems(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const [hats, setHats] = useState([]);

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<Home hats={hats} setHats={setHats} />}
                    />
                    <Route
                        path="/products"
                        element={<Products hats={hats} setHats={setHats} />}
                    />
                    <Route
                        path="/products/:productId"
                        element={
                            <ProductPage
                                hats={hats}
                                setHats={setHats}
                                items={items}
                            />
                        }
                    />
                    <Route
                        path="/favourites"
                        element={<Favourites hats={hats} setHats={setHats} />}
                    />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
