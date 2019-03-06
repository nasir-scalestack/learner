import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import AppStack from './MainTabNavigator';

import Join from '../screens/Join';
import SignIn from '../screens/SignIn';
import Welcome from '../screens/Welcome';

const AuthStack = createStackNavigator(
  {
    Join,
    SignIn,
    Welcome,
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'App',
    }
  )
);
