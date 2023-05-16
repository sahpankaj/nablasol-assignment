import * as React from "react";
import Grid from "@mui/material/Grid";
import { Input, Typography } from "@mui/material";
import { InputLabelItem } from "../Utils/Items";
import { CreateContext } from "../Utils/Context";
import "../style/Stepper.css";
import { InputLabel } from "@mui/material";

export default function Profile() {
  const { formData, handleChange } = React.useContext(CreateContext);
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid item xs={11} sm={8}>
        <Typography
          sx={{ fontSize: { xs: "15px", sm: "20px" }, color: "#526991" }}
        >
          Your Profile
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "13px", sm: "15px" },
            color: "#5e6a84",
            paddingBottom: { xs: "5px", sm: "30px" },
          }}
        >
          Enter the login information for your account. You will be able to
          create additional users after registering.
        </Typography>
      </Grid>
      <Grid item xs={11} sm={5}>
        <InputLabelItem>
          <InputLabel className="input_label">
            First Name <span>*</span>
          </InputLabel>
          <Input
            type="text"
            placeholder="Input Your First Name"
            required
            disableUnderline={true}
            autoFocus
            className="input"
            name="firstName"
            value={formData.firstName.value || ""}
            onChange={handleChange}
          />
          {formData.firstName.errorMessage && (
            <div className="error">{formData.firstName.errorMessage}</div>
          )}
        </InputLabelItem>
      </Grid>
      <Grid item xs={11} sm={5}>
        <InputLabelItem>
          <InputLabel className="input_label">
            Last Name <span>*</span>
          </InputLabel>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName.value || ""}
            onChange={handleChange}
            placeholder="Input Your Last Name"
            required
            disableUnderline={true}
            className="input"
          />
          {formData.lastName.errorMessage && (
            <div className="error">{formData.lastName.errorMessage}</div>
          )}
        </InputLabelItem>
      </Grid>
      <Grid item xs={11} sm={5}>
        <InputLabelItem>
          <InputLabel className="input_label">
            Email <span>*</span>
          </InputLabel>
          <Input
            type="email"
            name="email"
            value={formData.email.value}
            onChange={handleChange}
            placeholder="Input Your Email"
            required
            disableUnderline={true}
            className="input"
          />
          {formData.email.errorMessage && (
            <div className="error">{formData.email.errorMessage}</div>
          )}
        </InputLabelItem>
      </Grid>
      <Grid item xs={11} sm={5}>
        <InputLabelItem>
          <InputLabel className="input_label">
            Phone Number <span>*</span>
          </InputLabel>
          <Input
            type="tel"
            name="phone"
            value={formData.phone.value}
            onChange={handleChange}
            placeholder="Input Your Phone Number"
            required
            disableUnderline={true}
            className="input"
          />
          {formData.phone.errorMessage && (
            <div className="error">{formData.phone.errorMessage}</div>
          )}
        </InputLabelItem>
      </Grid>
      <Grid item xs={11} sm={5} sx={{}}>
        <InputLabelItem>
          <InputLabel className="input_label">
            Password <span>*</span>
          </InputLabel>
          <Input
            type="password"
            name="password"
            value={formData.password.value}
            onChange={handleChange}
            placeholder="Create Password"
            required
            disableUnderline={true}
            className="input"
          />
          {formData.password.errorMessage && (
            <div className="error">{formData.password.errorMessage}</div>
          )}
        </InputLabelItem>
      </Grid>
      <Grid item xs={11} sm={5}>
        <InputLabelItem>
          <InputLabel className="input_label">
            Confirm Password <span>*</span>
          </InputLabel>
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword.value}
            onChange={handleChange}
            placeholder="Confirm Your Password"
            required
            disableUnderline={true}
            className="input"
          />
          {formData.confirmPassword.errorMessage && (
            <div className="error">{formData.confirmPassword.errorMessage}</div>
          )}
        </InputLabelItem>
      </Grid>
    </Grid>
  );
}
