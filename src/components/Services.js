import React, { Component } from 'react'
import Title from "./Title"
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocltails",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis culpa asperiores qui repellendus! Distinctio repudiandae aspernatur dicta fuga enim reprehenderit corporis maiores inventore commodi, soluta voluptatem a beatae, autem ullam?"
            },
            {
                icon: <FaHiking />,
                title: "hiking",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis culpa asperiores qui repellendus! Distinctio repudiandae aspernatur dicta fuga enim reprehenderit corporis maiores inventore commodi, soluta voluptatem a beatae, autem ullam?"
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis culpa asperiores qui repellendus! Distinctio repudiandae aspernatur dicta fuga enim reprehenderit corporis maiores inventore commodi, soluta voluptatem a beatae, autem ullam?"
            },
            {
                icon: <FaBeer />,
                title: "free beer",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis culpa asperiores qui repellendus! Distinctio repudiandae aspernatur dicta fuga enim reprehenderit corporis maiores inventore commodi, soluta voluptatem a beatae, autem ullam?"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"></Title>
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
