import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from 'react-router-dom'
import Services from "../components/Services"
import FeaturedRooms from "../components/FeaturedRooms"
import Carousels from '../components/Carousel'

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="Luxurious Car Rental" subtitle="staring at $199 per day">

                    <Link to="/rooms" className="btn-primary">
                        our cars
                </Link>
                </Banner>
            </Hero>
            
            <Services></Services>
            <FeaturedRooms></FeaturedRooms>

        </>
    )
}

