import React from 'react'

export default function HomeSectionCard({ image}) {
    return (
        <>
            <div className="cursor-pointer flex flex-col items-center  rounded-lg w-[15rem] bg-white shadow-md overflow-hidden mx-3 mt-3 mb-3 border border-black/10">
                <div className='h-[13rem] w-[10rem]'>
                        <img className = " object-cover object-top w-full h-full"src={image.imageUrl}></img>
                </div>

                <div className='p-4'>
                    <h3 className='text-lg font-medium text-gray-900'>{ image.brand}</h3>
                    <p className='mt-2 text-sm text-gray-500'>{ image.title}</p>
                </div>

            </div>
                
        </>
    )
}