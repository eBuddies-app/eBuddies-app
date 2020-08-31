import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { connect } from "react-redux";
import Event from "../Event/EventScreen";
import { me } from "../../store/user";
import Style from "./MyEventsScreenStyle";
import { getAllEvents } from "../../store/events";
import { getUserInfo } from "../../store/user";

class MyEvents extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getUser(this.props.user.id);
  }

  handleEventClick = () => {
    this.props.navigation.navigate("SINGLEEVENT");
  };

  render() {
    // let { events } = this.props || [];
    const user = this.props.user;
    const interests = this.props.interests;

    let interestArray = [];
    interests.forEach((interest) => {
      interestArray.push(interest.userInterest);
    });

    const events = this.props.events.filter((event) => {
      return interestArray.includes(event.category);
    });

    return (
      <>
        <ScrollView>
          <View>
            {user.firstName ? (
              <View>
                <View style={Style.welcomeDiv}>
                  <Text style={Style.welcomeText}>
                    Welcome, {user.firstName} {user.lastName}
                  </Text>
                </View>
                <Text style={Style.interests}>Based on your Interests</Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignSelf: "center",
                  }}
                >
                  {interests.map((interest) => (
                    <View style={Style.childInterest}>
                      <View key={interest.id}>
                        <Text style={Style.interestPt}>✯</Text>
                        <Text style={Style.interest}>
                          {interest.userInterest}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
                {events.map((event) => {
                  return (
                    <View style={Style.childContainer}>
                      <View key={event.id}>
                        <Text style={Style.interestPoints}>
                          Because off your Interest in{" "}
                          <Text style={Style.specificInterest}>
                            {event.category}{" "}
                          </Text>
                        </Text>
                        <Event event={event} />

                        <Button
                          style={Style.eventButton}
                          title="View Event"
                          onPress={this.handleEventClick}
                        />
                      </View>
                    </View>
                  );
                })}
                <Button
                  title="ALL EVENTS"
                  onPress={() => this.props.navigation.navigate("EVENTS")}
                >
                  ALL EVENTS
                </Button>
              </View>
            ) : (
              <View>
                <Text>Welcome, Guest</Text>
                <Button
                  title="Continue to All Events"
                  onPress={() => this.props.navigation.navigate("EVENTS")}
                >
                  Continue to All Events
                </Button>
              </View>
            )}
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
  user: state.user,
  interests: state.interests,
});

const mapDispatchToProps = (dispatch) => ({
  // me: () => dispatch(me()),
  getUser: (id) => {
    return dispatch(getUserInfo(id));
  },
  getAllEvents: () => dispatch(getAllEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyEvents);
