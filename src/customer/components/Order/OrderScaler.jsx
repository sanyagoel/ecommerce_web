import { Step, Stepper ,StepLabel} from "@mui/material";

export default function OrderScaler({activeStep}) {

   const steps = [
        "Placed",
        "Order Confirmed",
        "Shipped",
        "Out For  Delivery",
        "Delivered"
    ]
    return (
        <>
        
            <Stepper activeStep={activeStep}>
                {steps.map(step => {
                   return <Step className="">
                        <StepLabel sx={{color:"#9155FD"}}>{ step }</StepLabel>
                </Step>
            })}
            </Stepper>
        
        </>
    )
}