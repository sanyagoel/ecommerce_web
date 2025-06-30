import AddressCard from "./AddressCard"
import CartItem from "../Cart/CartItem"
import CartPrice from "../Cart/CartPrice"

export default function OrderSummary() {
    return (
        <>
            <div className="flex flex-col w-[100%]">
                <div className="w-[90%] border border-gray-300 shadow-lg p-3 mx-auto">
                <AddressCard />
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col w-[55%] ml-[2rem]">
                                        <CartItem />
                                        <CartItem />
                                        <CartItem />
                                    </div>
                                    <div className="w-[25%] mx-auto">
                                        <CartPrice/>
                                    </div>
                </div>
        </div>
        </>
    )
}