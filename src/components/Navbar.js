import React, { Component } from "react";

import { FaCarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';


class Navbar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <>
                <nav class="fill">
                    <ul>
                        <li><Link to="/" className="nav-link white-text navbar-brand"><FaCarAlt size={25} color="white" /> Car Rental</Link></li>
                        <li><Link to="/" className="nav-link white-text">Home</Link></li>
                        <li><Link to="/cars" className="nav-link white-text">Cars</Link></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">More</a></li>
                        <li><a href="#">Nice staff</a></li>
                    </ul>
                </nav>

            </>
        );
    }
}

export default Navbar;


