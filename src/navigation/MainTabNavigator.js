/* eslint-disable react/display-name */
import React from 'react';

import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Chats from '../screens/Chats';
import Courses from '../screens/Courses';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Settings from '../screens/Settings';

import { TabBarIcon } from '@components';
import {
  homeIcon,
  homeIconFocused,
  coursesIcon,
  coursesIconFocused,
  moreIcon,
  moreIconFocused,
  searchIcon,
  searchIconFocused,
  messagesIcon,
  messagesIconFocused,
} from '@assets';

const ChatsStack = createStackNavigator({
  Chats,
});

ChatsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      image={messagesIcon}
      imageFocused={messagesIconFocused}
      focused={focused}
    />
  ),
};

const CoursesStack = createStackNavigator({
  Courses,
});

CoursesStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      image={coursesIcon}
      imageFocused={coursesIconFocused}
      focused={focused}
    />
  ),
};

const HomeStack = createStackNavigator({
  Home,
});

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      image={homeIcon}
      imageFocused={homeIconFocused}
      focused={focused}
    />
  ),
};

const SearchStack = createStackNavigator({
  Search,
});

SearchStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      image={searchIcon}
      imageFocused={searchIconFocused}
      focused={focused}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings,
});

SettingsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      image={moreIcon}
      imageFocused={moreIconFocused}
      focused={focused}
    />
  ),
};

export default createBottomTabNavigator(
  {
    HomeStack,
    SearchStack,
    CoursesStack,
    ChatsStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  }
);
