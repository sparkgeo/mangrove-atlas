import { connect } from 'react-redux';
import { fetchAlerts } from 'modules/alerts/actions';
import { setUi } from 'modules/widgets/actions';
import Component from './component';

const mapStateToProps = state => ({
  data: state.alerts,
  isLoading: state.alerts.isLoading,
  locationsList: state.locations.list,
  ui: state.widgets.ui.alerts,
});

const mapDispatchToProps = { setUi, fetchAlerts };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
