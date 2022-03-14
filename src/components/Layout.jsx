import {
  AppBar,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import mainRoutes from '../routes/mainRoutes';
import { format } from 'date-fns';

const drawerWidth = 170;

const useStyles = makeStyles(theme => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex',
    },
    active: {
      background: '#f4f4f4',
    },
    title: {
      padding: theme.spacing(2),
      textAlign: 'center',
      fontSize: '20px',
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
      background: '#f9f9f9',
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} color="secondary">
        <Toolbar
          // className={classes.appbar}
          sx={{
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Typography variant="h5" color="textSecondary" fontSize={16} flexGrow={1}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography color="textSecondary" fontSize={16}>
            Yulia
          </Typography>
          <Avatar src="/avatar-img.jpg" className={classes.avatar} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawPaper }}
      >
        <div>
          <Typography variant="h5" color="secondary" className={classes.title}>
            My Notes App
          </Typography>
        </div>

        <List>
          {mainRoutes.map(route => (
            <ListItem
              key={route.name}
              button
              onClick={() => history.push(route.path)}
              className={location.pathname === route.path ? classes.active : null}
            >
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText secondary={route.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
