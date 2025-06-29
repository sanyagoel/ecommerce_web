import Rating from '@mui/material/Rating';


export default function ProductDetailsReviewCard() {
    return (
        <>
            
            <div className="border border-gray-300 mx-auto  p-5 flex gap-2">
                   <img
                      alt=""
                      src="https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg"
                      className=" h-12 w-12  rounded-full align-top mr-5"
                />
                <div className="flex flex-col gap-1 align-top">

                    <p className='text-lg font-semibold'>Raam</p>
                    <p className='opacity-70'>April 5, 2023</p>
                    <Rating name="read-only" value={4.5} readOnly precision={.5} />
                    <p>nice product, i love this shirt</p>

                    </div>
            </div>
        
        </>
    )
}