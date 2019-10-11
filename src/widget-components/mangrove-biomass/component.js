import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'components/select';
import ChartWidget from 'components/chart-widget';
import sortBy from 'lodash/sortBy';

import config from './config';

const MangroveBiomass = ({
  data: rawData,
  currentLocation,
  isCollapsed,
  slug,
  name,
  addFilter,
  ...props
}) => {
  const [yearSelected, setEndDate] = useState('2016');
  useEffect(() => {
    addFilter({
      filter: {
        id: 'biomass',
        year: '2016'
      }
    });
  }, []);


  if (!rawData) {
    return null;
  }

  const { chartData, metadata, chartConfig, coverage } = config.parse(rawData, yearSelected);

  if (chartData.length <= 0) {
    return null;
  }

  const dateHandler = (value) => {
    setEndDate(value);
    addFilter({
      filter: {
        id: 'biomass',
        year: value
      }
    });
  };

  const dateOptions = sortBy(metadata.map(year => ({
    label: year.toString(),
    value: year.toString()
  })), ['value']);

  const location = (currentLocation.location_type === 'worldwide')
    ? 'the world’s'
    : <span className="notranslate">{`${currentLocation.name}'s`}</span>;

  const yearSelector = (
    <Select
      value={yearSelected}
      isOptionDisabled={option => option.value === yearSelected}
      options={dateOptions}
      onChange={value => dateHandler(value)}
    />
  );

  const sentence = (
    <>
      Mean mangrove above-ground biomass density in <strong>{location}</strong> was
      average {coverage} mg ha<sup>-1</sup> in {yearSelector}.
    </>
  );
  const widgetData = {
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
      chartData={widgetData}
      {...props}
    />
  );
};

MangroveBiomass.propTypes = {
  currentLocation: PropTypes.shape({})
};

MangroveBiomass.defaultProps = {
  currentLocation: null
};

export default MangroveBiomass;