import React from 'react';
import Grid from '@material-ui/core/Grid';

import RadioGridItem from '../RadioGridItem';

const RadioGrid = (props) => {
  const { radioState } = props;

  // let radioItems = [];
  // radioItems = _.orderBy(_.values(props.radioState.results));

  return (
    <>
      {radioState.results.length > 0 &&
        radioState.results.map((obj) => (
          <Grid key={obj.guide_id} item>
            <RadioGridItem {...obj} />
          </Grid>
        ))}
    </>
  );
};

export default RadioGrid;
