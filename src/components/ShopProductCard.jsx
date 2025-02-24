import {useState, useEffect} from "react";
import {apiUrl} from "../utility/ProductionSites.jsx";
import {FilterOptions} from "./FilterOptions.jsx";
import {ProductList} from "./ProductList.jsx";
import {Breadcrumbs} from "./Breadcrumbs.jsx";
import "../style/components/ShopProductCard.scss";

export const ShopProductCard = ({onSearch}) => {
    const [state, setState] = useState({
        products: [],
        filteredProducts: [],
        sortBy: "All",
        itemsPerPage: 100,
    });

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(apiUrl + "products");
                const jsonData = await response.json();
                setState(prevState => ({
                    ...prevState,
                    products: jsonData,
                    filteredProducts: jsonData,
                }));
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchProducts();
    }, []);

    useEffect(() => {
        let filtered = state.products;
        if (onSearch) {
            filtered = state.products.filter(product =>
                product.title.toLowerCase().includes(onSearch.toLowerCase())
            );
        }
        setState(prevState => ({
            ...prevState,
            filteredProducts: filtered,
        }));
    }, [onSearch, state.products]);

    const handleSort = (a, b) => {
        if (state.sortBy === "Price") {
            return a.price - b.price;
        } else if (state.sortBy === "Name") {
            return a.title.localeCompare(b.title);
        }
        return 0;
    };

    const addToCart = (product) => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        localStorage.setItem("cart", JSON.stringify([...existingCart, product]));
    };

    return (
        <>
            <Breadcrumbs />
            <div className="main-shop">
                <h1 className="healine-in-shop-category">Amplifiers</h1>
                <FilterOptions
                    SortBy={state.sortBy}
                    ItemPerPage={state.itemsPerPage}
                    SetSortBy={(value) => setState(prevState => ({...prevState, sortBy: value}))}
                    SetItemPerPage={(value) => setState(prevState => ({...prevState, itemsPerPage: value}))}
                />
                <ProductList
                    products={state.filteredProducts.sort(handleSort)}
                    itemsPerPage={state.itemsPerPage}
                    addToCart={addToCart}
                />
            </div>
        </>
    );
};
