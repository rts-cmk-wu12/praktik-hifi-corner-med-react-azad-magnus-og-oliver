import { useState } from "react";
import SearchNav from "../components/searchnav";
import Footer from "../components/footer";
import { ShopProductCard } from "../components/ShopProductCard";

const ShopCategoryPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <SearchNav onSearch={setSearchTerm} />
            <div>
                <ShopProductCard onSearch={searchTerm} />
            </div>
            <Footer />
        </>
    );
};

export default ShopCategoryPage;
