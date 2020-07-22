import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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

export default function RadioCard(props) {
  const classes = useStyles();

  const { text, subtext, image, guide_id } = props.data;

  return (
    <Card className={classes.root}>
      <CardMedia
        alt="My cool img"
        component="img"
        className={classes.media}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          {text}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {subtext}
        </Typography>
      </CardContent>
      <div className={classes.overlay}>
        <Link
          to={`/radio/${guide_id}`}
          className={classes.icon}
          title="Now Playing"
        >
          <PlayArrowIcon />
        </Link>
      </div>
    </Card>
  );
}
