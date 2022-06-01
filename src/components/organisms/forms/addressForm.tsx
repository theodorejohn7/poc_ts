import { FormikValues } from "formik";
import { FC } from "react";
import { InputField } from "../../atoms/formFields";
// import { CssBaseline, Paper } from "@mui/material";

interface PropsType {
  formField: FormikValues;
}

const AddressForm: FC<PropsType> = (props) => {
  const {
    formField: {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zipcode,
      country,
      useAddressForPaymentDetails,
    },
  } = props;

  return (
    <>
      <div>Address Form</div>

      <InputField
        defaultProps={{
          name: firstName.name,
          label: firstName.label,
          fullWidth: true,
        }}
      />
    </>
  );
};

export default AddressForm;
