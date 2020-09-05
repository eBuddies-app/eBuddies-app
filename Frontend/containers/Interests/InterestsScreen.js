import React from "react";
import { View, Text, Button, Image, TouchableHighlight } from "react-native";
import styles from "./InterestsScreenStyle";
import { connect } from "react-redux";
import { Fonts } from "../../themes";
import { auth2 } from "../../store/user";
import { postNewInterest } from "../../store/interest";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

class Interests extends React.Component {
  constructor() {
    super();
    this.state = {
      food: false,
      education: false,
      fitness: false,
      entertainment: false,
      pressStatus1: false,
      pressStatus2: false,
      pressStatus3: false,
      pressStatus4: false,
      description: "",
      imgUrl: "",
      city: "",
      state: "",
      zipCode: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    this.setState({
      description: this.props.navigation.getParam("description"),
      imgUrl: this.props.navigation.getParam("imgUrl"),
      city: this.props.navigation.getParam("city"),
      state: this.props.navigation.getParam("state"),
      zipCode: this.props.navigation.getParam("zipCode"),
      firstName: this.props.navigation.getParam("firstName"),
      lastName: this.props.navigation.getParam("lastName"),
      email: this.props.navigation.getParam("email"),
      password: this.props.navigation.getParam("password"),
    });
  }

  handleLogin = () => {
    this.props.navigation.navigate("LOGIN");
  };

  updateChoice = (event) => {
    if (event === "food") {
      this.state.pressStatus1 = !this.state.pressStatus1;
    }
    if (event === "entertainment") {
      this.state.pressStatus2 = !this.state.pressStatus2;
    }
    if (event === "fitness") {
      this.state.pressStatus3 = !this.state.pressStatus3;
    }
    if (event === "education") {
      this.state.pressStatus4 = !this.state.pressStatus4;
    }
    let newState = { ...this.state };
    newState[event] = !newState[event];
    this.setState(newState);
  };

  askPermissions = async () => {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    console.log("TOKEN", token);
    return token;
  };
  handleSignup = async () => {
    await this.askPermissions();
    await this.props.auth2(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password,
      this.state.description,
      this.state.imgUrl,
      this.state.city,
      this.state.state,
      this.state.zipCode
    );
    if (this.state.food === true) {
      await this.props.postNewInterest({
        userId: this.props.user.id,
        userInterest: "Food",
      });
    }
    if (this.state.education === true) {
      await this.props.postNewInterest({
        userId: this.props.user.id,
        userInterest: "Education",
      });
    }
    if (this.state.fitness === true) {
      await this.props.postNewInterest({
        userId: this.props.user.id,
        userInterest: "Fitness",
      });
    }
    if (this.state.entertainment === true) {
      await this.props.postNewInterest({
        userId: this.props.user.id,
        userInterest: "Entertainment",
      });
    }
    await this.props.navigation.navigate("RECOMMENDEDEVENTS");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/ebuddies.gif")}
          style={styles.logo}
        />
        <View style={styles.background}>
          <View></View>
          <View>
            <Text style={styles.header}>Select Interests</Text>
          </View>
          <View>
            <View
              style={
                this.state.pressStatus1 ? styles.button : styles.buttonPress
              }
            >
              <Button
                color="rgba(38,153,251,1)"
                title="Food"
                onPress={() => {
                  this.updateChoice("food");
                }}
              />
            </View>
            <View
              style={
                this.state.pressStatus2 ? styles.button : styles.buttonPress
              }
            >
              <Button
                color="rgba(38,153,251,1)"
                title="Entertainment"
                onPress={() => {
                  this.updateChoice("entertainment");
                }}
              />
            </View>
            <View
              style={
                this.state.pressStatus3 ? styles.button : styles.buttonPress
              }
            >
              <Button
                color="rgba(38,153,251,1)"
                title="Fitness"
                onPress={() => {
                  this.updateChoice("fitness");
                }}
              />
            </View>
            <View
              style={
                this.state.pressStatus4 ? styles.button : styles.buttonPress
              }
            >
              <Button
                color="rgba(38,153,251,1)"
                title="Education"
                onPress={() => {
                  this.updateChoice("education");
                }}
              />
            </View>
          </View>

          <View style={styles.continueButton}>
            <Button
              onPress={this.handleSignup}
              color="white"
              style={{ ...Fonts.normal, textAlign: "center" }}
              title="CONTINUE"
            >
              CONTINUE
            </Button>
          </View>
          <View style={styles.account}>
            <Button
              color="rgba(38,153,251,1)"
              style={{ ...Fonts.small }}
              title="Already have an account?"
            />
          </View>
          <View style={styles.login}>
            <Button
              color="rgba(38,153,251,1)"
              style={{ ...Fonts.small }}
              title="LOGIN"
              onPress={this.handleLogin}
            />
          </View>
        </View>
      </View>
    );
  }
}
const mapToState = (state) => ({
  user: state.user,
  interests: state.interests,
});

const mapDispatchToProps = (dispatch) => {
  return {
    postNewInterest: (id, updateData) => {
      return dispatch(postNewInterest(id, updateData));
    },
    auth2: (
      firstName,
      lastName,
      email,
      password,
      description,
      imgUrl,
      city,
      state,
      zipCode
    ) => {
      return dispatch(
        auth2(
          firstName,
          lastName,
          email,
          password,
          description,
          imgUrl,
          city,
          state,
          zipCode
        )
      );
    },
  };
};

export default connect(mapToState, mapDispatchToProps)(Interests);
