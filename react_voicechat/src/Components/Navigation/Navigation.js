import React from 'react';
import {Link} from "react-router-dom";

import LogoImdad from '../../../public/images/Imdad.png';
function Navigation() {
    return (
        <nav>
            <Link to="/">
                <img src={LogoImdad} alt="Imdadul" />
            </Link>
        </nav>
    )
}

export default Navigation;
