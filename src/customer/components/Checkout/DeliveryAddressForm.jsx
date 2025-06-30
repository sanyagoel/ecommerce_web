import AddressCard from "./AddressCard"
import { Button } from "@mui/material";


export default function DeliveryAddressForm() {

    const handleForm = function (e) {
        e.preventDefault() 

        const data = new FormData(e.currentTarget);

        console.log("FIRST NAME-",data.get("firstname"))

    }

    return (
        <>
            <div className="flex gap-x-3 w-full mx-auto">
            <section className="border border-gray-300 shadow-lg flex flex-col w-[40%] p-3 overflow-y-scroll scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100 max-h-[450px]">
                {[1,1,1,1,1].map(()=>{
                    return <><AddressCard />
                    <hr className="border border-gray-200 w-full mt-5 mb-3"></hr>
                    </>
                })}
                </section> 

                <section className="border border-gray-300 shadow-lg  w-[50%] ml-[2rem] max-h-[420px]">
                    <form className="p-4" onSubmit={handleForm}>
                        <div className="flex gap-x-5">
                        <input type="text" placeholder="First Name *" className="border border-gray-400 p-3 rounded-md w-[50%]" name="firstname"/>
                        <input type="text" placeholder="Last Name *" className="border border-gray-400 p-3 rounded-md w-[50%]" name="lastname"/>
                        </div>
                        <textarea placeholder="Address *" className="border border-gray-400 p-3 rounded-md w-full mt-4 pb-[3rem]" name="address"/>
                         <div className="flex gap-x-6 mt-4">
                        <input type="text" placeholder="City *" className="border border-gray-400 p-3 rounded-md w-[50%]" name="city"/>
                        <input type="text" placeholder="State/Province/Region *" className="border border-gray-400 p-3 rounded-md w-[50%]" name="state" />
                        </div>
                         <div className="flex gap-x-6 mt-4">
                        <input type="text" placeholder="Zip / Postal Code *" className="border border-gray-400 p-3 rounded-md w-[50%]" name="zip" />
                        <input type="number" placeholder="Phone Number *" className="border border-gray-400 p-3 rounded-md w-[50%]" name="phone"/>
                        </div>

                        <Button sx={{ bgcolor: "RGB(145 85 253)", mt: 4, color: 'white', fontSize: "0.8em", px: "2rem", py: "0.6rem", '&:hover': { bgcolor: "#cccccc" } } } type="submit">Deliver here</Button>

                    </form>
                </section>
                </div>
        </>
    )
}