import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Hero({ children, hero }) {
    return (
        <>
        <header className={hero}>
            {children}
        </header>
{/* 
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../images/porsche911/porsche-zoom2-_1_.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../images/porsche911/porsche-zoom2-_1_.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="src/images/porsche911/porsche-zoom2-_1_.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel> */}
            </>
    )
}

Hero.defaultProps = {
    hero: 'defaultHero'
}