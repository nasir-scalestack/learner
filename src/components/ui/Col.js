/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

const ColStyle = styled.View`
  flex-direction: column;
  flex: ${props => (props.size ? props.size : 1)};
`;

export default class Col extends React.Component {
  render() {
    const { children } = this.props;
    return <ColStyle>{children}</ColStyle>;
  }
}
