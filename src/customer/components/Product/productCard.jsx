import './productcss.css';


export default function ProductCard({clothes}) {
    return (
        <>
            <div className="h-[20rem] m-3 w-[12rem] cursor-pointer productCard">
            <div className="h-[15rem]">
                <img src={clothes.imageUrl} className="w-full h-full object-cover object-left-top"></img>
            </div>
                 <div className="textPart bg-white p-3">
                    <p className="font-bold text-gray-500 text-xs">{clothes.brand}</p>
                    <p className="text-xs mt-1 font-medium">{clothes.title}</p>
                    <div className="flex space-x-2  text-xs mt-1">
                        <p className="font-bold">&#8377; { clothes.discountedPrice}</p>
                        <p className="line-through text-gray-500 font-medium">&#8377; { clothes.price}</p>
                        <p className="text-green-600 font-bold">{ clothes.discountPersent}% off</p>
                    </div>
                </div>
            </div>
               
            
        </>
    )
}