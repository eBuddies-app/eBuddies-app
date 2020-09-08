import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  container1: {
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: "20%",
    marginLeft: 18,
    marginRight: 18,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },
  appHeader: {
    backgroundColor: "rgba(38,153,251, .4)",
    height: 70,
  },

  picOption: {
    flex: 2,
    marginTop: "-6%",
    marginLeft: "-2%",
    marginRight: "-3%",
  },
  surface1: {
    alignSelf: "center",
    width: "40%",
    height: 35,
    marginTop: 10,
    marginLeft: -160,
    marginBottom: 15,
  },
  surface2: {
    alignSelf: "center",
    width: "40%",
    height: 35,
    marginRight: -160,
    marginTop: -50,
    marginBottom: 15,
  },

  imageContainer: {
    ...Helpers.crossCenter,
    ...Metrics.verticalPadding,
    borderRadius: 150,
    width: "70%",
    alignSelf: "center",
    marginBottom: 15,
  },
  image: {
    height: 200,
    borderRadius: 150,
    width: "70%",
    alignSelf: "center",
  },

  textInputName: {
    height: 26.5,
    marginTop: 30,
    color: "#4d4a4a",
    marginLeft: 30,
    marginRight: 30,
    borderColor: "#BEBEBE",
    letterSpacing: 1,
    textAlign: "left",
    fontSize: 16,
    borderBottomWidth: 1,
    width: "85%",
  },
  validatorName: {
    marginLeft: 30,
    color: "#BEBEBE",
    position: "relative",
    top: "-2%",
    fontSize: 11,
    marginBottom: 10,
  },
  name: {
    position: "relative",
    top: "-3%",
    left: "88%",
    color: "#4d4a4a",
  },
  validators: {
    marginLeft: 30,
    color: "#BEBEBE",
    position: "relative",
    top: "-2%",
    fontSize: 11,
  },
  pin: {
    position: "relative",
    top: "-3%",
    left: "86.5%",
    color: "#4d4a4a",
  },
  textInput: {
    height: 26.5,
    marginTop: 15,
    color: "#4d4a4a",
    marginLeft: 30,
    marginRight: 30,
    borderColor: "#BEBEBE",
    letterSpacing: 1,
    textAlign: "left",
    fontSize: 16,
    borderBottomWidth: 1,
    width: "85%",
  },
  selectState: {
    left: 30,
    borderColor: "#BEBEBE",
    borderBottomWidth: 1,
    width: "85%",
    marginTop: 15,
    paddingBottom: 5,
  },

  interests: {
    color: Colors.blue,
    ...Fonts.normal,
    fontWeight: "bold",
    ...Metrics.bottomMargin,
  },
  interestContainer: {
    flexDirection: "row",
  },
  interest: {
    color: Colors.blue,
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 8,
    ...Metrics.smallVerticalPadding,
    ...Metrics.smallHorizontalPadding,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    marginBottom: 5,
  },
  interestSelected: {
    color: Colors.blue,
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 8,
    ...Metrics.smallVerticalPadding,
    ...Metrics.smallHorizontalPadding,
    backgroundColor: Colors.lightBlue,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 30,
    marginRight: 30,
  },
});
