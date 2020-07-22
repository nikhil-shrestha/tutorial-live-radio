import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import { RadioGrid } from './components';

import container from './Radio.container';
import RadioLinks from './components/RadioLinks/RadioLinks';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function RadioPage(props) {
  const classes = useStyles();
  const [spacing] = React.useState(2);

  const { radioState, isLoading } = props;

  const getComponent = () => {
    if (isLoading && radioState.results.length === 0) {
      return <CircularProgress />;
    }

    return <RadioGrid radioState={radioState} />;
  };

  return (
    <Container fixed>
      <Paper className={classes.paper}>
        <h3>Local Radio List</h3>
        <Grid container justify="center" spacing={spacing}>
          {/* {getComponent()} */}
          <RadioLinks />
        </Grid>
      </Paper>
    </Container>
  );
}

export default container(RadioPage);
