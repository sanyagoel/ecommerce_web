import CartItem from "./CartItem"
import CartPrice from "./CartPrice"

export default function Cart() {
    return (
        <>
            <div className='flex w-full items-start mt-[2rem] gap-x-[10rem] '>
                <div className="flex flex-col w-[55%]">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className="w-[25%]">
                    <CartPrice/>
                </div>
                    </div>
        </>
    )
}