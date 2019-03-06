import React from 'react';
import styled from 'styled-components';
import { Text } from '@components';

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
        {title && <Text.H1>{title}</Text.H1>}
        {button && (
          <SectionButton title={button.title} onPress={button.onPress} />
        )}
      </SectionHeader>
    )}
    {children}
  </SectionWrapper>
);

export default Section;
