import AddressCard from "./AddressCard"

import OrderScaler from "./OrderScaler"

import RateReviewCard from "./rateReviewCard"

export default function OrderTracker() {
    return (
        <>
            <section className="flex flex-col w-[70%] mx-auto">

                <div className="border border-gray-300 shadow-lg mt-[3rem] p-3">
                <h2 className="font-bold  text-lg ml-2 mb-2">Delivery Address</h2>
                <AddressCard/>
                </div>

                <div className="p-4 border border-gray-300 shadow-lg mt-[2rem]">
                <OrderScaler activeStep={3}/>

                </div>

                <div>
            <RateReviewCard/>
                        <RateReviewCard/>
            <RateReviewCard/>

                </div>
        </section>
        </>
    )
}