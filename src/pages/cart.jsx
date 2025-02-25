import { useEffect, useState } from "react";
import SearchNav from "~components/searchnav";
import Footer from "~components/footer";
import "~style/main.scss";

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(items);
        calculateTotal(items);
    }, []);

    const calculateTotal = (items) => {
        const subtotal = items.reduce((sum, item) => {
            const price = parseFloat(item.discountedPrice || item.price);
            return sum + price;
        }, 0);
        setTotal(subtotal);
    };

    const removeFromCart = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
        calculateTotal(updatedCart);
    };

    return (
        <>
            <SearchNav />
            <main>
                <section className="cart">
                    <div className="cart__customer">
                        <h2 className="cart__customer-title">Customer Information</h2>
                        <form className="cart__form">
                            <div className="cart__form-group">
                                <label className="cart__form-label" htmlFor="name">Name:</label>
                                <input className="cart__form-input" type="text" id="name" name="name" required />
                            </div>
                            <div className="cart__form-group">
                                <label className="cart__form-label" htmlFor="address">Address:</label>
                                <input className="cart__form-input" type="text" id="address" name="address" required />
                            </div>
                        </form>
                    </div>

                    <h1 className="cart__title">Your Cart</h1>
                    <div className="cart__items">
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart__item">
                                <img src={"/" + item.imageSrc} alt={item.title} className="cart__item-image" />
                                <div className="cart__item-details">
                                    <h3 className="cart__item-title">{item.title}</h3>
                                    <p className="cart__item-price">£{(parseFloat(item.discountedPrice || item.price)).toFixed(2)}</p>
                                </div>
                                <button className="cart__item-remove" onClick={() => removeFromCart(index)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className="cart__summary">
                        <h2 className="cart__summary-title">Order Summary</h2>
                        <div className="cart__summary-subtotal">
                            <span className="cart__summary-label">Subtotal:</span>
                            <span className="cart__summary-amount">£{total.toFixed(2)}</span>
                        </div>
                        <div className="cart__summary-total">
                            <span className="cart__summary-label">Total:</span>
                            <span className="cart__summary-amount">£{total.toFixed(2)}</span>
                        </div>
                        <button className="cart__checkout-btn">Proceed to Checkout</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Cart;