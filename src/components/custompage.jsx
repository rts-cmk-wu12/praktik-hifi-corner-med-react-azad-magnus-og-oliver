import { Link } from "react-router";
import "../style/page/errorpage.scss";

export const CustomPageComponent = ({redirect, title, description, home}) => {
    return (
        <div className="error-page">
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={redirect}>
                <button>{home}</button>
            </Link>
        </div>
    );
};
