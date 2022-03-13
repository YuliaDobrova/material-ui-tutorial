import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  // const PORT = process.env.REACT_APP_PORT;

  useEffect(() => {
    // fetch("http://localhost:8000/notes")
    fetch("https://material-ui-tutorial-backend.herokuapp.com/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleCardDelete = async (id) => {
    // await fetch("http://localhost:8000/notes/" + id, {
    await fetch(
      "https://material-ui-tutorial-backend.herokuapp.com/notes/" + id,
      {
        method: "DELETE",
      }
    );
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard {...note} handleCardDelete={handleCardDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NotesPage;
