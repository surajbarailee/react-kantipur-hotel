import React, { Component } from 'react'
import '../App.css'
import "./contact.css"
import { FaFacebook, FaInstagram, FaPinterest, FaDiscord } from "react-icons/fa";

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            subject: '',
            message: '',
            subscribe: ''

        }
    }
    handleUSernameChange = (event) => {
        this.setState({

            username: event.target.value
        })

    }
    handleEmailChange = (event) => {
        this.setState({

            email: event.target.value
        })

    }
    handleSubjectChange = (event) => {
        this.setState({

            subject: event.target.value
        })

    }
    handleMessageChange = (event) => {
        this.setState({

            message: event.target.value
        })

    }


    handleSubscribeChange = (event) => {
        this.setState({

            subscribe: event.target.value
        })

    }

    render() {
        return (
            <>
                <div className="contact-page-main-wrapper">
                    <div className="contact-page">
                        Contact Page
                </div>
                    <div className="contact-page-main-wrapper">
                        <div className="contact-form-left-div">
                            <form method="POST" action="https://formspree.io/baraileesuraj@gmail.com">
                                <ul className="contact-form-list">
                                    <li> Name</li>
                                    <li> <input type="text" name="name" value={this.state.username} onChange={this.handleUSernameChange} required /></li>
                                    <li> Email</li>
                                    <li> <input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} /></li>
                                    <li> Subject</li>
                                    <li> <input type="text" name="subject" value={this.state.subject} onChange={this.handleSubjectChange} /></li>
                                    <li> Message</li>
                                    <li> <textarea name="message" className="contact-form-input-field-text-area" value={this.state.message} onChange={this.handleMessageChange}></textarea></li>
                                    <li><button type="submit" >Send</button>
                                    </li>
                                </ul>
                            </form>


                        </div>
                        <div className="contact-form-right-div">
                            <ul className="contact-form-list">



                                <li>
                                    {/* <!-- Begin Mailchimp Signup Form --> */}


                                    <div id="mc_embed_signup">
                                        <form action="https://gmail.us20.list-manage.com/subscribe/post?u=7caeb8c91c9caf6985e66ba37&amp;id=3502610ff0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                                            <div id="mc_embed_signup_scroll">
                                                <h2>Subscribe</h2>

                                                <div className="mc-field-group">
                                                    <label for="mce-EMAIL">Email Address
                                                    </label>
                                                    <input type="email" value={this.state.Subscribe} name="EMAIL" className="required email" id="mce-EMAIL" onChange={this.handleSubscribeChange} />
                                                </div>
                                                <div id="mce-responses" className="clear">
                                                    <div className="response" id="mce-error-response" ></div>

                                                    <div className="response" id="mce-success-response" ></div>
                                                </div>
                                                <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                                            </div>
                                        </form>
                                    </div>

                                    {/* <!--End mc_embed_signup--> */}
                                </li>
                                <li>Our Location</li>
                                <li>
                                    <div className="mapouter">
                                        <div className="gmap_canvas">
                                            <iframe width="480" height="357" id="gmap_canvas" src="https://maps.google.com/maps?q=putalisadak&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                                            </iframe>
                                        </div>
                                    </div>
                                </li>
                                <li>Stay In Touch</li>
                                <li><div className="contact-social"><a href="//www.facebook.com"><FaFacebook /></a>  <a href="//www.instagram.com"><FaInstagram /></a>  <a href="//discord.com"><FaDiscord /></a> <a href="//pinterest.com"><FaPinterest /></a></div></li>
                            </ul>




                        </div>

                    </div>

                </div>
            </>
        )
    }
}
export default Contact
