import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'

import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        //console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext

    componentDidMount() {

    }


    render() {
        const { getRoom } = this.context
        const room = getRoom(this.state.slug)
        if (!room) {
            return <div className="error">
                <h3>no such car could be found...</h3>
                <Link to='/rooms' className="btn-primary">
                    back to cars
                </Link>
            </div>
        }

        const { name, description, capacity, price, extras, breakfast, images } = room

        const [mainImg, ...defaultImg] = images

        return (
            <>
                <StyledHero img={mainImg}>
                    <Banner title={`${name}`}>
                        <Link to='/rooms' className='btn-primary'>
                            back to cars
                    </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name} />;
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price : ${price}</h6>
                            
                            <h6>
                                max capacity : 
                                {
                                    capacity > 1 ? ` ${capacity} people` : ` ${capacity} person`
                                }
                            </h6>
                            
                            <h6>{breakfast && "all wheel drive available"}</h6>
                        </article>
                    </div>
                </section>

            </>
        )
    }
}
