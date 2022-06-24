import axios from "axios";

class APIService {
  constructor() {
    this.client = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`,
      headers: { "Content-Type": "application/json" },
    });

    // staging
    this.clientStaging = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL_STAGING}/api/v2`,
      headers: { "Content-Type": "application/json" },
    });
  }

  fetchLocations = (params = {}) => this.clientStaging
    .get('/locations', { params })
    .then((response) => {
      const { status, statusText, data } = response;
      if (status >= 400) throw new Error(statusText);
      return data;
    });

  fetchMangroveData = (params = {}) => {
    const { id, iso } = params;
    const locationParam = id || iso || "worldwide";

    return this.client
      .get(`/v1/locations/${locationParam}/mangrove_data`)
      .then((response) => {
        const { status, statusText, data } = response;
        if (status >= 400) throw new Error(statusText);
        return data;
      });
  };

  fetchRankingData = (params = {}) => {
    const {
      filter = "gain",
      startDate = "2007",
      endDate = "2016",
      limit = 5,
    } = params;
    return this.client
      .get(
        `/v1/locations?rank_by=${filter}_m2&start_date=${startDate}&end_date=${endDate}&location_type=country&limit=${limit}&dir=desc`
      )
      .then((response) => {
        const { status, statusText, data } = response;
        if (status >= 400) throw new Error(statusText);
        return data;
      });
  };

fetchMangroveSpeciesData = (params = {}) => this.clientStaging
  .get(`/widgets/biodiversity`, { params: { ...params } })
  .then((response) => {
    const { status, statusText, data } = response;
    if (status >= 400) throw new Error(statusText);
    return data;
  });

  fetchMangroveProtectionData = (params = {}) => this.clientStaging
    .get('/widgets/protected-areas', { params: { ...params }})
    .then((response) => {
      const { status, statusText, data } = response;
      if (status >= 400) throw new Error(statusText);
      return data;
    })


  fetchInvestmentPotentialData = async (params = {}) => {
    const response = await this.clientStaging.get(
      '/widgets/blue-carbon-investment', { params:  { ...params } }
    );
    const { status, statusText, data } = response;
    if (status >= 400) throw new Error(statusText);
    return data;
  };

  fetchMangroveRestorationData = (params = {}) => this.clientStaging
    .get('/widgets/restoration-potential', {  params: {  dir: 'desc', ...params } })
    .then((response) => {
      const { status, statusText,
        data
      } = response;
      if (status >= 400) throw new Error(statusText);
      return data;
    });

  fetchMangroveDegradationAndLossData = (params = {}) => this.clientStaging
    .get('/widgets/degradation-and-loss', { params: { ...params } })
    .then((response) => {
      const { status, statusText,
        data
      } = response;
      if (status >= 400) throw new Error(statusText);
      return data;
    });
  } 

export default APIService;
