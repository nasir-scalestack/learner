import React, { Component } from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { Section } from '@components';

import { Image } from '@styles';
import {
  businessCategoryIcon,
  computingCategoryIcon,
  designCategoryIcon,
  economyCategoryIcon,
  literatureCategoryIcon,
  scienceCategoryIcon,
} from '@assets';

const Grid = styled.View`
  display: flex;
  flex-direction: column;
`;

const Col = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 20;
`;

const GridItem = styled.View`
  flex: 1;
  align-items: center;
`;

export default class CategoryList extends Component {
  render() {
    return (
      <Section title="Categories">
        <Grid>
          <Col>
            <GridItem>
              <Image source={businessCategoryIcon} />
              <Text>Business</Text>
            </GridItem>
            <GridItem>
              <Image source={designCategoryIcon} />
              <Text>Design</Text>
            </GridItem>
            <GridItem>
              <Image source={economyCategoryIcon} />
              <Text>Economy</Text>
            </GridItem>
          </Col>
          <Col>
            <GridItem>
              <Image source={computingCategoryIcon} />
              <Text>Business</Text>
            </GridItem>
            <GridItem>
              <Image source={literatureCategoryIcon} />
              <Text>Design</Text>
            </GridItem>
            <GridItem>
              <Image source={scienceCategoryIcon} />
              <Text>Economy</Text>
            </GridItem>
          </Col>
        </Grid>
      </Section>
    );
  }
}
