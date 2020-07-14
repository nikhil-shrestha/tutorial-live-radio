import { connect } from 'react-redux';

import { selectCollection } from '../../store/radio/radio.selector';

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.stationId)(state),
});

const container = connect(mapStateToProps);

export default container;
