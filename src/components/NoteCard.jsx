import { DeleteOutlined } from '@mui/icons-material';
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { green, lightBlue, pink } from '@mui/material/colors';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  test: {
    border: note => {
      if (note.category === 'reminders') {
        return '2px solid pink';
      }
    },
  },
  avatar: {
    backgroundColor: note => {
      if (note.category === 'reminders') {
        return pink[200];
      }
      if (note.category === 'work') {
        return 'lightblue';
      }
      if (note.category === 'todos') {
        return 'lightgrey';
      }
      if (note.category === 'money') {
        return green[200];
      }
    },
  },
});

const NoteCard = ({ note, handleCardDelete }) => {
  const classes = useStyles(note);
  // console.log('note', note);
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: pink[100] }} className={classes.avatar}>
              {note.category[0].toUpperCase()}
              {/* {note.id} */}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleCardDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
