import React from 'react';
import { View, Text } from 'react-native';
import { Image } from '@styles';
import { ProgressBar, Col, Grid } from '@components';
import styled from 'styled-components';

import {
  recommendedOne,
  recommendedTwo,
  recommendedThree,
  recommendedFour,
  optionsIcon,
} from '@assets';

const CouseCardWrapper = styled.View`
  flex: 1;
  margin-left: 10;
  margin-right: 10;
  background-color: #ffffff;
  justify-content: space-between;
  padding-top: 15;
  padding-bottom: 15;
  padding-right: 15;
  padding-left: 15;
  border-radius: 8;
`;

const CouseCardHeader = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CourseCard = ({ title, image, progress }) => (
  <CouseCardWrapper>
    <CouseCardHeader>
      <View>
        <Image source={image} width={40} height={40} rounded />
      </View>
      <View>
        <Image source={optionsIcon} width={3.7} height={16} />
      </View>
    </CouseCardHeader>
    <View>
      <Text.H3>{title}</Text.H3>
      <ProgressBar percentage={progress} />
    </View>
  </CouseCardWrapper>
);

const CoursesList = () => (
  <Grid>
    <Col height={140} width={50}>
      <CourseCard
        image={recommendedOne}
        title="Business Management"
        progress={50}
      />
    </Col>
    <Col height={140} width={50}>
      <CourseCard image={recommendedTwo} title="IT Cloud" progress={45} />
    </Col>
    <Col height={140} width={50}>
      <CourseCard
        image={recommendedThree}
        title="Learn how to play guitar"
        progress={60}
      />
    </Col>
    <Col height={140} width={50}>
      <CourseCard
        image={recommendedFour}
        title="Basics of baking cake"
        progress={80}
      />
    </Col>
  </Grid>
);

export default CoursesList;
