import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { makeStyles } from "@mui/styles";
import { Scale } from "@mui/icons-material";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  customBtn: {
    fontSize: 40,
    backgroundColor: theme.palette.common.pink,
    "&:hover": {
      backgroundColor: theme.palette.common.purple,
    },
    // transform: {
    //   translate: scale(1.1),
    // },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
    color: theme.palette.common.pink,
  },
  // customBtn2: {
  //   ...theme.typography.tab,
  //   minWidth: 10,
  //   marginRight: "50px",
  //   opacity: 1,
  //   "&:hover": {
  //     color: theme.palette.common.purple,
  //     textDecoration: "none",
  //   },
  // },
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

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details);
    }
  };

  return (
    <Container>
      {/* ============TEXT========== */}
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
      {/* ============BUTTONS========== */}
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
      {/* ============ICONS========== */}
      <Button variant="contained" color="error" className={classes.customBtn1}>
        Error
        <ApiIcon color="action" fontSize="small" sx={{ ml: "10px" }} />
      </Button>
      <ApiIcon />
      <Button className={classes.root}>Styled with Hook API</Button>
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
      {/* ============FORM=======TextField========== */}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note title"
          variant="outlined"
          color="secondary"
          fullWidth
          // required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="primary"
          fullWidth
          multiline
          rows={4}
          // required
          sx={{
            mb: 1,
            mt: 1,
          }}
          error={detailsError}
        />
        <Button
          className={classes.root}
          variant="outlined"
          // color="secondary"
          endIcon={<SendIcon />}
          type="submit"
        >
          Send
        </Button>
      </form>
      {/* ===================================== */}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="outlined-search" label="Search field" type="search" />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>
      </Box>
      {/* ===================================== */}
    </Container>
  );
};

export default CreatePage;
