import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

import { FaTwitterSquare, FaInstagram, FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
const Footer = () => {


  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4" id="footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow id="row">
          <MDBCol md="4">
            <h5 className="title">Car Rental</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quidem laborum molestias autem alias dolorum adipisci itaque tempora, velit tenetur doloremque dicta, eveniet rerum minima sunt hic porro, aut odit.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Explore:</h5>
            <ul>
              <li className="list-unstyled">
                <Link to="/" className="footer-nav-link">Home</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/cars" className="footer-nav-link">Cars</Link>
              </li>
              {/* <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li> */}
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Find Us On:</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!"><FaInstagram size={40} color="white" /></a>

              </li>
              <li className="list-unstyled">
              <a href="#!"><FaFacebookSquare size={40} color="white" /></a>
              </li>
              <li className="list-unstyled">
              <a href="#!"><FaLinkedin size={40} color="white" /></a>
              </li>
              <li className="list-unstyled">
              <a href="#!"><FaTwitterSquare size={40} color="white" /></a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </MDBFooter>
  );
}

export default Footer;