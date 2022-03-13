import React from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ButtonsIcons = ({ classes }) => {
  return (
    <>
      {/* ============TEXT========== */}

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
    </>
  );
};

export default ButtonsIcons;
