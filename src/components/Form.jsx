import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button, TextField, Typography } from "@mui/material";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Form = ({ classes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

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
    <>
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
        <FormControl>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <br />
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
    </>
  );
};

export default Form;
