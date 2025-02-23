import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import {CustomPageComponent} from "../components/custompage.jsx";



const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <CustomPageComponent redirect={"/"} title={"404 - Not Found"} description={"The page you are looking for doesn't exist."} home={"Go Home"} />
            <Footer/>
        </>
    )
}

export default ErrorPage;