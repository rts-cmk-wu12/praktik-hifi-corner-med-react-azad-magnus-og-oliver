import SearchNav from "../components/searchnav"
import Footer from "../components/footer"
import {ShopProductCard} from "../components/ShopProductCard.jsx";
const ShopCategoryPage = () => {
    return (
        <>
        <SearchNav/>
        <div>
            <ShopProductCard/>
        </div>

        <Footer/>
        </>
    )
}

export default ShopCategoryPage;