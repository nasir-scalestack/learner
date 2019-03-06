import React from 'react';
import styled from 'styled-components';
import { Text } from '@styles';

const Button = styled.Button``;

const Header = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Wrapper = styled.View``;

const Section = ({ title, button, children }) => (
  <Wrapper>
    {(title || button) && (
      <Header>
        {title && <Text.H1>{title}</Text.H1>}
        {button && <Button title={button.title} onPress={button.onPress} />}
      </Header>
    )}
    {children}
  </Wrapper>
);

export default Section;
