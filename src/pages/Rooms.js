import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import RoomContainer from '../components/RoomContainer'
import Button from 'react-bootstrap/Button';
export const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our Cars">

                    <Button variant="outline-light">
                        <Link to="/" id="buttonStyle">Return Home</Link>
                    </Button>
                </Banner>
            </Hero>
            <RoomContainer>

            </RoomContainer>
        </>

    )
}

export default Rooms
