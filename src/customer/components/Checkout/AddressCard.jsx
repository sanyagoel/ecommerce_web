import { Button } from "@mui/material";

export default function AddressCard() {
    return (
        <>
            <div className="p-2 flex flex-col items-start ">
                <div className="flex gap-1 mb-3 font-semibold">
                    <p>Ram</p>
                    <p>Kapoor</p>
                </div>
                <div className="flex gap-1 mb-3">
                    <p>shshsh, </p>
                    <p>Mumbai, </p>
                    <p>Maharashtra, </p>
                    <p>220321</p>
                </div>
                <div className="font-semibold">Phone Number</div>
                <div>9856785442</div>
                <Button sx={{ bgcolor: "RGB(145 85 253)", mt: 2, color: 'white', fontSize: "0.8em", px: "2rem", py: "0.6rem", '&:hover': { bgcolor: "#cccccc" } }}>Deliver here</Button>
            </div>
        </>
    )
}