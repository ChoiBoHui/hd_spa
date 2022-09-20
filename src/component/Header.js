import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">main</Link>
                </li>
                <li>
                    <Link to="/sub01">sub01</Link>
                </li>
                <li>
                    <Link to="/sub02">sub02</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;