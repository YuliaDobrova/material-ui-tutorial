import React from "react";
import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  customBtn: {
    fontSize: 60,
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
  customBtn2: {
    ...theme.typography.tab,
    minWidth: 10,
    marginRight: "50px",
    opacity: 1,
    "&:hover": {
      color: theme.palette.common.purple,
      textDecoration: "none",
    },
  },
}));

const CreatePage = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h4"
        component="h2"
        color="primary"
        // color="secondary"
        // color="error"
        align="center"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Typography color="textSecondary" noWrap>
        Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
        ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
        ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      </Typography>
      <ButtonGroup sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="outlined">Outlined</Button>
        <Button color="secondary">Secondary</Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
      </ButtonGroup>
      {/* ICONS */}
      <Button variant="contained" color="error" className={classes.customBtn1}>
        Error
        <ApiIcon color="action" fontSize="small" sx={{ ml: "10px" }} />
      </Button>
      <ApiIcon />
      <br />
      <Button
        className={classes.customBtn}
        variant="outlined"
        color="info"
        startIcon={<SendIcon />}
        endIcon={<ArrowForwardIosIcon />}
        type="button"
      >
        Send
      </Button>
      <br />
      <Button
        className={classes.customBtn}
        variant="outlined"
        color="info"
        startIcon={<SendIcon />}
        endIcon={<ArrowForwardIosIcon />}
        type="button"
      >
        Send
      </Button>
    </Container>
  );
};

export default CreatePage;
