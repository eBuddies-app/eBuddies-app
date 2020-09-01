import { StyleSheet } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from "../../themes";

export default StyleSheet.create({
  colMain: {
    ...Helpers.fullWidth,
    width: 375,
    height: 667,
    backgroundColor: Colors.white,
    overflow: "hidden",
  },
  eventButton: {
    ...Fonts.normal,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 50,
    position: "absolute",
    top: "30%",
    marginHorizontal: 50,
  },
  eventFooter: {
    width: 300,
    alignContent: "center",
    justifyContent: "center",
    height: 70,
    backgroundColor: Colors.lightBlue,
    padding: Metrics.medium,
  },
  errorMsg: {
    ...Fonts.normal,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    height: 70,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 10,
    color: Colors.primary,
    padding: Metrics.medium,
    backgroundColor: Colors.lightBlue,
    fontSize: 15,
  },
  interestsContainer: {
    // backgroundColor: Colors.lightBlue,
    // ...Metrics.mediumHorizontalPadding,
    // ...Metrics.mediumVerticalPadding,
  },
  welcome: {
    color: Colors.blue,
    textAlign: "center",
    ...Fonts.h4,
    fontWeight: "bold",
    ...Metrics.bottomMargin,
  },
  welcomeText: {
    fontSize: 24,
    textAlign: "center",
    letterSpacing: 1,
    margin: 3,
    padding: 6,
  },
  interests: {
    textAlign: "center",
    color: "black",
    ...Fonts.normal,
    // fontWeight: "bold",
    ...Metrics.bottomMargin,
  },
  interestContainer: {
    flexDirection: "row",
  },
  interest: {
    color: Colors.blue,
    textAlign: "center",
    alignSelf: "center",
    borderColor: Colors.blue,
    borderWidth: 1,
    borderRadius: 8,
    ...Metrics.smallVerticalPadding,
    ...Metrics.smallHorizontalPadding,
    marginRight: 10,
    width: 114,
  },
  // interestPt: {
  //   // position: "absolute",
  //   // color: Colors.blue,
  //   // top: "35%",
  //   // left: "10%",
  // },

  rec: {
    alignSelf: "center",
    position: "absolute",
    top: "-11%",
    fontSize: 20,
    padding: 5,
    margin: 5,
    color: Colors.blue,
    backgroundColor: "blue",
  },
  specificInterest: {
    textDecorationLine: "underline",
    textDecorationColor: Colors.blue,
    fontSize: 16,
  },

  childrenContainer: {
    padding: "2%",
    margin: "2%",
    width: "50%",
    alignSelf: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "white",
    fontSize: 16,
  },
  interestPoints: {
    fontSize: 16,
    letterSpacing: 1,
    textAlign: "center",
  },
});