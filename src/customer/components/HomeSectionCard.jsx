import React from 'react'

export default function HomeSectionCard() {
    return (
        <>
            <div className="cursor-pointer flex flex-col items-center  rounded-lg w-[15rem] bg-white shadow-lg overflow-hidden mx-3 mt-3 mb-3 ">

                <div className='h-[13rem] w-[10rem]'>
                        <img className = " object-cover object-top w-full h-full"src="https://m.media-amazon.com/images/I/91V5ZtebogL._UY1100_.jpg"></img>
                </div>

                <div className='p-4'>
                    <h3 className='text-lg font-medium text-gray-900'>NoFilter</h3>
                    <p className='mt-2 text-sm text-gray-500'>A Straight White Cotton Shirt</p>
                </div>

            </div>
                
        </>
    )
}