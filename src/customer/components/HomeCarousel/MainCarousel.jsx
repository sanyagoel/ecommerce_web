import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarData } from './MainCarouselData';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

const MainCarousel = () =>{
const items = MainCarData.map((img)=> <img className="w-[1920px] h-[550px] object-cover cursor-pointer" role='presentation' src={img.image}></img>)


    return (
     <>
     <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
        />
     </>   
    )
};

export default MainCarousel