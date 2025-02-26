import {useRoutes} from "react-router";
import routes from '~react-pages'
import {Suspense} from "react";
import {FallbackComponent} from "~components/FallbackComponent.jsx";




// Exporting App to be used in main.jsx
export const App = () => {
    return (
        <Suspense fallback={<FallbackComponent/>}>
            {useRoutes(routes)}
        </Suspense>
    )
}