import SearchNav from "../components/searchnav";
import  Footer from "../components/footer";
function Cart() {
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

                    </div>
                    <div className="cart__summary">
                        <h2 className="cart__summary-title">Order Summary</h2>
                        <div className="cart__summary-subtotal">
                            <span className="cart__summary-label">Subtotal:</span>
                            <span className="cart__summary-amount" id="subtotal-amount">0.00.kr</span>
                        </div>
                        <div className="cart__summary-shipping">
                            <span className="cart__summary-label">Shipping:</span>
                            <span className="cart__summary-amount" id="shipping-amount">0.00.kr</span>
                        </div>
                        <div className="cart__summary-total">
                            <span className="cart__summary-label">Total:</span>
                            <span className="cart__summary-amount" id="total-amount">0.00.kr</span>
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