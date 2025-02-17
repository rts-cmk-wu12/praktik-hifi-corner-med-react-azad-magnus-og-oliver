import { Link } from "react-router";
import "../style/page/errorpage.scss";

export const ErrorPageComponent = () => {
    return (
        <div className="error-page">
            <h2>404 - Not Found</h2>
            <p>The page you are looking for doesn't exist.</p>
            <Link to={"/"}>
                <button>Go Home</button>
            </Link>
        </div>
    );
};
