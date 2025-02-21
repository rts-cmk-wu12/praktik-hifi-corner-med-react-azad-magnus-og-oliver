import { useEffect, useState } from "react";
import { apiUrl } from "../utility/ProductionSites.jsx";
import { Link } from "react-router-dom";
import "../style/components/ShopProductCard.scss";

export const ShopProductCard = ({ onSearch }) => {
  // onSearch is now a search term, not a function
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(apiUrl + "products");
        const jsonData = await response.json();
        setProducts(jsonData);
        setFilteredProducts(jsonData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    if (onSearch !== undefined) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(onSearch.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [onSearch, products]);

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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
            <p className="filters-under-headline__text">
              sort by:{" "}
              <select name="sort" id="sort-select">
                <option value=""> Please choose an option</option>
                <option value="Price"> Price</option>
                <option value="Name"> Name</option>
              </select>
            </p>
          </div>

          <div>
            <p className="filters-under-headline__text">
              show:{" "}
              <select name="sort" id="sort-select">
                <option value=""> Please choose an option</option>
                <option value="Price"></option>
              </select>
            </p>
          </div>
        </div>

        <div className="shopProductCard">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="shopProductCard__details" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img
                    className="shopProductCard__image"
                    src={"/" + product.imageSrc}
                    alt={product.category}
                  />
                </Link>
                <h2 className="shopProductCard__title">{product.title}</h2>
                {product.discountedPrice ? (
                  <div className="shopProductCard__discount">
                    <p className="shopProductCard__discount-originalPrice">
                      £{product.price}
                    </p>
                    <p className="shopProductCard__discount-discountedPrice">
                      £{product.discountedPrice}
                    </p>
                  </div>
                ) : (
                  <p className="shopProductCard__originalPrice">
                    £{product.price}
                  </p>
                )}
                <button
                  className="shopProductCard__add"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};
