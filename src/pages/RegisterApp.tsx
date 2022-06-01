// import React from "react";

import { Formik, Form } from "formik";
import initialValues from "../utils/initialValues";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Wrapper } from "../components/layout";
import { useState } from "react";

import { AddressForm } from "../components/organisms/forms";
import formModel from "../utils/formModel";

const { formField } = formModel;
const renderStepContent = (step: number) => {
  switch (step) {
    case 0:
      // return <div>Shipping address</div>;
      return <AddressForm formField={formField}/>;

    case 1:
      return <div>Payment details</div>;

    case 2:
      return <div>Review your order</div>;
  }
};

const steps = ["Shipping address", "Payment details", "Review Your order"];

const RegisterApp = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <>
      <Wrapper>
        <Typography>Checkout</Typography>
        <Box sx={{ width: "100%" }}>
          <Stepper
            sx={
              {
                // backgroundColor: 'success.main',
                // color:'black'
              }
            }
            activeStep={0}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Formik initialValues={initialValues} onSubmit={() => {}}>
          <Form>{renderStepContent(activeStep)}</Form>
        </Formik>
      </Wrapper>
    </>
  );
};

export default RegisterApp;
