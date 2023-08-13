import React from 'react';
import PropTypes from 'prop-types';
import * as StatStyles from './Statistics.styled';

export const Statistics = ({ state, total, percents }) => {
  return (
    <>
      {Object.keys(state).map(key => (
        <StatStyles.Stat key={key}>
          {key} : {state[key]}
        </StatStyles.Stat>
      ))}
      <StatStyles.StatTotal>Total : {total}</StatStyles.StatTotal>
      <StatStyles.StatPercents>
        Positive feedback :{percents}%{' '}
      </StatStyles.StatPercents>
    </>
  );
};
Statistics.propTypes = {
  state: PropTypes.object.isRequired,
  total: PropTypes.number,
  percents: PropTypes.number,
};
