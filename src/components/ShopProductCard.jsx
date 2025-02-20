import {useEffect, useState} from "react";
import {apiUrl} from "../utility/ProductionSites.jsx";
import "../style/components/ShopProductCard.scss";

export const ShopProductCard = () => {

    const [products, setProducts] = useState({});

    useEffect(() => {
        async function fetchProducts() {
            const data = await fetch(apiUrl + "products")
            const jsonData = await data.json()
            console.log(jsonData);
            setProducts(jsonData);
            console.log(products);
        }

        fetchProducts();
    }, []);

    return (
        <>
            <div className="shopProductCard">
                {products && products.length > 0 && (
                    products.map(product => (
                        <div className="shopProductCard__details" key={product.id}>
                            <img className="shopProductCard__image" src={"/" + product.imageSrc} alt={product.category}/>
                            <h2 className="shopProductCard__title">{product.title}</h2>
                            {product.discountedPrice ? (
                                <div className="shopProductCard__discount">
                                    <p className="shopProductCard__discount-originalPrice">{product.price}</p>
                                    <p className="shopProductCard__discount-originalPrice">{product.discountedPrice}</p>
                                </div>
                            ) : (
                                <p className="shopProductCard__originalPrice">{product.price}</p>
                            )}
                            <button className="shopProductCard__add">Add to Cart</button>
                        </div>
                    ))
                )
                }
            </div>
        </>
    )
}