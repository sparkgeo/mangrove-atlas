import React from 'react';
import PropTypes from 'prop-types';

import Chart from 'components/chart';
import Widget from 'components/widget';

import styles from './style.module.scss';

function ChartWidget({
  sentence,
  component,
  chart = true,
  chartData,
  children,
  className,
  ...props
}) {
<<<<<<< HEAD

=======
  const { data, config } = !!chart && chartData;
>>>>>>> 25697e8dbf72d99a9484bee079cf82d30c928363
  return (
    <Widget className={styles.widget} data={data} {...props}>
      <div className={styles.widget_template}>
        <div className={styles.sentence} key={Date.now()}>
          {sentence}
        </div>
        {chart && (
          <Chart
            {...props}
            data={data}
            config={config}
          />
        )}
        {children}
        {component}
      </div>
    </Widget>
  );
}

Widget.propTypes = {
  sentence: PropTypes.node,
  chartData: PropTypes.shape({}),
  chart: PropTypes.boolean,
  children: PropTypes.node,
  className: PropTypes.string,
};

Widget.defaultProps = {
  sentence: null,
  chartData: {},
  chart: true,
  children: null,
  className: null,
};

export default ChartWidget;
