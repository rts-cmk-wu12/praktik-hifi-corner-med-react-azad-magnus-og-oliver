import { useEffect, useState } from "react";
import { apiUrl } from "../utility/ProductionSites.jsx";
import "../style/components/ShopProductCard.scss";
import SearchNav from "./searchnav.jsx";
export const ShopProductCard = () => {

    const [products, setProducts] = useState({});
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const data = await fetch(apiUrl + "products")
            const jsonData = await data.json()
            console.log(jsonData);
            setProducts(jsonData);
            setFilteredProducts(jsonData);
            console.log(products);
        }

        fetchProducts();
    }, []);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const filtered = products.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    const addToCart = (product) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...existingCart, product];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
    };

    return (
        <>
            <SearchNav onSearch={handleSearch} onKeyDown={handleKeyDown} />
            <div className="shopProductCard">
                {filteredProducts && filteredProducts.length > 0 && (
                    filteredProducts.map((product, index) => (
                        <div
                            className="shopProductCard__details"
                            key={product.id}
                        >
                            <img className="shopProductCard__image" src={"/" + product.imageSrc} alt={product.category} />
                            <h2 className="shopProductCard__title">{product.title}</h2>
                            {product.discountedPrice ? (
                                <div className="shopProductCard__discount">
                                    <p className="shopProductCard__discount-originalPrice">{product.price}</p>
                                    <p className="shopProductCard__discount-originalPrice">{product.discountedPrice}</p>
                                </div>
                            ) : (
                                <p className="shopProductCard__originalPrice">{product.price}</p>
                            )}
                            <button className="shopProductCard__add" onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    ))
                )
                }
            </div>
        </>
    )
}