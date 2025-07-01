import { Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CartPrice() {

    const navigate = useNavigate();
    
    const handleCheckout = function () {
        navigate(`/checkout?step=2`)
    }
    return (
         <section className='border border-gray-200 w-full mx-auto mt-[1rem] shadow-lg p-3'>
                            <h3 className='mb-3 text-gray-500 font-bold'>PRICE DETAILS</h3>
                            <hr className="border border-gray-100" />
                            <div className='flex justify-between text-sm mt-3'>
                            <p className='font-semibold'>Price (3 item) </p>
                            <p className='font-semibold text-green-600'>&#8377;4697</p>
                            </div>
        
                             <div className='flex justify-between text-sm mt-3'>
                            <p className='font-semibold'>Discount </p>
                            <p className='font-semibold text-green-600'>-&#8377;3419</p>
                            </div>
        
                             <div className='flex justify-between text-sm mt-3'>
                            <p className='font-semibold'>Delivery Charges </p>
                            <p className='font-semibold text-green-600'>Free</p>
                            </div>
        
                            <hr className="border border-gray-100 mt-3" />
        
                             <div className='flex justify-between text-sm mt-3'>
                            <p className='font-bold text-lg'>Total Amount </p>
                            <p className='font-bold text-green-600 text-lg'>&#8377;1278</p>
                            </div>
        
            <Button onClick={handleCheckout} sx={{bgcolor:"RGB(145 85 253)", mt:5, color:'white', fontSize:"0.7em" , px:"8rem" , py:"0.65rem", mx:"auto",display: "block" , '&:hover' : {bgcolor:"#cccccc"}}}>Check out</Button>
                        </section>
    )
}