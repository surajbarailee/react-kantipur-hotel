import React from 'react'
import "./footer.css"

import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div>
                <footer>
                    <div className="footer-wrapper">
                        <div className="footer-div" >
                            <h3 className="footer-header">About US </h3 >
                            Kantipur hotel has been serving its loyal as well as satisfied customer
                            since 1950 A.D.


                    </div>
                        <div className="footer-div">
                            <h3 className="footer-header">Quick Links</h3 >


                            <ul>
                                <li><Link to='/' className="footer-links">Home</Link></li>
                                <li><Link to='/rooms' className="footer-links">Rooms</Link></li>
                                <li><Link to='/contact' className="footer-links">Contact</Link></li>
                                <li><Link to='/error' className="footer-links">ErrorPage</Link></li>




                            </ul>

                        </div>
                        <div className="footer-div">
                            <h3 className="footer-header">Address</h3 >


                            <ul>
                                <li>Putalisadak,Kathmandu</li>
                                <li>P.O.Box 45987</li>
                                <li>01-4995634</li>
                                <li ><a href="mailto:abcdexample@gmail.com" className="footer-mail">kantipurhotel@gmail.com</a></li>
                            </ul>
                        </div>
                        <div className="footer-copyright-div">
                            &copy;Kantipur Hotel
                     </div>
                    </div>


                </footer>


            </div>
        </>
    )
}