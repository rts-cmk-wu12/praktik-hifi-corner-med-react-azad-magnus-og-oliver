import {ProductCard} from "./ProductCard.jsx";

export const ProductList = ({products, itemsPerPage, addToCart}) => {
    return (
        <div className="shopProductCard">
            {products.slice(0, itemsPerPage).length > 0 ? (
                products.slice(0, itemsPerPage).map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};
