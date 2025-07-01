import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
import './Orders.css'

export default function OrderCard() {

    const navigate = useNavigate();
    return (
        <>
            <section className="w-full border border-gray-300 shadow-lg p-4 cursor-pointer orderCard" onClick={()=>{navigate(`/product/order/${5}`)}}>
                <div className="flex gap-x-4">
                <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/a/r/8/s-aa-00191-yellow-aayu-original-imagmncgchemsmc4.jpeg?q=70" className="w-[5rem] h-[5rem] object-cover object-left-top"></img>
                    <div className="flex flex-col">
                        <p>Women BodyCon Dress</p>
                        <p className='text-xs text-gray-500'>Size: M</p>
                    </div>
                    <p className="ml-[10rem]">&#8377;1099</p>
                    <div className="flex flex-col">
                        <div className="flex ml-[5rem]">
                        <AdjustIcon sx={{ width: "0.8rem", height: "0.8rem"}} className='relative top-2 mr-2 text-green-700' />
                           <p className='font-semibold'>Expected Delivery On Mar 03</p> 
                        </div>
                        <p className='ml-[5rem] text-xs'>Your item has been delivered.</p>
                    </div>
                </div>
        </section>
        </>
    )
}