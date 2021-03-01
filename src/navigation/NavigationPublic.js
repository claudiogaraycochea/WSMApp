// Stack Navigation
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ButtonIcon, Icon } from '../ui/UILib';
import { authScreens, privateScreensTitle } from './Routes';

import Header from "../components/header/Header";
import Login from "../screens/auth/login/Login";

const Stack = createStackNavigator();

const NoneScreenOptions= {
  headerStyle: {
    height: 0,
  },
};

const screenOptions = ({ navigation }) => ({
  headerTitle: props => <Header title={'WSM | AGENCY'} />,
  headerLeft: props => <ButtonIcon onPress={() => navigation.goBack()}><Icon.IconBack/></ButtonIcon>,
});

const NavigatorPublic = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} props={props} options={NoneScreenOptions}/>
      {Object.entries({
        // Use some screens conditionally based on some condition
        ...authScreens,
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


export default NavigatorPublic;