import React from 'react';
import MainCarousel from '../components/HomeCarousel/MainCarousel';
import HomeSection from '../components/HomeSection';
import { mens_kurta } from '../components/ProductsData/menKurtas';
import { menJeans } from '../components/ProductsData/menJeans';
import { men_shirts } from '../components/ProductsData/menShirts';
import { women_lehnga } from '../components/ProductsData/womenlehnga';
import { women_dress } from '../components/ProductsData/womenDress';
import { women_jeans } from '../components/ProductsData/womenJeans';
import { women_tops } from '../components/ProductsData/womenTop';

export default function HomePage() {
    return (

        <div>
            <MainCarousel></MainCarousel>
            <div className='flex flex-col space-y-10'>
                <HomeSection mens_kurta={mens_kurta} section_name={"Men's Kurta"} />
                <HomeSection mens_kurta={menJeans} section_name={"Men's Jeans"}/>
                <HomeSection mens_kurta={men_shirts} section_name={"Men's Shirts"}/>
                <HomeSection mens_kurta={women_lehnga} section_name={"Women's Lehanga"}/>
                <HomeSection mens_kurta={women_dress} section_name={"Women's Dress"}/>
                <HomeSection mens_kurta={women_jeans} section_name={"Women's Jeans"}/>
                <HomeSection mens_kurta={women_tops} section_name={"Women's Tops"}/>
                
            </div>
        </div>

    )
}