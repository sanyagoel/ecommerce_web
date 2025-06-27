import HomeSectionCard from "./HomeSectionCard"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function HomeSection() {

   

    const items = [1,1,1,1,1].map((tag)=><HomeSectionCard/>)


    const responsive = {
        0: { items: 1 },
        400: { items: 2 },
        918 : {items : 5}
    }
    return (
        <>
            <div className="px-4 lg:px-8 ">
                <div className="relative p-3 border border-black/10">
             <AliceCarousel
                items={items}
                responsive={responsive}
                disableButtonsControls
                        infinite
                        paddingLeft={16}
                        disableDotsControls
                />
                <button className="absolute cursor-pointer z-10 top-30 right-0 translate-x-5 shadow-md bg-white rounded-full p-3 hover:bg-gray-100" >
<KeyboardArrowRightIcon/>
                    </button>

                     <button className="absolute cursor-pointer z-10 top-30 left-0 -translate-x-5 shadow-md rounded-full bg-white p-3 hover:bg-gray-100" >
<KeyboardArrowLeftIcon/>
                    </button>
                    </div>
                </div>
            </>
    )
}