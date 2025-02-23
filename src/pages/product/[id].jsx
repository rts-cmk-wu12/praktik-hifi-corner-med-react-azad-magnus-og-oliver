import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/footer.jsx";
import {CustomPageComponent} from "../../components/custompage.jsx";

const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <CustomPageComponent redirect={"/shop-category-page"} title={"Page under-construction 🚧"} description={"The page is in development, please click button to get to home-page."} home={"Go to Shop Items"} />
            <Footer/>
        </>
    )
}

export default ErrorPage;