import React from 'react';
import styled from 'styled-components';
import { H1 } from '@styles';

const SectionButton = styled.Button``;

const SectionHeader = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SectionWrapper = styled.View``;

const Section = ({ title, button, children }) => (
  <SectionWrapper>
    {(title || button) && (
      <SectionHeader>
        {title && <H1>{title}</H1>}
        {button && (
          <SectionButton title={button.title} onPress={button.onPress} />
        )}
      </SectionHeader>
    )}
    {children}
  </SectionWrapper>
);

export default Section;
