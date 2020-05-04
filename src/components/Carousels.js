import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Img1 from '../images/room-1.jpeg'
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
          src={Img3}
          alt="First slide"
        />
        <Carousel.Caption top>

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
          src={Img1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Porsche 911</h3>
          <p>911 is the sum of its predecessors – and is therefore a reflection of the past and a vision of the future. The silhouette: iconic. The design: timeless. The technology: inspired by great racing victories and always one step ahead. With the eighth generation of the 911, we’re driving into the future.
</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

