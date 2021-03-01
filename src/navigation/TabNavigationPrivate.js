// Tab Navigation

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, NotificationsStackNavigator } from "./StackNavigationPrivate";

import { Icon } from '../ui/UILib';

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
        name="Heart"
        component={NotificationsStackNavigator}
        options={{
          tabBarLabel: "Heart",
          tabBarIcon: () => (
            <Icon.IconHotkeyHeart/>
          ),
        }}
      />
      <Tab.Screen
        name="discount"
        component={NotificationsStackNavigator}
        options={{
          tabBarLabel: "Discounts",
          tabBarIcon: () => (
            <Icon.IconHotkeyDiscount/>
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
  activeTintColor: '#222222',
  style: {
    height: 75,
    paddingTop: 10
  },
  labelStyle: {
    fontSize: 14,
    paddingBottom: 10
  }
}
