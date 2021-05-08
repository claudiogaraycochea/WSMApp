// Tab Navigation

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, NotificationsStackNavigator, CalendarStackNavigator } from "./StackNavigationPrivate";
import { Icon, Color } from '../ui/UILib';

const Tab = createBottomTabNavigator();

const TabNavigatorPrivate = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        ...tabBarOptions,
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainStackNavigator}
        options={{
          tabBarLabel: "Main",
          tabBarIcon: () => (
            <Icon.IconHotkeyHome/>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarStackNavigator}
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: () => (
            <Icon.IconCalendar/>
          ),
        }}
      /> 
      <Tab.Screen
        name="notifications"
        component={NotificationsStackNavigator} 
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: () => (
            <Icon.IconHotkeyNotification/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigatorPrivate;

const tabBarOptions = {
  activeTintColor: Color.text,
  style: {
    height: 75,
    // paddingTop: 10,
    backgroundColor: Color.dark,
    borderTopColor: Color.divisorLine,
    borderTopWidth: '1px',
  },
  labelStyle: {
    fontSize: 14,
    paddingBottom: 10
  }
}
