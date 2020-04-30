import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Hero({ children, hero }) {
    return (
        <>
            <header className={hero}>
                {children}
            </header>

        </>
    )
}

Hero.defaultProps = {
    hero: 'defaultHero'
}