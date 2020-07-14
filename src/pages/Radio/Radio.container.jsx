import { connect } from 'react-redux';

import { getRadioStationStart } from '../../store/radio/radio.actions';

const mapStateToProps = (state) => ({
  radioState: state.radio,
  isLoading: state.radio.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  onGetRadioStationStart: (id) => dispatch(getRadioStationStart(id)),
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
