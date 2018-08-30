import React from 'react';
import { Button, View, Text } from 'react-native';
//import { StackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";

import { HomeScreen } from '../Home/Home.js'
import { DetailsScreen } from '../Details/Details.js'

const COLORS = {
  PRIMARY: "#17b6b0",
  PRIMARY_LIGTH: "#E5F5F4",
  PRIMARY_EXTRA_LIGHT: "#62d3cf",
  SECONDARY: "#e91e63",
  NEGATIVE: "#ff6f00",
  GREY: "#929292",
  LIGHT_GREY: "#ebebeb",
  BACKGROUND: "#fafafa",
  SECONDARY_BACKGROUND: "#e3f2fd",
  TEXT: "#232323",
  WHITE: "#ffffff"
};

export const RootStack = createBottomTabNavigator(
  {
    Home : HomeScreen,
    Details : DetailsScreen
  },
  {
    navigationOptions: ({ navigation }) => {
      return {
        tabBarLabel: () => null,
        tabBarIcon: () => {
          const { routeName } = navigation.state;
          switch (routeName) {
            case "Home": {
              return <Icon name="home" color={COLORS.TEXT} size={25} />;
            }
            case "Details": {
              return <Icon name="help" color={COLORS.TEXT} size={25} />;
            }
          }
        }
      };
    }
    ,
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
