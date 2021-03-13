// Stack Navigation Private

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { privateScreens, privateScreensTitle } from './Routes';
import Header from '../components/header/Header';
import Home from '../screens/home/Home';
import NotificationsUser from '../screens/user/notifications/Notifications';
import { Icon, ButtonIcon } from '../ui/UILib';
import HeaderUserImage from '../components/header/headerUserImage/HeaderUserImage';
import { Color } from '../ui/UILib';

const Stack = createStackNavigator();

const singleScreenOptions = ({ navigation }) => ({
  headerStyle: {
    height: 75,
    paddingTop: 10,
    backgroundColor: Color.dark,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerTitle: props => <Header title={'WSM | AGENCY'} />,
  headerRight: () => (
    <ButtonIcon
      onPress={() =>
        navigation.navigate('ProfileUser')
      }
    ><HeaderUserImage /></ButtonIcon>
  ),
});

const screenOptions = ({ navigation }) => ({
  headerStyle: {
    height: 75,
    paddingTop: 10,
    backgroundColor: Color.dark,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerTitle: props => <Header title={'WSM | AGENCY'} />,
  headerLeft: props => <ButtonIcon onPress={() => navigation.goBack()}><Icon.IconBack/></ButtonIcon>,
  headerRight: () => (
    <ButtonIcon
      onPress={() =>
        navigation.navigate('ProfileUser')
      }
    ><HeaderUserImage /></ButtonIcon>
  ),
});

const MainStackNavigator = (props) => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={singleScreenOptions} />
      {Object.entries({
        // Use some screens conditionally based on some condition
        ...privateScreens,
      }).map(([name, component]) => (
        <Stack.Screen 
          key={name}
          name={name}
          options={screenOptions}
          component={component} 
        />
      ))}
    </Stack.Navigator>
  );
}

const NotificationsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NotificationsUser"
        options={singleScreenOptions} 
        component={NotificationsUser}
      />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, NotificationsStackNavigator };