import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/sign_in">Sign In</Link>
            </li>
            <li>
                <Link to="/sign_up">Sign Up</Link>
            </li>
        </ul>
    )
}

export default Header;