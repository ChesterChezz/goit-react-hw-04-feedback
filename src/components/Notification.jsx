import React from 'react';
import { styled } from 'styled-components';
import PropTypes from 'prop-types';

export const Text = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: red;
`;

export const Notification = ({ message }) => {
  return <Text>{message}</Text>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
