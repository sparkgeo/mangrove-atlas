import React, { useEffect, useMemo } from 'react';
import Select from 'components/select';
import PropTypes from 'prop-types';
import ChartWidget from 'components/chart-widget';
import sortBy from 'lodash/sortBy';

// utils
import { format } from 'd3-format';

import config from './config';

const numberFormat = format(',.2f');

function MangroveBiomass({
  data,
  metadata,
  isLoading,
  currentLocation,
  isCollapsed = true,
  slug,
  name,
  addFilter,
  ui,
  setUi,
  fetchMangroveBiomassData,
  ...props
}) {
  const year = ui?.year;
  const years = metadata?.year;
  const aboveGroundBiomass = useMemo(() => !!year && metadata?.avg_aboveground_biomass.find((b) => b.year === year)?.value, [metadata, year]);

  useEffect(() => {
      fetchMangroveBiomassData({
      ...(currentLocation?.iso?.toLowerCase() !== "worldwide" && {
        location_id: currentLocation.id,
      }),
    });
  }, [currentLocation, fetchMangroveBiomassData]);

  useEffect(() => {
    if (!isLoading) {
      addFilter({
        filter: {
          id: 'biomass',
          year: years?.[0]
        }
      });
      setUi({
        id: 'biomass',
        value: {
          year: (year || years?.[0])
        }
      })
    }
  }, [setUi, year, years, addFilter, isLoading]);

  const filteredData = useMemo(() => data?.filter(({ indicator }) => indicator !== "total"), [data]);
  const indicators = useMemo(() => filteredData.map(({ indicator }) => indicator), [filteredData]);

  if (!filteredData) return null;

  const { chartData, chartConfig, downloadData } = config.parse(filteredData, indicators, year);

  if (!chartData || chartData.length <= 0) {
    return null;
  }

  const dateHandler = (value) => {
    setUi({ id: 'biomass', value: { year: value} });
    addFilter({
      filter: {
        id: 'biomass',
        year: value
      }
    });
  };

  const dateOptions = years && sortBy(years.map(year => ({
    label: year.toString(),
    value: year
  })), ['label']);

  const location = (currentLocation.location_type === 'worldwide')
    ? 'the world'
    : <span className="notranslate">{`${currentLocation.name}`}</span>;

  const yearSelector = (
    dateOptions.length > 1 ?
    <Select
      value={year}
      isOptionDisabled={option => option.value === year}
      options={dateOptions}
      onChange={value => dateHandler(value)}
    />
    : year
  );

  const sentence = (
    <>
      Mean mangrove aboveground biomass density in <strong> {location}</strong>
      &nbsp;was <strong>{numberFormat(aboveGroundBiomass)} t / ha</strong> in <strong>{yearSelector}</strong>.
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
      downloadData={downloadData}
      isCollapsed={isCollapsed}
      sentence={sentence}
      chartData={widgetData}
      {...props}
    />
  );
}

MangroveBiomass.propTypes = {
  data: PropTypes.shape({}),
  isLoading: PropTypes.bool,
  currentLocation: PropTypes.shape({}),
  addFilter: PropTypes.func,
  isCollapsed: PropTypes.bool,
  slug: PropTypes.string,
  name: PropTypes.string,
  metadata: PropTypes.shape({}),
  ui: PropTypes.string,
  setUi: PropTypes.func
};

MangroveBiomass.defaultProps = {
  data: null,
  isLoading: true,
  currentLocation: null,
  addFilter: () => { },
  isCollapsed: false,
  slug: null,
  name: null,
  metadata: null,
  ui: null,
  setUi: () => { }
};

export default MangroveBiomass;
