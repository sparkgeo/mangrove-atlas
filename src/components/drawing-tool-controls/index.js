import { connect } from "react-redux";

import { setDrawingMode, setDrawingValue, setCustomGeojsonFeatures } from "modules/drawing-tool/actions";
import { setMobileView } from 'modules/app/actions';
import { closeSearchPanel } from "modules/locations/actions";

import Component from "./component";

const mapStateToProps = (state) => ({
  locationType: state.router.type,
  drawingMode: state.drawingTool.drawingMode,
  openModal: state.locations.isOpened,
  drawingValue: state.drawingTool.drawingValue,
  customGeojsonFeatures: state.drawingTool.customGeojsonFeatures,
  locationsModal: state.locations.isOpened,
  mapView: state.app.mobile.mapView,
});

const mapDispatchToProps = {
  setDrawingMode,
  setDrawingValue,
  setCustomGeojsonFeatures,
  closeSearchPanel,
  setMobileView
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
