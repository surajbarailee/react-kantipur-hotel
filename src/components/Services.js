import React, { Component } from "react"
import Title from './Title';
import { FaWifi, FaPizzaSlice, FaCar, FaSteam } from "react-icons/fa";
export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaWifi />,
                title: "Free Wifi",
                info: "Our rooms and all the hallways are covered with guarenteed 30Mbps speed of internet"

            },
            {
                icon: <FaPizzaSlice />,
                title: "Best Restaurant",
                info: "We serve variety of food from typical Nepali to chinese and continental from 5 star chefs"

            },
            {
                icon: <FaCar />,
                title: "Private Vehicle",
                info: "You will be provided your private four wheeler available 24*7 at your services"

            },
            {
                icon: <FaSteam />,
                title: "Gaming Lounge",
                info: "Seperate gamer space with poeeerful PCs and X-BOXes with high speed internet and headphones"

            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>

                        );
                    }
                    )}
                </div>
            </section>
        )
    }


}