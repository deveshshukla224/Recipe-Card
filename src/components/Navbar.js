import React from 'react';
import './Navbar.css';
class Navbar extends React.Component{
    render() {
        return(
            <header className="container">
                <h2><a>Recipe App</a></h2>
                <nav className="nav_content">
                    <li><a>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Contact Us</a></li>
                </nav>
            </header>
        );
    }
}
export default Navbar;