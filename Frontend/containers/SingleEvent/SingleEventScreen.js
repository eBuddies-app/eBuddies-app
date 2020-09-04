import React from "react";
import { Text, View, Image, Button } from "react-native";
import { connect } from "react-redux";
import { fetchSingleEvent } from "../../store/singleEvent";
import Modal from "react-native-modal";
import Style from "./SingleEventScreenStyle";
import { getUserInfo } from "../../store/user";
import { postNewActivity } from "../../store/activity";
import io from "socket.io-client";
const socket = io("http://localhost:8081", {
  transports: ["websocket"],
});
class SingleEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      isModal2Visible: false,
    };
  }
  async componentDidMount() {
    try {
      const eventId = this.props.navigation.getParam("id");
      await this.props.fetchSingleEvent(eventId);
    } catch (error) {
      console.log(error);
    }
  }

  handleJoin = async () => {
    try {
      // socket.emit("create", this.props.event.id);
      // console.log("this is the room ", this.props.event.id);
      await this.props.getUser(this.props.user.id);
      await this.props.postNewActivity({
        userId: this.props.user.id,
        eventId: this.props.event.id,
      });
      this.setState({ isModalVisible: true });

      const waitForModal = () => {
        this.props.navigation.navigate("MYCALENDAR");
        this.setState({
          isModalVisible: false,
        });
      };
      setTimeout(waitForModal, 2500);
    } catch (error) {
      console.log(error);
    }
  };
  handleMap = async () => {
    try {
      await this.props.getUser(this.props.user.id);
      this.setState({ isModal2Visible: true });

      let eventId = this.props.event.id;

      const waitForModal = () => {
        this.props.navigation.navigate("MAPS", {
          id: eventId,
        });
        this.setState({
          isModal2Visible: false,
        });
      };
      setTimeout(waitForModal, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  convertTime = (timeString) => {
    const hour = timeString.substr(0, 2);
    var h = hour % 12 || 12;
    var ampm = hour < 12 || hour === 24 ? "AM" : "PM";
    return h + timeString.substr(2, 3) + ampm;
  };

  render() {
    console.log("TIME", this.props.event.time);
    return (
      <>
        <View style={Style.wholeCardDiv}>
          <View style={Style.imageDiv}>
            <Image
              style={Style.eventImg}
              source={{ uri: this.props.event.imgUrl }}
            />
          </View>
          <View style={Style.headerBackground}>
            <Text style={Style.headerText}>{this.props.event.name}</Text>
          </View>
          <View style={Style.informationDiv}>
            <Text style={Style.fonts}>{this.props.event.description}</Text>
            <Text style={Style.addressFonts}>{this.props.event.address}</Text>
            <Text style={Style.dateFonts}>
              {this.props.event.date
                ? this.props.event.date.slice(0, 16)
                : null}
            </Text>
            <View>
              <Text style={Style.dateFonts}>
                Time:{" "}
                {this.props.event.time
                  ? this.convertTime(this.props.event.time)
                  : null}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={Style.singleEvent}>
            {this.props.user.id && (
              <Button title="JOIN EVENT" onPress={this.handleJoin}></Button>
            )}
          </View>
        </View>
        <Modal isVisible={this.state.isModalVisible} style={Style.modal}>
          <View>
            <Image
              source={require("../../assets/ebuddies.gif")}
              style={Style.logo}
            />
            <View style={Style.modalText}>
              <Text style={{ fontSize: 20 }}>
                Event, {this.props.event.name} has been added!
              </Text>
            </View>
            <Image
              style={Style.image2}
              source={{
                uri: this.props.event.imgUrl,
              }}
            />
          </View>
        </Modal>
        <View style={Style.mapButton}>
          <Button title="VIEW ON MAP" onPress={this.handleMap}></Button>
        </View>
        <Modal isVisible={this.state.isModal2Visible} style={Style.modal}>
          <View>
            <Image
              source={require("../../assets/ebuddies.gif")}
              style={Style.logo}
            />
            <View style={Style.modalText}>
              <Text style={{ fontSize: 20 }}>
                Directing you to Maps to view {this.props.event.name}'s
                Location!
              </Text>
            </View>
            <View>
              <Text style={Style.mapModalEmojis}>✈️🚖🌃</Text>
            </View>
          </View>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.singleEvent,
  user: state.user,
  activity: state.activity,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleEvent: (id) => dispatch(fetchSingleEvent(id)),
  getUser: (id) => {
    return dispatch(getUserInfo(id));
  },
  postNewActivity: (activityObj) => {
    return dispatch(postNewActivity(activityObj));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);
