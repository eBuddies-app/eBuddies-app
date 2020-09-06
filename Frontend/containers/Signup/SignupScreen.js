import React from "react";
import { View, Button, TextInput, Text, Image } from "react-native";
import styles from "./SignupScreenStyle";
import { Fonts } from "../../themes";
import { connect } from "react-redux";
import { getUsersInfo } from "../../store/users";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      uniqueEmail: true,
    };
  }

  async componentDidMount() {
    await this.props.getUsersInfo();
  }

  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.email.length && re.test(email)) {
      return true;
    } else return false;
  };

  handleSignup = () => {
    const allEmails = [];
    this.props.users.map((user) => {
      return allEmails.push(user.email);
    });

    if (allEmails.includes(this.state.email)) {
      this.setState({ uniqueEmail: false });
    } else {
      if (
        this.state.firstName.length &&
        this.state.lastName.length &&
        this.state.email.length &&
        this.validateEmail(this.state.email) &&
        this.state.password.length
      ) {
        const waitForSignUp = () => {
          this.props.navigation.navigate("ADDRESS", this.state);
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            uniqueEmail: true,
          });
        };
        setTimeout(waitForSignUp, 1000);
      }
    }
  };

  handleLogin = () => {
    this.props.navigation.navigate("LOGIN");
  };

  render() {
    return (
      <View style={styles.container1}>
        <View style={styles.containerBox}>
          <Text style={styles.loginBox}>Signup</Text>
        </View>
        {/* validations */}
        {this.state.uniqueEmail === false && (
          <Text style={{ color: "red" }}>
            There is already an account with this email. Please try to login.
          </Text>
        )}
        <TextInput
          style={styles.textInput}
          value={this.state.firstName}
          onChangeText={(firstName) => this.setState({ firstName })}
          ref={(input) => {
            this.textInput = input;
          }}
          returnKeyType="go"
          placeholder="First Name..."
          placeholderTextColor="#BEBEBE"
          keyboardType="name-phone-pad"
        />
        <Image style={styles.firstname} source={require("./lastname.png")} />
        {this.state.firstName.length === 0 && (
          <Text style={styles.validators}>First Name is Required</Text>
        )}
        <TextInput
          style={styles.textInput}
          value={this.state.lastName}
          onChangeText={(lastName) => this.setState({ lastName })}
          ref={(input) => {
            this.textInput = input;
          }}
          returnKeyType="go"
          placeholder="Last Name..."
          placeholderTextColor="#BEBEBE"
          keyboardType="name-phone-pad"
        />
        <Image style={styles.lastname} source={require("./name.png")} />
        {this.state.lastName.length === 0 && (
          <Text style={styles.validators}>Last Name is Required</Text>
        )}

        <TextInput
          style={styles.textInput}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          ref={(input) => {
            this.textInput = input;
          }}
          returnKeyType="go"
          placeholder="Email..."
          placeholderTextColor="#BEBEBE"
          keyboardType="email-address"
        />
        <Image style={styles.email} source={require("./email.png")} />
        {!this.validateEmail(this.state.email) && (
          <Text style={styles.validators}>Valid Email is Required</Text>
        )}
        <TextInput
          style={styles.textInput}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          ref={(input) => {
            this.textInput = input;
          }}
          returnKeyType="go"
          placeholder="Password..."
          placeholderTextColor="#BEBEBE"
          secureTextEntry
        />
        <Image style={styles.password} source={require("./password.png")} />
        {this.state.password.length === 0 && (
          <Text style={styles.validators}>Password is Required</Text>
        )}
        <View style={styles.button}>
          <Button
            color="rgba(38,153,251,1)"
            style={{ ...Fonts.normal, textAlign: "center" }}
            title="CONTINUE"
            onPress={this.handleSignup}
          ></Button>
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
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatch = (dispatch) => ({
  getUsersInfo: () => dispatch(getUsersInfo()),
});

export default connect(mapStateToProps, mapDispatch)(Signup);
