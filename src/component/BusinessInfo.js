import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, Input, InputLabel } from "@mui/material";
import { Typography } from "@mui/material";
import { InputLabelItem } from "../Utils/Items";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip from "@mui/material/Tooltip";
import "../style/Stepper.css";

import { CreateContext } from "../Utils/Context";
export default function ResponsiveGrid() {
  const { businessFormData, handleChangeBussinessForm } =
    React.useContext(CreateContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 11, sm: 12, md: 12 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item xs={11} sm={10} md={10} sx={{ margin: "4px 0px 0px 0px" }}>
            <Typography
              sx={{ fontSize: { xs: "15px", sm: "20px" }, color: "#526991" }}
            >
              Business Information
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "13px", sm: "15px" },
                color: "#5e6a84",
                paddingBottom: { xs: "5px", sm: "30px" },
              }}
            >
              Please enter information about your company.
            </Typography>
          </Grid>

          <Grid item xs={11} sm={10} md={10} sx={{ margin: "4px 0px 0px" }}>
            <InputLabelItem sx={{ height: "25px" }}>
              <InputLabel
                className="input_label"
                sx={{
                  color: "skyblue",
                  margin: "5px 0px 1px ",
                  fontSize: { xs: "13px", sm: "15px" },
                }}
              >
                GENENRAL INFORMATION
              </InputLabel>
            </InputLabelItem>
          </Grid>
          <Grid item xs={11} sm={5} md={5}>
            <InputLabelItem>
              <InputLabel className="input_label">
                Brand Name <span>*</span>
              </InputLabel>
              <Input
                type="text"
                name="brandName"
                value={businessFormData.brandName.value}
                onChange={handleChangeBussinessForm}
                placeholder="Input Your Brand Name"
                required
                disableUnderline={true}
                className="input"
              />
              {businessFormData.brandName.errorMessage && (
                <div className="error">
                  {businessFormData.brandName.errorMessage}
                </div>
              )}
            </InputLabelItem>
          </Grid>
          <Grid item xs={11} sm={5} md={5}>
            <InputLabelItem>
              <InputLabel className="input_label" sx={{ marginBottom: "5px" }}>
                Brand Type <span>*</span>{" "}
                <Tooltip
                  title=<React.Fragment>
                    {
                      "Loacal: Brands with distribution in 3 divisions or less OR multiple divisions but a total of 150 stores or less"
                    }
                    <br />
                    <p>
                      {
                        "National: Brands with distribution in 4 or more divisions or in more than 150 stores."
                      }{" "}
                    </p>
                  </React.Fragment>
                  placement="top"
                  arrow
                >
                  <HelpIcon
                    sx={{ height: "20px", width: "20px", marginBottom: "-5px" }}
                  />
                </Tooltip>
              </InputLabel>
              <Select
                name="brandType"
                value={businessFormData.brandType.value}
                onChange={handleChangeBussinessForm}
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  height: "39px",
                  color: "gray",
                  "&:hover": {
                    backgroundColor: "none",
                    boxShadow: "none",
                  },
                  "&:focus": {
                    backgroundColor: "none",
                    boxShadow: "none",
                  },
                }}
              >
                <MenuItem value="">
                  <Typography
                    sx={{ color: "#b5c3db", fontSize: "15px", padding: "0px" }}
                  >
                    Select Type Of Your Brand
                  </Typography>
                </MenuItem>
                <MenuItem value={"PersonalBrand"}>Personal Brand</MenuItem>
                <MenuItem value={"ProductBrand"}>Product Brand</MenuItem>
                <MenuItem value={"ServiceBrand"}>Service Brand</MenuItem>
              </Select>
              {businessFormData.brandType.errorMessage && (
                <div className="error">
                  {businessFormData.brandType.errorMessage}
                </div>
              )}
            </InputLabelItem>
          </Grid>
          <Grid item xs={11} sm={5} md={5}>
            <InputLabelItem>
              <InputLabel className="input_label">
                Street Address <span>*</span>
              </InputLabel>
              <Input
                type="text"
                name="streetAddress"
                value={businessFormData.streetAddress.value}
                onChange={handleChangeBussinessForm}
                placeholder="Input Your Street Address"
                required
                disableUnderline={true}
                className="input"
              />
              {businessFormData.streetAddress.errorMessage && (
                <div className="error">
                  {businessFormData.streetAddress.errorMessage}
                </div>
              )}
            </InputLabelItem>
          </Grid>

          <Grid item xs={11} sm={5} md={5}>
            <InputLabelItem>
              <InputLabel className="input_label">
                City <span>*</span>
              </InputLabel>
              <Input
                type="text"
                name="city"
                value={businessFormData.city.value}
                onChange={handleChangeBussinessForm}
                placeholder="Input City"
                required
                disableUnderline={true}
                className="input"
              />
              {businessFormData.city.errorMessage && (
                <div className="error">
                  {businessFormData.city.errorMessage}
                </div>
              )}
            </InputLabelItem>
          </Grid>
          <Grid item xs={11} sm={5} md={5}>
            <InputLabelItem>
              <InputLabel className="input_label">
                Zip Code <span>*</span>
              </InputLabel>
              <Input
                type="text"
                name="zipCode"
                value={businessFormData.zipCode.value}
                onChange={handleChangeBussinessForm}
                placeholder="Input Zip Code"
                required
                disableUnderline={true}
                className="input"
              />
              {businessFormData.zipCode.errorMessage && (
                <div className="error">
                  {businessFormData.zipCode.errorMessage}
                </div>
              )}
            </InputLabelItem>
          </Grid>
          <Grid item xs={11} sm={5} md={5}>
            <InputLabelItem>
              <InputLabel className="input_label">
                Tax ID Number <span>*</span>
              </InputLabel>
              <Input
                type="text"
                name="taxIdNumber"
                value={businessFormData.taxIdNumber.value}
                onChange={handleChangeBussinessForm}
                placeholder="Input Tax ID Number"
                required
                disableUnderline={true}
                className="input"
              />
              {businessFormData.taxIdNumber.errorMessage && (
                <div className="error">
                  {businessFormData.taxIdNumber.errorMessage}
                </div>
              )}
            </InputLabelItem>
          </Grid>
          <Grid item xs={11} sm={10} md={10} sx={{ marginTop: "1px" }}>
            <InputLabelItem sx={{ height: "55px" }}>
              <InputLabel
                className="input_label"
                sx={{ color: "skyblue", marginBottom: "3px" }}
              >
                Documents
              </InputLabel>
              <InputLabel className="input_label">
                Once the following documents are signed, you'll be ready to get
                started{" "}
              </InputLabel>
            </InputLabelItem>
          </Grid>
          <Grid
            item
            xs={11}
            sm={10}
            md={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <Button
              disableFocusRipple
              disableRipple
              aria-label="upload picture"
              component="label"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <input
                accept=".pdf"
                multiple
                type="file"
                className="choosen_file"
              />
              <ArrowForwardIosIcon
                sx={{
                  margin: { xs: "0px 0px 0px 13px", sm: "0px 0px 0px 20px" },
                  padding: "7px",
                  color: "white",
                  backgroundColor: "#8892f6",
                  borderRadius: "5px",
                }}
              />{" "}
            </Button>
          </Grid>
          <Grid
            item
            xs={11}
            sm={10}
            md={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <Button
              disableFocusRipple
              disableRipple
              aria-label="upload picture"
              component="label"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <input
                accept=".pdf"
                multiple
                type="file"
                className="choosen_file"
              />
              <ArrowForwardIosIcon
                sx={{
                  margin: { xs: "0px 0px 0px 13px", sm: "0px 0px 0px 20px" },
                  padding: "7px",
                  color: "white",
                  backgroundColor: "#8892f6",
                  borderRadius: "5px",
                }}
              />{" "}
            </Button>
          </Grid>

          <Grid item xs={11} sm={10} md={10} sx={{ margin: "15px 0px 0px" }}>
            <InputLabelItem sx={{ height: "55px" }}>
              <InputLabel
                className="input_label"
                sx={{
                  color: "skyblue",
                  margin: "5px 0px 1px ",
                  fontSize: { xs: "14px", sm: "15px" },
                }}
              >
                COI PDF UPLOAD
              </InputLabel>
              <InputLabel className="input_label">
                Once the following documents are signed, you'll be ready to get
                started{" "}
              </InputLabel>
            </InputLabelItem>
          </Grid>

          <Grid
            item
            xs={11}
            sm={10}
            md={10}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <Button
              disableFocusRipple
              disableRipple
              aria-label="upload picture"
              component="label"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <input
                accept=".pdf"
                multiple
                type="file"
                className="choosen_file"
              />
              <ArrowForwardIosIcon
                sx={{
                  margin: { xs: "0px 0px 0px 13px", sm: "0px 0px 0px 20px" },
                  padding: "7px",
                  color: "white",
                  backgroundColor: "#8892f6",
                  borderRadius: "5px",
                }}
              />{" "}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
