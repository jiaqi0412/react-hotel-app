import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Img1 from '../images/porsche911/porsche-zoom2-_1_.jpg'
import Img2 from '../images/718/porsche-wallpaper-_1_.jpg'
import Img3 from '../images/macan/porsche-zoom2.jpg'
import Banner from './Banner'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

export default function Carousels() {
  return (
    <Carousel className="carousel">
      <Carousel.Item id="carousel">

        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>

          <Banner title="Luxurious Car Rental" subtitle="staring at $199 per day">
            <Button variant="outline-light">
              <Link to="/cars" id="buttonStyle">our cars</Link>
            </Button>
          </Banner>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Porsche 718</h3>
          <p>A firebrand. A go-getter. Aiming for the skies. The new 718 Spyder is an exclamation mark in a world full of ‘what ifs’. And it is a promise – to every road and to every driver.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Porsche Macan</h3>
          <p>We have proven that we do not follow trends, instead we write our own adventure stories. A compact SUV that inextricably combines sportiness, design and everyday practicality: the new Macan.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

