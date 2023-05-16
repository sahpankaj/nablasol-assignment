import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../style/Stepper.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import VerifiedIcon from "@mui/icons-material/Verified";
import Profile from "./Profile";
import { Item } from "../Utils/Items";
import BusinessInfo from "./BusinessInfo";
import { CreateContext } from "../Utils/Context";
import CompanyLogo from "../Utils/CompanyLogo.jpeg";

const steps = ["Your Profile", "Business Information", "Additional User"];

export default function FormContainer() {
  const {
    formData,
    handleSubmit,
    handleReset,
    handleBack,
    handleNext,
    activeStep,
    businessFormData,
    handleSubmitBussinessForm,
  } = React.useContext(CreateContext);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px",
      }}
    >
      <Grid item xs={11} sm={10} className="header_container">
        <img src={CompanyLogo} alt={"company logo"} id="company_logo" />
        <Typography id="heading">Create New Account</Typography>
        <Typography>
          <a href="#">Contact us</a>{" "}
        </Typography>
      </Grid>
      <Grid item xs={11} sm={10} md={10}>
        <Item height="100vh">
          <Stepper activeStep={activeStep} className="stepper">
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} sx={{}} className="steps">
                  <StepLabel sx={{ width: "100%" }} className="stepLabel">
                    {" "}
                    {label}
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length - 1 ? (
            <React.Fragment>
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box m={"60px"}>
                <VerifiedIcon
                  sx={{ color: "green", height: "100px", width: "100px" }}
                />
                <Typography variant="h6">Thank You !</Typography>
                <Typography> Form has been successfully submitted</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  padding: "10px",
                  alignItems: "start",
                  border: "1px solid black",
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleReset}
                  sx={{
                    color: "white",
                    backgroundColor: "#8892f6",
                    textTransform: "capitalize",
                    width: { xs: "100%", sm: "30%" },
                    "&:hover": {
                      backgroundColor: "#8892f6",
                    },
                  }}
                >
                  Reset
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1, color: "#a7b6d9" }}>
                Step {activeStep + 1}
                {activeStep === 0 ? <Profile /> : <BusinessInfo />}
              </Typography>
              <Grid
                container
                sx={{
                  display: "flex",
                  padding: "0px 20px",
                  margin: "30px 0px",
                  alignContent: "center",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: {
                    xs: "center",
                    sm: "space-between",
                    md: "space-between",
                  },
                }}
              >
                <Button
                  variant="text"
                  startIcon={<ArrowBackIosIcon />}
                  sx={{
                    color: "#58a9fa",
                    textTransform: "capitalize",
                  }}
                >
                  Back to login
                </Button>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: {
                      xs: "center",
                      sm: "space-between",
                      md: "space-between",
                    },
                  }}
                >
                  {activeStep === 0 ? (
                    ""
                  ) : (
                    <Button
                      variant="outlined"
                      onClick={handleBack}
                      startIcon={<ArrowBackIosIcon />}
                      sx={{
                        color: "#58a9fa",
                        margin: { xs: "10px 0px", sm: " 0px 15px" },
                        textTransform: "capitalize",
                        "&:hover": {
                          backgroundColor: "white",
                        },
                      }}
                    >
                      {activeStep === 0 ? "" : "Previous Step"}
                    </Button>
                  )}
                  <Button
                    sx={{
                      color: "white",
                      borderRadius: "9px ",
                      width: "150px",
                      backgroundColor: "#8892f6",
                      padding: "0px",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "#8892f6",
                      },
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        color: "white",
                        padding: "0px",
                        textTransform: "capitalize",
                        "&:hover": {
                          backgroundColor: "#8892f6",
                        },
                      }}
                    >
                      {activeStep === 0 ? (
                        <button
                          className="btn"
                          style={{
                            backgroundColor: "#8892f6",
                            color: "white",
                            border: "none",
                          }}
                          onClick={handleSubmit}
                          disabled={
                            !formData.firstName.isValid ||
                            !formData.lastName.isValid ||
                            !formData.email.isValid ||
                            !formData.phone.isValid ||
                            !formData.password.isValid ||
                            !formData.confirmPassword.isValid
                          }
                        >
                          Next Step{" "}
                          <ArrowForwardIosIcon sx={{ fontSize: "17px" }} />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn"
                          style={{
                            backgroundColor: "#8892f6",
                            color: "white",
                            border: "none",
                          }}
                          onClick={handleSubmitBussinessForm}
                          disabled={
                            !businessFormData.brandName.isValid ||
                            !businessFormData.streetAddress.isValid ||
                            !businessFormData.city.isValid ||
                            !businessFormData.zipCode.isValid ||
                            !businessFormData.taxIdNumber.isValid ||
                            !businessFormData.brandType.isValid
                          }
                        >
                          Next Step
                          <ArrowForwardIosIcon
                            sx={{ fontSize: "17px", marginLeft: "12px" }}
                          />
                        </button>
                      )}
                    </Button>
                  </Button>
                </Grid>
              </Grid>
            </React.Fragment>
          )}
        </Item>
      </Grid>
    </Grid>
  );
}
