import OrderCard from "./OrderCard"

export default function Order() {

    const OrderMap = [
        { "Label": "On The Way","value" : "on_the_way" },
        { "Label": "Delivered","value" : "delivered" },
        { "Label": "Cancelled","value" : "cancelled" },
        { "Label": "Returned","value" : "returned" }
]

    return (
        <>
            <div className="flex items-start">
                 <section className="border border-gray-300 shadow-lg w-[20%] m-[3rem]">
                <p className="mb-[2rem] m-3 text-lg font-bold">Filters</p>
                <p className="ml-3 font-semibold">ORDER STATUS</p>
                    {OrderMap.map((order) => {
                        return <>
                            <div className="flex items-center gap-x-3 m-4">
                            <input type="checkbox" defaultValue={order.value} />
                                <label htmlFor={order.value} className="text-gray-500 font-normal">{order.Label}</label>
                                </div>
                        </>
                    })}

            </section>

                <section className="w-[60%] m-[3rem]">
                    <div className="flex flex-col gap-y-5">
                        {[1, 1, 1].map((or) => {
                            return <OrderCard />
                        })}
                    </div>
                   
            </section>
            </div>
           
          
        </>
    )
}