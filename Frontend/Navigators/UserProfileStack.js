import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import UserProfileScreen from "../containers/UserProfile/UserProfileScreen";
import EditUserProfileScreen from "../containers/EditUserProfile/EditUserProfileScreen";
import HeaderScreen from "../containers/Header/HeaderScreen";
import HostScreen from "../containers/Host/HostScreen";
import AddEventScreen from "../containers/AddEvent/AddEventScreen";

const screens = {
  PROFILE: {
    screen: UserProfileScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderScreen navigation={navigation} />,
      };
    },
  },
  HOST: {
    screen: HostScreen,
  },
  EDIT: {
    screen: EditUserProfileScreen,
    navigationOptions: {
      title: "Edit Profile",
    },
  },
  ADD: {
    screen: AddEventScreen,
  },
};

const UserProfileStack = createStackNavigator(screens);

export default UserProfileStack;
