import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from 'react-router-dom'
import Services from "../components/Services"
import FeaturedRooms from "../components/FeaturedRooms"
import Carousels from '../components/Carousels'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
export default function Home() {
    return (
        <>
            {/* <Hero>
                <Banner title="Luxurious Car Rental" subtitle="staring at $199 per day">
                    <Button variant="outline-light">
                        <Link to="/cars" id="buttonStyle">our cars</Link>
                    </Button>
                </Banner>
            </Hero> */}
            <Carousels></Carousels>
            <Services></Services>
            <FeaturedRooms></FeaturedRooms>

        </>
    )
}

