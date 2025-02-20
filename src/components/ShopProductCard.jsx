import {useEffect, useState} from "react";
import {apiUrl} from "../utility/ProductionSites.jsx";
import {Link} from "react-router";
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

        <div className="text-top-left">
            <p>Home / Amplifiers</p>
        </div>



<div className="main-shop">


<div>
<h1 className="healine-in-shop-category">Amplifiers</h1>
</div>

<div className="filters-under-headline">

<div>
<p className="filters-under-headline__text">sort by: <select name="sort" id="sort-select" >
<option value=""> Please choose an option</option>
<option value="Price"> Price</option>
<option value="Name"> Name</option>
</select></p>
</div>

<div>
<p className="filters-under-headline__text">show: <select name="sort" id="sort-select" >
<option value=""> Please choose an option</option>
<option value="Price"></option>
</select></p>
</div>




            <SearchNav onSearch={handleSearch} onKeyDown={handleKeyDown} />
</div>
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
                                    <p className="shopProductCard__discount-originalPrice">£{product.price}</p>
                                    <p className="shopProductCard__discount-discountedPrice">£{product.discountedPrice}</p>
                                </div>
                            ) : (
                                <p className="shopProductCard__originalPrice">£{product.price}</p>
                            )}
                            <Link to={`/product/${product["id"]}`}>  <button className="shopProductCard__add" onClick={() => addToCart(product)}>Add to Cart</button></Link>
                        </div>
                        
                    ))
                )
                }
            </div>
            </div>

            
        </>
    )
}