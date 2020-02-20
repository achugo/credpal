import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import CompleteProfile from "../screens/CompleteProfile";
import EditProfile from "../screens/EditProfile";
import { createAppContainer } from "react-navigation";
import EntryScreeen from "../screens/EntryScreen";

const ProfileNavigator = createStackNavigator(
  {
    Entry: EntryScreeen,
    FillProfile: CompleteProfile,
    EditProfile: EditProfile
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      }
    }
  }
);

export default createAppContainer(ProfileNavigator);
