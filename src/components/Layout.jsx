import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import mainRoutes from '../routes/mainRoutes';

const drawerWidth = 240;

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
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawPaper }}
      >
        <div>
          <Typography variant="h5" color="secondary" sx={{ textAlign: 'center', mt: 2 }}>
            My Note App
          </Typography>
        </div>

        <List>
          {mainRoutes.map(route => (
            <ListItem
              key="route.name"
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
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
