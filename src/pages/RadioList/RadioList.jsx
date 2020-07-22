import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { RadioLinks } from './components';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function RadioList() {
  const classes = useStyles();
  const [spacing] = React.useState(2);

  return (
    <Container fixed>
      <Paper className={classes.paper}>
        <h3>Local Radio List</h3>
        <Grid container justify="center" spacing={spacing}>
          <RadioLinks />
        </Grid>
      </Paper>
    </Container>
  );
}

export default RadioList;
