import React from 'react';
import {
  recommendedOne,
  recommendedTwo,
  recommendedThree,
  recommendedFour,
  profileOne,
  profileTwo,
  profileThree,
  profileFour,
} from '@assets';

import { SearchBar, RecommendedList, InstructorsList } from '@components';
import { Wrapper } from '@styles';

const INSTRUCTORS_DATA = [
  {
    key: 1,
    name: 'James',
    image: profileOne,
    position: 'Economy',
  },
  {
    key: 2,
    name: 'Anna',
    image: profileTwo,
    position: 'Design',
  },
  {
    key: 3,
    name: 'Peter',
    image: profileThree,
    position: 'Photography',
  },
  {
    key: 3,
    name: 'Linda',
    image: profileFour,
    position: 'Arts',
  },
];

const RECOMMENDED_DATA = [
  {
    key: 1,
    name: 'Business',
    image: recommendedOne,
    category: 'Economy',
  },
  {
    key: 2,
    name: 'Basic Of',
    image: recommendedTwo,
    category: 'Design',
  },
  {
    key: 3,
    name: 'IT & Cloud',
    image: recommendedThree,
    category: 'Photography',
  },
  {
    key: 3,
    name: 'Project',
    image: recommendedFour,
    category: 'Arts',
  },
];

export default class Search extends React.Component {
  static navigationOptions = {
    title: 'Search',
    header: null,
  };

  render() {
    return (
      <Wrapper>
        <SearchBar />
        <InstructorsList data={INSTRUCTORS_DATA} />
        <RecommendedList data={RECOMMENDED_DATA} />
      </Wrapper>
    );
  }
}
