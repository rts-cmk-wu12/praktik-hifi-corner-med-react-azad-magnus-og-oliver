import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import {ErrorPageComponent} from "../components/errorpage.jsx";



const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <ErrorPageComponent />
            <Footer/>
        </>
    )
}

export default ErrorPage;