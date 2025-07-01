import StarIcon from '@mui/icons-material/Star';

export default function RateReviewCard() {
    return (
        <>
            <section className="w-full border border-gray-300 shadow-lg p-4 mt-[1.3rem]">
                <div className="flex gap-x-4">
                <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/a/r/8/s-aa-00191-yellow-aayu-original-imagmncgchemsmc4.jpeg?q=70" className="w-[5rem] h-[5rem] object-cover object-left-top mt-[1rem]"></img>
                    <div className="flex flex-col">
                        <p className='mb-[0.6rem]'>Women BodyCon Dress</p>
                        <div className='flex gap-x-1'>
                            <p className='text-xs text-gray-500'>Color:</p>
                            <p className='text-xs text-gray-500 font-semibold mr-2'>pink</p>
                        <p className='text-xs text-gray-500'>Size:</p>
                        <p className='text-xs text-gray-500 font-semibold'>M</p>
                        </div>
                        <p className='mt-[0.6rem]'>Seller: Linaria</p>
                        <p className='mt-[0.6rem]'>&#8377;1099</p>

                    </div>
                    <div className="flex flex-col">
                       
                    </div>

                    <button className='self-center ml-auto text-purple-800 flex items-center gap-x-2 cursor-pointer hover:text-purple-950'>
                        <StarIcon sx={{fontSize:"small"}}/>
                        <p>Rate & Review Product</p>
                    </button>
                </div>
        </section>
        </>
    )
}