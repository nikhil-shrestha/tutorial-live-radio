import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import CaliforniaData from '../../../../data/california.json';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const RadioLinks = (props) => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(CaliforniaData);
    };
    fetchData();
  }, []);

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          California State Radio Stations
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <Link to={`/radio/california/1`}>
          <ListItemIcon />
          <ListItemText primary="Bakers Field" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link to={`/radio/california/2`}>
          <ListItemIcon />
          <ListItemText primary="Chico" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link to={`/radio/california/3`}>
          <ListItemIcon />
          <ListItemText primary="Fresno" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link to={`/radio/california/4`}>
          <ListItemIcon />
          <ListItemText primary="Los Angles" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link to={`/radio/california/5`}>
          <ListItemIcon />
          <ListItemText primary="Merced" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link to={`/radio/california/6`}>
          <ListItemIcon />
          <ListItemText primary="Modesto" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link to={`/radio/california/7`}>
          <ListItemIcon />
          <ListItemText primary="Monterey Salinas Santa Cruz" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link to={`/radio/california/8`}>
          <ListItemIcon />
          <ListItemText primary="Oxnard Ventura" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link to={`/radio/california/9`}>
          <ListItemIcon />
          <ListItemText primary="Palm Springs" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link to={`/radio/california/10`}>
          <ListItemIcon />
          <ListItemText primary="Redding" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link to={`/radio/california/11`}>
          <ListItemIcon />
          <ListItemText primary="Riverside San Bernardino" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link to={`/radio/california/12`}>
          <ListItemIcon />
          <ListItemText primary="Sacramento" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link to={`/radio/california/13`}>
          <ListItemIcon />
          <ListItemText primary="San Diego" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link to={`/radio/california/14`}>
          <ListItemIcon />
          <ListItemText primary="San Francisco" />
        </Link>
      </ListItem>
    </List>
  );
};

export default RadioLinks;
