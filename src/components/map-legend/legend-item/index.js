import { connect } from 'react-redux';

import { toggleActive } from 'modules/layers/actions';
import { toggleActiveByLayerId as toggleWidgetActive } from 'modules/widgets/actions';
import { setDrawingValue } from "modules/drawing-tool/actions";

import Component from './component';

const mapStateToProps = state => ({
  isCollapsed: state.layers.isCollapsed,
  mapView: state.app.mobile.mapView
});

const mapDispatchToProps = {
  toggleActive,
  toggleWidgetActive,
  setDrawingValue
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
