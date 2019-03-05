import React from 'react';
import { Platform } from 'react-native';
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

const renderTabIcon = (focused, icon) => (
  <TabBarIcon focused={focused} name={icon} />
);

const ChatsStack = createStackNavigator({
  Chats,
});

ChatsStack.navigationOptions = {
  tabBarLabel: 'Chats',
  tabBarIcon: ({ focused }) =>
    renderTabIcon(
      focused,
      Platform.OS === 'ios' ? 'ios-options' : 'md-options'
    ),
};

const CoursesStack = createStackNavigator({
  Courses,
});

CoursesStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) =>
    renderTabIcon(
      focused,
      Platform.OS === 'ios' ? 'ios-options' : 'md-options'
    ),
};

const HomeStack = createStackNavigator({
  Home,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) =>
    renderTabIcon(
      focused,
      Platform.OS === 'ios' ? 'ios-options' : 'md-options'
    ),
};

const SearchStack = createStackNavigator({
  Search,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) =>
    renderTabIcon(
      focused,
      Platform.OS === 'ios' ? 'ios-options' : 'md-options'
    ),
};

const SettingsStack = createStackNavigator({
  Settings,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) =>
    renderTabIcon(
      focused,
      Platform.OS === 'ios' ? 'ios-options' : 'md-options'
    ),
};

export default createBottomTabNavigator({
  ChatsStack,
  CoursesStack,
  HomeStack,
  SearchStack,
  SettingsStack,
});
