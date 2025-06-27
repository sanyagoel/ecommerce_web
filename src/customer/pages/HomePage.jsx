import React from 'react';
import MainCarousel from '../components/HomeCarousel/MainCarousel';
import HomeSection from '../components/HomeSection';


export default function HomePage() {
    return (

        <div>
            <MainCarousel></MainCarousel>
            <div className='flex flex-col space-y-10'>
                <HomeSection />
                                <HomeSection />
                <HomeSection />
                <HomeSection />
                <HomeSection />
                <HomeSection />
                <HomeSection />

                
            </div>
        </div>

    )
}