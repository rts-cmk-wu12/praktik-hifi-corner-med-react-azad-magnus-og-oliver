import {useRoutes} from "react-router";
import routes from '~react-pages'


export const App = () => {
    return (
        <>
            {useRoutes(routes)}
        </>
    )
}
