import React, { Component } from 'react'

import { FaThumbsUp, FaInfinity, FaPhoneSquareAlt, FaShieldAlt } from 'react-icons/fa'
import ServicesTitle from '../components/ServicesTitle'
export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaThumbsUp />,
                title: "free cancellation",
                info: "Cancel for free up to 24 hours before your trip starts. Because life happens and it helps to be flexible when it does."
            },
            {
                icon: <FaInfinity />,
                title: "Endless options",
                info: "Choose from hundreds of models you won’t find anywhere else. Pick it up or get it delivered where you want it."
            },
            {
                icon: <FaPhoneSquareAlt />,
                title: "We’ve got your back",
                info: "Rest easy knowing that the community is pre-screened, and customer support and roadside assistance are just a click away."
            },
            {
                icon: <FaShieldAlt />,
                title: "Insurance options included",
                info: "Drive confidently with your choice of protection plans — you’re covered with up to $2M in liablity insurance provided by Intact Financial Corporation."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <ServicesTitle title="Services" ></ServicesTitle>

                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )

                    })}
                </div>
            </section>
        )
    }
}
