import React, { Component } from 'react';
import { Grid, Col, Row, Section } from '@components';
import { H3, Image } from '@styles';

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
              <H3>Business</H3>
            </Col>
            <Col>
              <Image source={designCategoryIcon} />
              <H3>Design</H3>
            </Col>
            <Col>
              <Image source={economyCategoryIcon} />
              <H3>Economy</H3>
            </Col>
          </Row>
          <Row>
            <Col centered>
              <Image source={computingCategoryIcon} />
              <H3>Business</H3>
            </Col>
            <Col>
              <Image source={literatureCategoryIcon} />
              <H3>Design</H3>
            </Col>
            <Col>
              <Image source={scienceCategoryIcon} />
              <H3>Economy</H3>
            </Col>
          </Row>
        </Grid>
      </Section>
    );
  }
}
