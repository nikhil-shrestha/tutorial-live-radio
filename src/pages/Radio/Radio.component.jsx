import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import basicData from '../../data/data1.json';
import SanFrancisco from '../../data/c_sanFrancisco.json';
import SanDiego from '../../data/c_sanDiego.json';
import Sacramento from '../../data/c_sacramento.json';
import Riverside_san_Bernardino from '../../data/c_riverside_san_Bernardino.json';
import Redding from '../../data/c_redding.json';
import PalmSprings from '../../data/c_palmSprings.json';
import Oxnard_ventura from '../../data/c_oxnard_ventura.json';
import Monterey_salinas_santaCruz from '../../data/c_monterey_salinas_santaCruz.json';
import Modesto from '../../data/c_modesto.json';
import Merced from '../../data/c_merced.json';
import LosAngles from '../../data/c_losAngles.json';
import Fresno from '../../data/c_fresno.json';
import Chico from '../../data/c_chico.json';
import Bakersfield from '../../data/c_bakersfield.json';

import { RadioGrid } from './components';

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

  const stationId = props.match.params.stationId;

  const [data, setData] = useState([]);

  useEffect(() => {
    if (stationId === '1') {
      setData(Bakersfield);
    } else if (stationId === '2') {
      setData(Chico);
    } else if (stationId === '3') {
      setData(Fresno);
    } else if (stationId === '4') {
      setData(LosAngles);
    } else if (stationId === '5') {
      setData(Merced);
    } else if (stationId === '6') {
      setData(Modesto);
    } else if (stationId === '7') {
      setData(Monterey_salinas_santaCruz);
    } else if (stationId === '8') {
      setData(Oxnard_ventura);
    } else if (stationId === '9') {
      setData(PalmSprings);
    } else if (stationId === '10') {
      setData(Redding);
    } else if (stationId === '11') {
      setData(Riverside_san_Bernardino);
    } else if (stationId === '12') {
      setData(Sacramento);
    } else if (stationId === '13') {
      setData(SanDiego);
    } else if (stationId === '14') {
      setData(SanFrancisco);
    }
  }, []);

  return (
    <Container fixed>
      <Paper className={classes.paper}>
        <h3>Local Radio List</h3>
        <Grid container justify="center" spacing={spacing}>
          <RadioGrid radioState={basicData} />
          <RadioGrid radioState={data} />
        </Grid>
      </Paper>
    </Container>
  );
}

export default RadioPage;
