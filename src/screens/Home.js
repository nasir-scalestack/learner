import React from 'react';
import { Wrapper } from '@styles';
import { featuredOne, featuredTwo, featuredThird } from '@assets';
import { Categories, Featured } from '@components';

const data = [
  {
    key: 1,
    title: 'Business Management',
    image: featuredOne,
    price: 19.99,
  },
  {
    key: 2,
    title: 'Learn How To Play Guitar',
    image: featuredTwo,
    price: 16.99,
  },
  {
    key: 3,
    title: 'Medicine & Biology Basic',
    image: featuredThird,
    price: 10.98,
  },
];

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
  };

  render() {
    return (
      <Wrapper>
        <Featured data={data} />
        <Categories />
      </Wrapper>
    );
  }
}
