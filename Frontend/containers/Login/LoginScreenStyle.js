import { StyleSheet } from "react-native";
import { Fonts } from "../../themes";
export default StyleSheet.create({
  container2: {
    backgroundColor: "white",
    // alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 1,
    marginBottom: 10,
    padding: 20,
    margin: 10,
  },
  container1: {
    backgroundColor: "white",
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 18,
    marginRight: 18,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },
  loginBox: {
    fontSize: 23,
    marginTop: 20,
    color: "white",
    textAlign: "center",
  },

  email: {
    position: "relative",
    top: "-11.2%",
    left: "89.5%",
    width: "10.5%",
    height: "4.3%",
  },

  password: {
    position: "relative",
    top: "-12.2%",
    left: "89%",
    width: "11%",
    height: "4.3%",
  },

  logo1: {
    marginTop: 26,
    marginLeft: 90,
    width: 33,
    height: 34,
  },
  logo2: {
    width: 5,
    height: 4,
  },

  logo2: {},
  containerBox: {
    marginRight: "20%",
    marginLeft: "13.5%",
    position: "relative",
    top: "-4.5%",
    backgroundColor: "rgba(38,153,251,0.6)",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "rgba(38,153,251,0.1)",
    width: "72%",
    height: "19.5%",
  },
  textInput: {
    height: 40,
    marginTop: 20,
    marginLeft: 0,
    color: "#BEBEBE",
    marginRight: 0,
    borderColor: "#BEBEBE",
    letterSpacing: 1,
    textAlign: "left",
    fontSize: 16,
    borderBottomWidth: 1,
    width: "100%",
    marginBottom: 30,
  },
  button: {
    // backgroundColor: "rgba(38,153,251,1)",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",

    marginTop: 10,
    paddingVertical: 12,
  },
  account: {
    ...Fonts.small,
    marginTop: "45%",
    marginBottom: "-7%",
    color: "black",
  },
  containerFb: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  loginBtn: {
    backgroundColor: "#4267b2",
    height: 42,
    alignSelf: "center",

    alignItems: "center",
    width: 165,
    borderRadius: 20,
  },

  containerG: {
    backgroundColor: "#e9ebee",
    height: 42,
    alignSelf: "center",

    alignItems: "center",
    width: 165,
    borderRadius: 20,
  },
  loginBtn2: {
    backgroundColor: "gray",
    alignItems: "center",
    height: 42,
    alignSelf: "center",
    width: 165,
    borderRadius: 20,
  },
  login: {
    width: "130%",
    height: "13.1%",
    alignSelf: "center",
    paddingTop: 10,
    ...Fonts.normal,
    paddingBottom: 10,
    margin: 10,
    marginTop: "7%",
    marginBottom: "-25%",
  },
});
