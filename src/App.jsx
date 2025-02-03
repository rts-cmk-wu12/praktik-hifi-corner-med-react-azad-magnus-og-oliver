import {useRoutes} from "react-router";
import routes from '~react-pages'
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const App = () => {
    return (
        <>
            {useRoutes(routes)}

            <Navbar />
            <Footer />
            

        </>
    )
}
