import HomeSectionCard from "./HomeSectionCard"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState , useEffect} from "react";
export default function HomeSection({mens_kurta, section_name}) {

    const [activeIndex, setActiveIndex] = useState(0);

       const getVisible = function(){
        const width = window.innerWidth;
           if (width >= 1500) return 5;
           if (width >= 1100) return 4;
           if (width >= 750) return 3;
        if (width >= 400) return 2;
        else return 1;
    }

    const [maxIndex, setMaxIndex] = useState(getVisible());

        const responsive = {
        0: { items: 1 },
            400: { items: 2 },
            750: { items: 3 },
            1100 :{items : 4},
        1500 : {items : 5}
    }

    const prevButton = function(){
        setActiveIndex((index) => Math.max(index - 1,0));
    }


    const nextButton = function () {

        setActiveIndex((index) => Math.min(index + 1,maxIndex));
    }

    const syncActive = ({ item }) => {
        setActiveIndex(item);
    }

    const items = mens_kurta.slice(0,10).map((image) => <HomeSectionCard image={image} section_name={section_name}/>)

 
    const handleResize = function () {
        setMaxIndex((maxIndex) => {
            return items.length - 1 - getVisible();
        })
   }

    useEffect(() => {

        window.addEventListener("resize", handleResize)
        
        return () => window.removeEventListener("resize", handleResize);
        
    }, [])

    return (
        <>
            <div className="px-4 lg:px-8 ">
                <h3 className="font-extrabold text-2xl text-gray-800 py-5">{ section_name }</h3>
                <div className="relative p-3 border border-black/10">
             <AliceCarousel
                items={items}
                responsive={responsive}
                disableButtonsControls
                        infinite
                        paddingLeft={16}
                        disableDotsControls
                        activeIndex={activeIndex}
                        onSlideChanged={syncActive}
                    />
                    
                    {activeIndex==maxIndex ? "" : <button onClick={nextButton} className="absolute cursor-pointer z-10 top-30 right-0 translate-x-5 shadow-md bg-white rounded-full p-3 hover:bg-gray-100" >
<KeyboardArrowRightIcon/>
                    </button>}
                    

                  {activeIndex==0 ? "" :    <button onClick={prevButton} className="absolute cursor-pointer z-10 top-30 left-0 -translate-x-5 shadow-md rounded-full bg-white p-3 hover:bg-gray-100" >
<KeyboardArrowLeftIcon/>
                    </button>}
                    </div>
                </div>
            </>
    )
}