import React from 'react';
import { View, Text } from 'react-native';
import { Grid, Col, Row } from '@components';
import { H1, Image } from '@styles';

import {
  defaultProfileImg,
  medalOne,
  medalTwo,
  medalThree,
  medalFour,
} from '@assets';

const ProfileCard = ({ name, points }) => (
  <Grid>
    <Row>
      <Col>
        <Image source={defaultProfileImg} width={100} height={100} rounded />
      </Col>
      <Col>
        <View>
          <H1>{name}</H1>
          <Text>{points} Points</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image source={medalOne} width={30} height={30} rounded />
          <Image source={medalTwo} width={30} height={30} rounded />
          <Image source={medalThree} width={30} height={30} rounded />
          <Image source={medalFour} width={30} height={30} rounded />
        </View>
      </Col>
    </Row>
  </Grid>
);

export default ProfileCard;
