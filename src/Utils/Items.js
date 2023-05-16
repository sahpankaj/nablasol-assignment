import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";


 export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    padding: "0px",
    marginBottom:"50px",
    borderRadius:"20px 20px 5px 5px",
  }));

 export const InputLabelItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    padding: "0px",
    boxShadow: "none",
    margin: "0px 10px",
    height:"90px"
  }));