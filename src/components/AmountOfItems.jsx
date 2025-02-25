import { useEffect, useState } from "react";
import "~style/components/AmountOfItems.scss";

export const AmountOfItems = () => {
    const [amount, setAmount] = useState(0);

    const updateAmount = () => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        setAmount(existingCart.length);
    };

    useEffect(() => {
        updateAmount();

        const handleStorageChange = () => updateAmount();
        window.addEventListener("storage", handleStorageChange);

        const interval = setInterval(() => {
            updateAmount();
        }, 50);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="amount-of-items">

            {amount > 0 && <div className="amount-of-items__badge">{amount}</div>}
        </div>
    );
};
