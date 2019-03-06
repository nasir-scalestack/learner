import React, { Component } from 'react';
import { Text, Grid, Col, Row, Section } from '@components';

import { Image } from '@styles';
import {
  businessCategoryIcon,
  computingCategoryIcon,
  designCategoryIcon,
  economyCategoryIcon,
  literatureCategoryIcon,
  scienceCategoryIcon,
} from '@assets';

export default class Categories extends Component {
  render() {
    return (
      <Section title="Categories">
        <Grid>
          <Row centered>
            <Col>
              <Image source={businessCategoryIcon} />
              <Text.H3>Business</Text.H3>
            </Col>
            <Col>
              <Image source={designCategoryIcon} />
              <Text.H3>Design</Text.H3>
            </Col>
            <Col>
              <Image source={economyCategoryIcon} />
              <Text.H3>Economy</Text.H3>
            </Col>
          </Row>
          <Row>
            <Col centered>
              <Image source={computingCategoryIcon} />
              <Text.H3>Business</Text.H3>
            </Col>
            <Col>
              <Image source={literatureCategoryIcon} />
              <Text.H3>Design</Text.H3>
            </Col>
            <Col>
              <Image source={scienceCategoryIcon} />
              <Text.H3>Economy</Text.H3>
            </Col>
          </Row>
        </Grid>
      </Section>
    );
  }
}
