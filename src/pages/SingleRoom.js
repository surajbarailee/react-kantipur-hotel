import React, { Component } from "react";
import defaultBcg from '../images/room-1.jpeg'
// import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../Context'
import StyledHero from '../components/StyledHero'
import '../../src/App.css'
import KhaltiCheckout from "khalti-web";

// import * as KhaltiCheckout from "khalti-web"; ES6 import with alias
// var KhaltiCheckout = require("khalti-web"); CommonJs



// bookinghandler = () => {
//     checkout.show({ amount: 1000 });
// }

export default class SingleRoom extends Component {




    bookinghandler = (price) => {
        console.log("The value of room taken  is " + price)
        let config = {
            // replace this key with yours
            "publicKey": "test_public_key_11bd7b5c6b9c4b7fa36fd7c19d946708",
            "productIdentity": "1234567890",
            "productName": "Drogon",
            "productUrl": "http://gameofthrones.com/buy/Dragons",
            "eventHandler": {

                onSuccess(payload) {
                    // hit merchant api for initiating verfication
                    console.log(payload)




                    const axios = require('axios');
                    let data = {
                        "token": payload.token,
                        "amount": payload.amount
                    };
                    let config = {
                        headers: { 'Authorization': 'Key test_secret_key_5dba11342c9249108bbabe953f4a33d7' }
                    };
                    axios.post("https://khalti.com/api/v2/payment/verify/", data, config)
                        .then(response => {
                            console.log(response.data);
                            console.log('00000000000000000000');
                        })
                        .catch(error => {
                            console.log(error);
                        });


                },
                // onError handler is optional
                onError(error) {
                    // handle errors
                    console.log(error);
                },
                onClose() {
                    console.log('widget is closing');
                }
            }

        };

        let checkout = new KhaltiCheckout(config);
        checkout.show({ amount: 1000 });
    }








    constructor(props) {
        super(props);






        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);

        if (!room) {
            return <div className="error">
                <h3>No such room could be found</h3>
                <Link to='/rooms' className="btn-primary">
                    Back to Rooms
                </Link>
            </div >
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
        const [mainImg, ...defaultImg] = images
        return (
            <>
                <StyledHero img={images[0]}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            back to rooms
                    </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>Price:Nrs{price}</h6>
                            <h6>size:sqft.{size}</h6>
                            <h6>
                                max people:{
                                    capacity > 1 ? `${capacity} people` : `${capacity} person`
                                }
                            </h6>
                            <h6>{pets ? 'Pets Alloweed' : "No Pets Allowed"}</h6>
                            <h6>{breakfast && 'free breakfast included'}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="Extras">
                        {extras.map((item, index) => {
                            return <li key={index}>-{item}</li>;


                        })}
                    </ul>
                </section>




                <div className="button-div">
                    <button className="myButton" onClick={() => this.bookinghandler(price)}>Book Now</button>
                </div>











            </>
        )


    }
}