import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import UserProfileScreen from "./UserProfileStack";
import AllEventsScreen from "./AllEventsStack";
import RecommendedEventsScreen from "./RecommendedEventsStack";
import AddEventScreen from "./AddEventStack";
import MyCalendarScreen from "./MyCalendarStack";

const UserDrawerNavigator = createDrawerNavigator({
  EVENTS: {
    screen: AllEventsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <HeaderScreen navigation={navigation} />,
      };
    },
    // navigationOptions: {
    //   title: "All Events",
    // },
  },
  RECOMMENDEDEVENTS: {
    screen: RecommendedEventsScreen,
    navigationOptions: {
      title: "Recommended Events",
    },
  },
  ADDEVENT: {
    screen: AddEventScreen,
    navigationOptions: {
      title: "Add Event",
    },
  },
  MYCALENDAR: {
    screen: MyCalendarScreen,
    navigationOptions: {
      title: "My Calendar",
    },
  },
  PROFILE: {
    screen: UserProfileScreen,
    navigationOptions: {
      title: "User Profile",
    },
  },
});

export default createAppContainer(UserDrawerNavigator);
