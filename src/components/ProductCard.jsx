import {Link} from "react-router-dom";

export const ProductCard = ({product, addToCart}) => {
    return (
        <div className="shopProductCard__details">
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
                    <p className="shopProductCard__discount-originalPrice">£{product.price}</p>
                    <p className="shopProductCard__discount-discountedPrice">£{product.discountedPrice}</p>
                </div>
            ) : (
                <p className="shopProductCard__originalPrice">£{product.price}</p>
            )}
            <button className="shopProductCard__add" onClick={() => addToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
};
