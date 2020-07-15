import React, { useEffect } from 'react';
import Select from 'components/select';
import ChartWidget from 'components/chart-widget';

import config from './config';

const MangroveAlertsLine = ({
  data,
  isCollapsed,
  slug, name,
  currentLocation,
  addFilter,
  ui,
  ui: { year },
  locationId,
  locationsList,
  setUi,
  fetchAlerts,
  ...props
}) => {
  useEffect(() => {
    if (locationId) {
      const currentLocation = locationsList.find(location => location.iso === locationId)
      fetchAlerts(currentLocation.id, year);
    }
    else { fetchAlerts(510, year) }
  }, [year, locationId]);

  if (!data || data.length <= 0) {
    return null;
  }

  const { startDate, endDate } = ui;
  const { chartData, chartConfig, total } = config.parse(data, startDate, endDate, year);

  if (chartData.length <= 0) {
    return null;
  }
  const changeDate = (type, value) => {
    setUi({
      id: 'alerts',
      value: {
        ...ui,
        [type]: value
      }
    });
  };
  const yearOptions = [ {label: 2020, value: 2020}, {label: 2019, value: 2019}]

  const monthOptions = [
    { label: 'January', value: 1 },
    { label: 'February', value: 2 },
    { label: 'March', value: 3 },
    { label: 'April', value: 4 },
    { label: 'May', value: 5 },
    { label: 'June', value: 6 },
    { label: 'July', value: 7 },
    { label: 'August', value: 8 },
    { label: 'September', value: 9 },
    { label: 'October', value: 10 },
    { label: 'November', value: 11 },
    { label: 'December', value: 12 },
  ];

  const startDateSelect = (
    <Select
      value={startDate}
      options={monthOptions}
      isOptionDisabled={option => parseInt(option.value, 10) > parseInt(endDate, 10)
        || option.value === startDate}
      onChange={value => changeDate('startDate', value)}
    />
  );

  const endDateSelect = (
    <Select
      value={endDate}
      options={monthOptions}
      isOptionDisabled={option => parseInt(option.value, 10) < parseInt(startDate, 10)
        || option.value === endDate}
      onChange={value => changeDate('endDate', value)}
    />
  );

  const yearSelect = (
    <Select
      value={year}
      options={yearOptions}
      onChange={value => changeDate('year', value)}
    />
  );

  const sentence = (
    <>
      There were <strong>{total}</strong> mangrove disturbance alerts<br /> between {startDateSelect}
      &nbsp;and {endDateSelect} in {yearSelect}.
    </>
  );

  const chartRData = {
    data: chartData,
    config: chartConfig
  };

  return (
    <ChartWidget
      name={name}
      data={chartData}
      slug={slug}
      filename={slug}
      isCollapsed={isCollapsed}
      sentence={sentence}
      chartData={chartRData}
      onBrushEnd={({ startIndex, endIndex }) => {
        changeDate('startDate', new Date(chartData[startIndex].date.value).getMonth() + 1);
        changeDate('endDate', new Date(chartData[endIndex].date.value).getMonth() + 1);
      }}
      {...props}
    />
  );
};

export default MangroveAlertsLine;
