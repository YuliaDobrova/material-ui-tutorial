import React, { useContext } from "react";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import ButtonsIcons from "../components/ButtonsIcons";
// import TextFields from "../components/TextFields";
import Form from "../components/Form";

const useStyles = makeStyles((theme) => ({
  customBtn: {
    fontSize: 40,
    backgroundColor: theme.palette.common.pink,
    "&:hover": {
      backgroundColor: theme.palette.common.purple,
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
    color: theme.palette.common.pink,
  },
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
}));

const CreatePage = () => {
  const classes = useStyles();

  return (
    <Container>
      {/* <ButtonsIcons classes={classes} /> */}
      {/* <TextFields classes={classes} /> */}
      <Form classes={classes} />
    </Container>
  );
};

export default CreatePage;
