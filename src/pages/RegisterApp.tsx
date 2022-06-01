// import React from "react";

import { Formik, Form, FormikValues, FormikHelpers } from "formik";
import initialValues from "../utils/initialValues";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Wrapper } from "../components/layout";
import { useState } from "react";
import validationSchema from "../utils/validationSchema";

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
  const selectedValidationSchema = validationSchema[activeStep]
  const isLast = activeStep === steps.length - 1
  // const styles = useAppStyles()

  const sleep = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  const submitForm = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    await sleep(1000)
    alert(JSON.stringify(values, null, 2))
    actions.setSubmitting(false)
    setActiveStep((prev) => prev + 1)
  }

  const handleSubmit = (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (isLast) {
      submitForm(values, actions)
    } else {
      setActiveStep((prev) => prev + 1)
      actions.setTouched({})
      actions.setSubmitting(false)
    }
  }

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
            activeStep={activeStep}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Formik initialValues={initialValues}
        
        validationSchema={validationSchema}
        onSubmit={() => {}}>
       
       
          <Form>{renderStepContent(activeStep)}</Form>
        </Formik>
      </Wrapper>
    </>
  );
};

export default RegisterApp;
