/* eslint-disable no-nested-ternary */
import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

const vw = percentageWidth =>
  Dimensions.get('window').width * (percentageWidth / 100);

const vh = percentageHeight =>
  Dimensions.get('window').height * (percentageHeight / 100);

const ColStyle = styled.View`
  flex-direction: column;
  display: flex;
  ${props => props.width && `width: ${vw(props.width)}`};
  ${props => props.height && `height: ${props.height}`};
`;

export default class Col extends React.Component {
  render() {
    const { height, width, children } = this.props;
    return (
      <ColStyle height={height} width={width}>
        {children}
      </ColStyle>
    );
  }
}
