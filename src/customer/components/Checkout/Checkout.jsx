import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import OrderSummary from './OrderSummary';
import DeliveryAddressForm from './DeliveryAddressForm';

const steps = ['Login', 'Add Delivery Address', 'Order Summary','Payment'];

export default function Checkout() {
    
  const [activeStep, setActiveStep] = React.useState(0);
    const location = useLocation();
    const userParams = new URLSearchParams(location.search);
   
    const step = userParams.get("step");

  const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

 

  const handleReset = () => {
    setActiveStep(0);
  };

  return (

    <div className="p-10 lg:p-20">
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step}>
        {steps.map((label, index) => {
          const stepProps = {};
       
         
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
         
                          </Box>
                          <div>
                              {
                                  step==2 ? <DeliveryAddressForm/> : <OrderSummary/>
                              }
                          </div>
        </React.Fragment>
      )}
    </Box>
    </div>
  );
}
