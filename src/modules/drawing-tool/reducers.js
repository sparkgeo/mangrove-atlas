import {
  setCurrent,
  setDrawingValue,
  setDrawingMode,
  setDrawingStatus,
} from "./actions";

export default {
  [setCurrent]: (state, { payload }) => ({
    ...state,
    current: payload,
  }),
  [setDrawingValue]: (state, { payload }) => ({
    ...state,
    drawingValue: payload,
  }),
  [setDrawingMode]: (state, { payload }) => ({
    ...state,
    drawingMode: payload,
  }),
  [setDrawingStatus]: (state, { payload }) => ({
    ...state,
    drawingStatus: {
      type: "FeatureCollection",
      features: payload,
    },
  }),
};
