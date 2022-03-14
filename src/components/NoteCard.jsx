import { DeleteOutlined } from '@mui/icons-material';
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { lightBlue, pink } from '@mui/material/colors';
import React from 'react';

const NoteCard = ({ id, title, details, category, handleCardDelete }) => {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: pink[100] }}>{id}</Avatar>}
          action={
            <IconButton onClick={() => handleCardDelete(id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={title}
          subheader={category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
