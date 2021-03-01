// Drawer Navitator
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NotificationsStackNavigator } from "./StackNavigationPrivate";
import TabNavigatorPrivate from "./TabNavigationPrivate";

// Drawer Side Menu
const Drawer = createDrawerNavigator();

const NavigatorPrivate = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={TabNavigatorPrivate}/>
      <Drawer.Screen name="Notifications" component={NotificationsStackNavigator} />
    </Drawer.Navigator>
  );
}

export default NavigatorPrivate;