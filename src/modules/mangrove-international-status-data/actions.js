import { createAction } from "vizzuality-redux-tools";

export const fetchRequested = createAction(
  "MANGROVE_INTERNATIONAL_STATUS_DATA/FETCH_REQUESTED"
);
export const fetchSucceeded = createAction(
  "MANGROVE_INTERNATIONAL_STATUS_DATA/FETCH_SUCCEDED"
);
export const fetchFailed = createAction(
  "MANGROVE_INTERNATIONAL_STATUS_DATA/FETCH_FAILED"
);
export const fetchMangroveInternationalStatusData = createAction(
  "MANGROVE_INTERNATIONAL_STATUS_DATA/FETCH_ALL"
);
