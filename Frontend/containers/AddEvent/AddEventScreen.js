import React from "react";
import { TextInput, View, Button, ScrollView, Text, Image } from "react-native";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { postNewEvent } from "../../store/events";
import Style from "./AddEventScreenStyle";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import Modal from "react-native-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Metrics, Fonts, Colors } from "../../themes";

class AddEventScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      date: "",
      time: "",
      category: "",
      description: "",
      eventId: "",
      imgUrl: "",
      isModalVisible: false,
      hostId: "",
      isDatePickerVisible: false,
      height: 0,
    };
  }

  componentDidMount() {
    this.setState({ hostId: this.props.user.id });
  }

  isValidUSZip = (zipCode) => {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
  };

  handleSubmit = () => {
    if (
      this.state.name.length &&
      this.state.address.length &&
      this.state.city.length &&
      this.state.state.length &&
      this.state.zipcode.length &&
      this.state.date.length &&
      this.state.time.length &&
      this.state.category.length &&
      this.state.description.length
    ) {
      this.setState({ isModalVisible: true });
      this.setState({ hostId: this.props.user.id });
      this.props.postNewEvent(this.state);

      this.setState({
        name: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        date: "",
        time: "",
        description: "",
        eventId: "",
        imgUrl: "",
        hostId: "",
      });
      const waitForModal = () => {
        this.props.navigation.navigate("EVENTS");
        this.setState({
          isModalVisible: false,
        });
      };
      setTimeout(waitForModal, 2000);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  selectPicture = async () => {
    try {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: 1,
      });
      this.setState({ imgUrl: uri });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, marginBottom: 100 }}>
          <View style={Style.imageContainer}>
            <Image
              style={Style.image}
              source={{
                uri: this.state.imgUrl,
              }}
            />
            <Button title="Select Picture" onPress={this.selectPicture} />
            <Button title="Take Picture" onPress={this.takePicture} />
          </View>

          <View style={Style.eventContainer}>
            {this.state.name.length === 0 && (
              <Text style={{ color: "red" }}>Event Name is Required</Text>
            )}
            <TextInput
              style={Style.text}
              name="name"
              type="text"
              placeholder="Event Name"
              onChangeText={(text) => {
                this.setState({ name: text });
              }}
              value={this.state.name}
            />
            {this.state.address.length === 0 && (
              <Text style={{ color: "red" }}>
                Event Street Address is Required
              </Text>
            )}
            <TextInput
              style={Style.text}
              placeholder="Street Address"
              onChangeText={(text) => {
                this.setState({ address: text });
              }}
              value={this.state.address}
            />
            {this.state.city.length === 0 && (
              <Text style={{ color: "red" }}>Event City is Required</Text>
            )}
            <TextInput
              style={Style.text}
              placeholder="City"
              onChangeText={(text) => {
                this.setState({ city: text });
              }}
              value={this.state.city}
            />
            {this.state.state.length === 0 && (
              <Text style={{ color: "red" }}>Event State is Required</Text>
            )}
            <TextInput
              style={Style.text}
              placeholder="State"
              onChangeText={(text) => {
                this.setState({ state: text });
              }}
              value={this.state.state}
            />
            {!this.isValidUSZip(this.state.zipcode) && (
              <Text style={{ color: "red" }}>
                Valid US Zip Code is Required
              </Text>
            )}
            <TextInput
              style={Style.text}
              placeholder="Zipcode"
              onChangeText={(text) => {
                this.setState({ zipcode: text });
              }}
              value={this.state.zipcode}
            />
            {/* {this.state.date.length === 0 && (
                <Text style={{ color: "red" }}>Event Date is Required</Text>
              )} */}
            <Button
              onPress={() => {
                this.setState({ isDatePickerVisible: true });
              }}
              title="Select A Date"
            />
            <Text>{this.state.date}</Text>

            <DateTimePickerModal
              isVisible={this.state.isDatePickerVisible}
              onConfirm={(date) => {
                this.setState({
                  date: date.toUTCString(),
                  isDatePickerVisible: false,
                });
                console.log("STATE", this.state);
              }}
              onCancel={() => {
                this.setState({ isDatePickerVisible: false });
              }}
              mode="date"
            />

            {this.state.time.length === 0 && (
              <Text style={{ color: "red" }}>Event Time is Required</Text>
            )}
            <TextInput
              style={Style.text}
              placeholder="Time"
              onChangeText={(text) => {
                this.setState({ time: text });
              }}
              value={this.state.time}
            />
            {this.state.description.length === 0 && (
              <Text style={{ color: "red" }}>
                Event Description is Required
              </Text>
            )}
            <TextInput
              multiline={true}
              style={{
                height: Math.max(35, this.state.height),
                ...Fonts.normal,
                ...Metrics.bottomMargin,
                color: Colors.blue,
              }}
              onContentSizeChange={(event) => {
                this.setState({ height: event.nativeEvent.contentSize.height });
              }}
              placeholder="Description"
              onChangeText={(text) => {
                this.setState({ description: text });
              }}
              value={this.state.description}
              ref={(input) => {
                this.textInput = input;
              }}
            />
            {this.state.category.length === 0 && (
              <Text style={{ color: "red" }}>Event category is Required</Text>
            )}
            <TextInput
              style={Style.text}
              placeholder="Interest Type"
              onChangeText={(text) => {
                this.setState({ category: text });
              }}
              value={this.state.category}
            />
          </View>

          <Button
            title="Update My Profile"
            onPress={this.handleUpdate}
          ></Button>

          <Modal isVisible={this.state.isModalVisible} style={Style.modal}>
            <View>
              <Image
                source={require("../../assets/ebuddies.gif")}
                style={Style.logo}
              />
              <View style={Style.modalText}>
                <Text style={{ ...Fonts.h4 }}>
                  Event, {this.state.name} has been added!
                </Text>
              </View>
              <Image
                style={Style.image2}
                source={{
                  uri: this.state.imgUrl,
                }}
              />
            </View>
          </Modal>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatch = (dispatch) => ({
  postNewEvent: (addEventForm) => dispatch(postNewEvent(addEventForm)),
});

export default connect(mapStateToProps, mapDispatch)(AddEventScreen);
