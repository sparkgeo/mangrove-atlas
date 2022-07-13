import { connect } from 'react-redux';
import { setUi } from 'modules/widgets/actions';

import { fetchMangroveSpeciesData } from 'modules/mangrove-species-data/actions';
import { getLocationType } from 'modules/pages/sagas';

import Component from './component';

const mapStateToProps = state => ({
  isLoading: state.mangroveSpeciesData.isLoading,
  data: state.mangroveSpeciesData.data,
  ui: state.widgets.ui.species,
  locationsList: state.locations.list,
  currentLocationId: state.locations.currentId,
  current: state.locations.current.id || state.locations.current.iso,
  locationType: getLocationType(state.router.type),
});

const mapDispatchToProps = {
  setUi,
  fetchMangroveSpeciesData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
