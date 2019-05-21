import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from 'react-router-dom';
import Services from '../components/Services'
import FeaturedRooms from "../components/FeaturedRooms"

export default function Home() {
    return (
        <>
        <Hero >
            <Banner title="Best Rooms of Capital" subtitle="Low price as much as Nrs.100">
                <Link to='/rooms' className="btn-primary">
                Check Rooms
                
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms></FeaturedRooms>
        
        </>
        )
    }
