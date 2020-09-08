import { Helpers, Metrics, Fonts, Colors } from "../../themes";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: "91%",
  },
  surface: {
    marginTop: 5,
    width: "30%",
    height: 40,
    marginLeft: "20%",
  },
  surfaceGuest: {
    marginTop: -125,
    left: -100,
    width: "30%",
    height: 40,
    marginBottom: 30,
  },
  surfaceHere: {
    marginLeft: "15%",
    height: 40,
    marginTop: -39.5,
    width: "30%",
    left: 150,
  },
  surfaceback: {
    width: "50%",
    alignSelf: "center",
    marginTop: 30,
    padding: 10,
  },
  error: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 35,
  },
  surfaceError: {
    marginTop: 6,
    alignSelf: "center",
    width: "25%",
    height: 45,
  },
  surfaceGuest: {
    marginTop: -69,
    right: -104,
    height: 40,
    width: "30%",
    marginBottom: 120,
  },
  appHeader: {
    backgroundColor: "rgba(38,153,251, .4)",
    height: 65,
    marginTop: 0,
  },
  // container1: {
  //   backgroundColor: "white",
  //   marginTop: 15,
  //   marginBottom: 20,
  //   marginLeft: 18,
  //   marginRight: 18,
  //   borderWidth: 1,
  //   borderColor: "white",
  //   borderRadius: 10,
  // },

  eventName: {
    fontSize: 15,
    width: 100,
    left: -130,
    top: 2,
  },

  modalChatMessage: {
    textAlign: "center",
    fontSize: 60,
    position: "relative",
    top: "20%",
  },
  modal: {
    position: "absolute",
    left: 0,
    right: 0,
    top: "15%",
    height: "50%",
    bottom: 0,
    backgroundColor: "white",
  },
  modal2: {
    left: 0,
    right: 0,
    position: "absolute",
    top: "25%",
    height: "50%",
    bottom: 0,
    backgroundColor: "white",
  },
  logo: {
    position: "absolute",
    top: "-100%",
    left: "22%",
  },
  modalText: {
    alignSelf: "center",
    fontSize: 50,
    width: "75%",
    textAlign: "center",
  },
  mapModalEmojis: {
    textAlign: "center",
    fontSize: 60,
    position: "relative",
    top: "20%",
  },
  backButton: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "20%",
    height: "6.1%",
    alignSelf: "center",
    borderRadius: 15,
    padding: 2,
    margin: 1,
    top: -20,
    color: "white",
    backgroundColor: "white",
    borderColor: "rgba(240, 237, 228, 0.6)",
    borderWidth: 2,
  },
  hereButton: {
    marginTop: 25,
    left: -470,
    width: "30%",
    height: 40,
    backgroundColor: "red",
    marginBottom: 30,
  },
});
