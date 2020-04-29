import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { FaEnvelope, FaMobileAlt, FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
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
                <MDBNavbar color="default-color" dark expand="md">
                    
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav>
                            <MDBNavItem>
                                <Link to="/" className="nav-link white-text">Home</Link>
                            </MDBNavItem>
                            <MDBNavItem>
                                <Link to="/cars" className="nav-link white-text">Cars</Link>
                            </MDBNavItem>
                            {/* <MDBNavItem>
                                <MDBNavLink to="#!">Pricing</MDBNavLink>
                            </MDBNavItem> */}

                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <FaMobileAlt size={25} color="white" />
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <FaEnvelope size={25} color="white" />
                                </MDBNavLink>
                            </MDBNavItem>

                            {/* <MDBNavItem>

                                <MDBDropdown>
                                    <MDBDropdownToggle caret>
                                        <MDBIcon icon="user" />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                        <MDBDropdownItem>Action</MDBDropdownItem>
                                        <MDBDropdownItem>Another Action</MDBDropdownItem>
                                        <MDBDropdownItem>Something else here</MDBDropdownItem>
                                        <MDBDropdownItem divider />
                                        <MDBDropdownItem>Separated link</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem> */}
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <MDBIcon fab icon="google-plus-g" />
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>

                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </>
        );
    }
}

export default Navbar;



// import React, { Component } from 'react'
// import logo from "../images/car-logo.png"
// import { FaAlignRight } from 'react-icons/fa'
// import { Link } from 'react-router-dom'


// import HoomeIcon from '@material-ui/icons/Home';
// import { Nav } from 'react-bootstrap';


// export default class Navbar extends Component {


//     state = {
//         isOpen: false
//     }
//     handleToggle = () => {
//         this.setState({ isOpen: !this.state.isOpen })
//     }

//     render() {

//         return (
// <>
//             <nav className="navbar">
//                 <div className="nav-center">
//                     <div className="nav-header">
//                         <Link to="/">
//                             <img src={logo} alt="resort" className="car-logo" />
//                         </Link>
//                         <button type="button" className="nav-btn " onClick={this.handleToggle}>
//                             <FaAlignRight className="nav-icon" />
//                         </button>

//                     </div>
//                     <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
//                         <li>
//                             <Link to="/" className="nav-link">

//                                     Home

//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/cars" className="nav-link">
//                                 Cars
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>


//                 </nav>
//                 <Nav
//   activeKey="/home"
//   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
// >
//   <Nav.Item>
//     <Nav.Link href="/home">Active</Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link eventKey="link-1">Link</Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link eventKey="link-2">Link</Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link eventKey="disabled" disabled>
//       Disabled
//     </Nav.Link>
//   </Nav.Item>
// </Nav>
// </>
//         )
//     }
// }
