/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

const RowStyle = styled.View`
  flex-direction: row;
  flex: ${props => (props.size ? props.size : 1)};
  flex-wrap: wrap;
`;
export default class Row extends React.Component {
  render() {
    const { children } = this.props;

    return <RowStyle>{children}</RowStyle>;
  }
}
