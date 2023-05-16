import React from "react";
import { createContext, useState } from "react";
import { useEffect } from "react";
import FormContainer from "../component/FormContainer";
export const CreateContext = createContext();

const getFormData = () => {
  const getData = localStorage.getItem("data");
  if (getData) {
    return JSON.parse(localStorage.getItem("data") || "");
  } else {
    return [];
  }
};

function Context(children) {
  // Defining state.

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [formData, setFormData] = useState({
    firstName: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    lastName: {
      value: "",
      isValid: false,
      errorMessage: "",
    },

    email: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    phone: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    password: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    confirmPassword: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
  });
  const [data, setData] = useState([]);
  const [businessFormData, setBusinessFormData] = useState({
    brandName: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    brandType: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    streetAddress: {
      value: "",
      isValid: false,
      errorMessage: "",
    },

    city: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    zipCode: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    taxIdNumber: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
  });
  const [businessFormDataRecords, setBusinessFormDataRecords] = useState([]);

// Personal Information form (FormData) : Personal information data validation on Onchange
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let errorMessage = "";
    let isValid = true;
    if (name === "firstName" && value.length < 3) {
      errorMessage = "Name must be at least 3 characters long";
      isValid = false;
    } else if (name === "lastName" && value.length < 3) {
      errorMessage = "Last name must be at least 3 characters long";
      isValid = false;
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      errorMessage = "Please enter a valid email address";
      isValid = false;
    } else if (name === "phone" && value.length < 10) {
      errorMessage = "Please enter valid phone number";
      isValid = false;
    } else if (name === "password" && value.length < 6) {
      errorMessage = "Password must be at least 6 characters";
      isValid = false;
    } else if (
      name === "confirmPassword" &&
      value.length !== formData.password.value.length &&
      formData.confirmPassword !== formData.password
    ) {
      errorMessage = "Re-password didn't match";
      isValid = false;
    }

    setFormData({
      ...formData,
      [name]: {
        value,
        isValid,
        errorMessage,
      },
    });
  };

// Personal Information form (FormData) : Handle personal information on submit 
  const handleSubmit = (event) => {
    event.preventDefault();
    const unique = { id: new Date().getTime().toLocaleString(), formData };
    const getData = [...data, unique];
    setData(getData);
    console.log(formData);
  };

 // Personal Information form (FormData) : Store personal information to the local storage.
  useEffect(() => {
    const setData_LocalStorage = localStorage.setItem(
      "data",
      JSON.stringify(data)
    );
    console.log("set=>", setData_LocalStorage);
  }, [data]);


//  Bussiness information form logic.

// Business Information Form (BusinessInformation) : Bussiness information form data validation on Onchange
  const handleChangeBussinessForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // Validate input value
    let errorMessage = "";
    let isValid = true;
    if (name === "brandName" && value.length < 3) {
      errorMessage = "Brand name must be at least 3 characters long";
      isValid = false;
    } else if (name === "brandType" && value === "") {
      errorMessage = "Brand name must be at least 3 characters long";
      isValid = false;
    } else if (name === "streetAddress" && value.length < 3) {
      errorMessage = "Please enter a valid address";
      isValid = false;
    } else if (name === "city" && value.length < 3) {
      errorMessage = "Please enter a valid  city name";
      isValid = false;
    } else if (name === "zipCode" && value.length !== 6) {
      errorMessage = "Zip code must be 6-digit ";
      isValid = false;
    } else if (name === "taxIdNumber" && value.length < 3) {
      errorMessage = "Please enter a valid tax id number";
      isValid = false;
    }
    setBusinessFormData({
      ...businessFormData,
      [name]: {
        value,
        isValid,
        errorMessage,
      },
    });
  };
//  Business Information Form (BusinessInformation) : Handle bsiness information on submit 
  const handleSubmitBussinessForm = (event) => {
    event.preventDefault();
    const unique = {
      id: new Date().getTime().toLocaleString(),
      businessFormData,
    };
    const getData = [...businessFormDataRecords, unique];
    setBusinessFormDataRecords(getData);
    console.log(businessFormData);
    console.log(businessFormData.brandType.value.length);
  };

//  Business Information Form (BusinessInformation)  : Store business infromation to the local storage.
  useEffect(() => {
    const setData_LocalStorage = localStorage.setItem(
      "businessFormDataRecords",
      JSON.stringify(businessFormDataRecords)
    );
    console.log("set=>", setData_LocalStorage);
  }, [businessFormDataRecords]);

// Stepper logic.
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      firstName: {
        value: "",
        isValid: false,
        errorMessage: "",
      },
      lastName: {
        value: "",
        isValid: false,
        errorMessage: "",
      },

      email: {
        value: "",
        isValid: false,
        errorMessage: "",
      },
      phone: {
        value: "",
        isValid: false,
        errorMessage: "",
      },
      password: {
        value: "",
        isValid: false,
        errorMessage: "",
      },
      confirmPassword: {
        value: "",
        isValid: false,
        errorMessage: "",
      },
    });
    setBusinessFormData({
      brandName: {
        value: "",
        isValid: false,
        errorMessage: "",
      },
      brandType: {
        value: "",
        isValid: false,
        errorMessage: "",
      },
      streetAddress: {
        value: "",
        isValid: false,
        errorMessage: "",
      },

      city: {
        value: "",
        isValid: false,
        errorMessage: "",
      },
      zipCode: {
        value: "",
        isValid: false,
        errorMessage: "",
      },
      taxIdNumber: {
        value: "",
        isValid: false,
        errorMessage: "",
      },
    });
  };

  return (
    <CreateContext.Provider
      value={{
        handleChange,
        formData,
        handleSubmit,
        handleReset,
        handleSkip,
        handleBack,
        handleNext,
        activeStep,
        skipped,
        isStepOptional,
        businessFormData,
        businessFormDataRecords,
        handleChangeBussinessForm,
        handleSubmitBussinessForm,
      }}
    >
      <FormContainer />
    </CreateContext.Provider>
  );
}

export default Context;
