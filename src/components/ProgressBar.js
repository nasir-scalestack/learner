import React from 'react';
import styled from 'styled-components';

const ProgressBarWrapper = styled.View`
  height: 5;
  display: flex;
  border-radius: 50;
  background-color: #e8eaec;
  flex-direction: row;
  overflow: hidden;
`;

const Filler = styled.View`
  flex-grow: ${props => parseFloat(props.percentage / 100) || 1};
  border-radius: 50;
  background-color: #59d654;
`;

const ProgressBar = ({ percentage }) => (
  <ProgressBarWrapper>
    <Filler percentage={percentage} />
  </ProgressBarWrapper>
);

export default ProgressBar;
