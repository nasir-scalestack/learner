import React from 'react';
import styled from 'styled-components';

const Button = styled.Button``;

const Header = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 30;
`;

const Wrapper = styled.View``;

const Section = ({ title, button, children }) => (
  <Wrapper>
    {(title || button) && (
      <Header>
        {title && <Title>{title}</Title>}
        {button && <Button title={button.title} onPress={button.onPress} />}
      </Header>
    )}
    {children}
  </Wrapper>
);

export default Section;
