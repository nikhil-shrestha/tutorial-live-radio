import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Container';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import RadioGridItem from '../RadioGridItem/RadioGridItem'
import SanFrancisco from '../../../../data/c_sanFrancisco.json';
import SanDiego from '../../../../data/c_sanDiego.json';
import Sacramento from '../../../../data/c_sacramento.json';
import Riverside_san_Bernardino from '../../../../data/c_riverside_san_Bernardino.json';
import Redding from '../../../../data/c_redding.json';
import PalmSprings from '../../../../data/c_palmSprings.json';
import Oxnard_ventura from '../../../../data/c_oxnard_ventura.json';
import Monterey_salinas_santaCruz from '../../../../data/c_monterey_salinas_santaCruz.json';
import Modesto from '../../../../data/c_modesto.json';
import Merced from '../../../../data/c_merced.json';
import LosAngles from '../../../../data/c_losAngles.json';
import Fresno from '../../../../data/c_fresno.json';
import Chico from '../../../../data/c_chico.json';
import Bakersfield from '../../../../data/c_bakersfield.json';



const useStyles = makeStyles({
    root: {
        position: 'relative',
        width: '100%',
        maxWidth: 345,
        '&:hover $overlay': {
            opacity: 0.7,
        },
    },
    media: {
        width: '100%',
        height: 'auto',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: '100%',
        width: '100%',
        opacity: 0,
        transition: '.3s ease',
        backgroundColor: 'black',
    },
    icon: {
        color: 'white',
        fontSize: 100,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    },
});

const RadioDiv = (props) => {

    const classes = useStyles();

    const stationId = props.match.params.stationId;

    const [data, setData] = useState([]);

    useEffect(() => {
        if (stationId === '1') {
            setData(Bakersfield)
        } else if (stationId === '2') {
            setData(Chico)
        } else if (stationId === '3') {
            setData(Fresno)
        } else if (stationId === '4') {
            setData(LosAngles)
        } else if (stationId === '5') {
            setData(Merced)
        } else if (stationId === '6') {
            setData(Modesto)
        } else if (stationId === '7') {
            setData(Monterey_salinas_santaCruz)
        } else if (stationId === '8') {
            setData(Oxnard_ventura)
        } else if (stationId === '9') {
            setData(PalmSprings)
        } else if (stationId === '10') {
            setData(Redding)
        } else if (stationId === '11') {
            setData(Riverside_san_Bernardino)
        } else if (stationId === '12') {
            setData(Sacramento)
        } else if (stationId === '13') {
            setData(SanDiego)
        } else if (stationId === '14') {
            setData(SanFrancisco)
        }

    }, []);



    return (
        <Container fixed>

            {
                data.length > 0 && data.map((item, index) => (

                    <RadioGridItem data={item} />
                ))


            }

        </Container>
    );
}

export default RadioDiv


//  <Grid className='xs-4'>
//                         <Card className={classes.root} key={item.guide_id}>
//                             <CardMedia
//                                 alt="My cool img"
//                                 component="img"
//                                 className={classes.media}
//                                 image={item.image}
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="h5">
//                                     {item.text}
//                                 </Typography>
//                                 <Typography variant="body2" color="textSecondary" component="p">
//                                     {item.subtext}
//                                 </Typography>
//                             </CardContent>
//                             <div className={classes.overlay}>
//                                 <Link
//                                     to={`/radio/${item.guide_id}`}
//                                     className={classes.icon}
//                                     title="Now Playing"
//                                 >
//                                     <PlayArrowIcon />
//                                 </Link>
//                             </div>
//                         </Card>
//                     </Grid> 