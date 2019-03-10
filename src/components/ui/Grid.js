import React from 'react';
import styled from 'styled-components';
import Row from './Row';

const GridStyle = styled.View`
  flex: 1;
  flex-direction: ${props => (props.ifRow ? 'column' : 'row')};
`;
export default class Grid extends React.Component {
  ifRow() {
    const { children } = this.props;
    let row = false;
    React.Children.forEach(children, function(child) {
      if (child && child.type === Row) row = true;
    });
    return row;
  }

  render() {
    const { children } = this.props;
    return <GridStyle ifRow={this.ifRow()}>{children}</GridStyle>;
  }
}
