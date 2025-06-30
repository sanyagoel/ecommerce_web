import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Button, IconButton } from '@mui/material';

export default function CartItem() {
    return (
        <>
            <section className="border border-gray-200 rounded-md  p-4 w-full ml-[4rem] mt-[1rem] shadow-lg ">
                <div className="flex flex-col w-full">
            <div className="flex">
                    <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/a/r/8/s-aa-00191-yellow-aayu-original-imagmncgchemsmc4.jpeg?q=70" className="object-cover w-[8rem] h-[8rem]  object-top"></img>
                    <div className="flex flex-col ml-[1rem]">
                        <h3 className="font-semibold">Women Solid Cotton Blend Straight Dress</h3>
                        <p className="opacity-[60%]">Size: M,White</p>
                        <p className="mb-[1rem] opacity-[60%]">Seller: FOLGEN </p>
                          <div className="flex space-x-2   mt-1">
                            <p className="line-through text-gray-500 font-medium">&#8377; 1299</p>
                            <p className="font-bold">&#8377; 385</p>
                        <p className="text-green-600 font-bold">70% off</p>
                    </div>
                    </div>
                    </div>
                    
                    <sec className="flex items-center mt-3 gap-x-2">
                     <IconButton>
                        <RemoveCircleOutlineIcon/>
                        </IconButton>
                    <span className='flex items-center justify-center rounded border border-gray-200 px-7 h-8'>3</span>
                        <IconButton sx={{color:"RGB(145 85 253)"}}>
                            <ControlPointIcon/>
                        </IconButton>

                        <Button sx={{color:"RGB(145 85 253)", ml:5}}>Remove</Button>
                        </sec>
            </div>
                </section>
        </>
    )
}