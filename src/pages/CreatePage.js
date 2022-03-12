import React from "react";
import { Button, ButtonGroup, Container, Typography } from "@mui/material";

const CreatePage = () => {
  return (
    <Container>
      <Typography
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
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default CreatePage;
