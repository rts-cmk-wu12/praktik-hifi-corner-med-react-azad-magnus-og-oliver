import {useRoutes} from "react-router";
import routes from '~react-pages'

const AzadApp = () => {
    return (
        <>
            {useRoutes(routes)}
        </>
    )
}
