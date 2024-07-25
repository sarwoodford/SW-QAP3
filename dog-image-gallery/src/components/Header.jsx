// Front End Programming - QAP 3
// Author: Sara Woodford
// Submission Date: July 27, 2024

import React from 'react';
import headerImage from "../assests/images/header-image.png"

function Header(){
    return(
        <header className='DogAppHeader'>
            <img src={headerImage} alt="Dog Gallery Header" className="dogHeader"></img>
            <h3 className="headerText">Dog Image Gallery</h3>
        </header>
    );
};

export default Header;