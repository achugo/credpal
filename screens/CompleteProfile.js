import React, { useRef, useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Colors from "../constants/Color";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  AntDesign
} from "@expo/vector-icons";
import { Chevron } from "react-native-shapes";
import Color from "../constants/Color";
import { TouchableOpacity } from "react-native-gesture-handler";

const INITAL_FORM = {
  dob: "",
  gender: "",
  residentialAddress: ""
};

const CompleteProfile = props => {
  const [form, setForm] = useState({ ...INITAL_FORM });
  const [errors, setErrors] = useState({ ...INITAL_FORM });
  const residentialRef = useRef(null);

  const onChangeText = (value, prop) => {
    setForm(v => ({
      ...v,
      [prop]: value
    }));
  };

  const validateForm = () => {
    const { dob, gender, residentialAddress } = form;
    setErrors({ ...INITAL_FORM });
    const newErrors = { ...INITAL_FORM };
    if (!dob) {
      newErrors.dob = "Please fill a dob";
    }
    if (!gender) {
      newErrors.gender = "Please fill a gender";
    }
    if (!residentialAddress) {
      newErrors.residentialAddress = "Please fill a residentialAddress";
    }
    setErrors(newErrors);
    const errArr = Object.values(newErrors);
    return !errArr.some(v => v);
  };

  const onSubmit = () => {
    if (validateForm()) {
      alert("valid form");
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.profileTabPills}>
        <View style={styles.activeTabPill}>
          <Text></Text>
        </View>
        <View style={styles.singleTabPill}>
          <Text></Text>
        </View>
        <View style={styles.singleTabPill}>
          <Text></Text>
        </View>
        <View style={styles.singleTabPill}>
          <Text></Text>
        </View>
        <View style={styles.singleTabPill}>
          <Text></Text>
        </View>
      </View>
      <View style={styles.profileWrapper}>
        <View style={styles.profileHeading}>
          <Text style={styles.profileHeadingText}>Complete profile</Text>
        </View>
        <View style={styles.profileView}>
          <Text style={styles.profileViewText}>
            Tell us more about yourself and ensure that all details provided
            herein are valid and up to date
          </Text>
        </View>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.doubleColumn}>
          <View style={{ ...styles.dobField, ...styles.padRight }}>
            <Ionicons
              style={styles.dobIcon}
              name="ios-calendar"
              size={18}
              color={Colors.credIcons}
            />
            <Text style={styles.formLabels}>Date of Birth</Text>
            <TextInput
              value={form.dob}
              onChangeText={v => onChangeText(v, "dob")}
              returnKeyType="next"
              onSubmitEditing={() => residentialRef.current.focus()}
              style={styles.dobFieldInput}
            />
            <Text style={{ color: "crimson" }}>{errors.dob}</Text>
          </View>
          <View style={{ ...styles.genderField, ...styles.padLeft }}>
            <Text style={styles.formLabels}>Gender</Text>
            <MaterialCommunityIcons
              style={{ ...styles.rightSideIcon, ...styles.firstIcon }}
              name="gender-male"
              size={18}
              color={Colors.credIcons}
            />
            <RNPickerSelect
              items={[
                { label: "Football", value: "football" },
                { label: "Baseball", value: "baseball" },
                { label: "Hockey", value: "hockey" }
              ]}
              onValueChange={v => onChangeText(v, "gender")}
              // onValueChange={value => {
              // this.setState({
              //     favSport3: value,
              // });
              //}}
              style={{
                inputAndroid: {
                  backgroundColor: "transparent",
                  paddingLeft: 30,
                  paddingTop: 10,
                  paddingBottom: 10,
                  marginBottom: -15,
                  paddingRight: 10,
                  fontSize: 18,
                  fontFamily: "sf-normal"
                },
                iconContainer: {
                  top: 2,
                  right: 15
                }
              }}
              value={form.gender}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColorAndroid: Colors.credFormBorder }}
              Icon={() => {
                return <Chevron size={1} color={Color.credFormBorder} />;
              }}
            />
            <Text style={{ color: "crimson" }}>{errors.genderField}</Text>
          </View>
        </View>
        <View style={styles.fullColumn}>
          <MaterialCommunityIcons
            style={styles.dobIcon}
            name="home-outline"
            size={18}
            color={Colors.credIcons}
          />
          <Text style={styles.formLabels}>Residential Address</Text>
          <TextInput
            value={form.residentialAddress}
            onChangeText={v => onChangeText(v, "residentialAddress")}
            ref={residentialRef}
            style={{ ...styles.dobFieldInput, ...styles.marginTopRemove }}
          />
          <Text style={{ color: "crimson" }}>{errors.residentialAddress}</Text>
        </View>
        <View style={styles.doubleColumn}>
          <View style={{ ...styles.genderField, ...styles.padRight }}>
            <SimpleLineIcons
              style={styles.rightSideIcon}
              name="graduation"
              size={18}
              color={Colors.credIcons}
            />
            <Text style={styles.formLabels}>Education Level</Text>
            <RNPickerSelect
              items={[
                { label: "Football", value: "football" },
                { label: "Baseball", value: "baseball" },
                { label: "Hockey", value: "hockey" }
              ]}
              onValueChange={value => console.log(value)}
              // onValueChange={value => {
              // this.setState({
              //     favSport3: value,
              // });
              //}}
              style={{
                inputAndroid: {
                  backgroundColor: "transparent",
                  paddingLeft: 30,
                  paddingTop: 10,
                  paddingBottom: 15,
                  paddingRight: 10,
                  fontSize: 18,
                  fontFamily: "sf-normal"
                },
                iconContainer: {
                  top: 20,
                  right: 15
                }
              }}
              //value={this.state.favSport3}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColorAndroid: Colors.credFormBorder }}
              Icon={() => {
                return <Chevron size={1} color={Color.credFormBorder} />;
              }}
            />
          </View>
          <View style={{ ...styles.genderField, ...styles.padLeft }}>
            <MaterialCommunityIcons
              style={{ ...styles.rightSideIcon, ...styles.left10 }}
              name="gender-male"
              size={18}
              color={Colors.credIcons}
            />
            <Text style={styles.formLabels}>Nationality</Text>
            <RNPickerSelect
              items={[
                { label: "Football", value: "football" },
                { label: "Baseball", value: "baseball" },
                { label: "Hockey", value: "hockey" }
              ]}
              onValueChange={value => console.log(value)}
              // onValueChange={value => {
              // this.setState({
              //     favSport3: value,
              // });
              //}}
              style={{
                inputAndroid: {
                  backgroundColor: "transparent",
                  paddingLeft: 30,
                  paddingTop: 10,
                  paddingBottom: 15,
                  paddingRight: 10,
                  fontSize: 18,
                  fontFamily: "sf-normal"
                },
                iconContainer: {
                  top: 20,
                  right: 15
                }
              }}
              //value={this.state.favSport3}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColorAndroid: Colors.credFormBorder }}
              Icon={() => {
                return <Chevron size={1} color={Color.credFormBorder} />;
              }}
            />
          </View>
        </View>
        <View style={styles.doubleColumn}>
          <View style={{ ...styles.genderField, ...styles.padRight }}>
            <SimpleLineIcons
              style={styles.rightSideIcon}
              name="bag"
              size={18}
              color={Colors.credIcons}
            />
            <Text style={styles.formLabels}>Employment Status</Text>
            <RNPickerSelect
              items={[
                { label: "Football", value: "football" },
                { label: "Baseball", value: "baseball" },
                { label: "Hockey", value: "hockey" }
              ]}
              onValueChange={value => console.log(value)}
              // onValueChange={value => {
              // this.setState({
              //     favSport3: value,
              // });
              //}}
              style={{
                inputAndroid: {
                  backgroundColor: "transparent",
                  paddingLeft: 30,
                  paddingTop: 10,
                  paddingBottom: 15,
                  paddingRight: 10,
                  fontSize: 18,
                  fontFamily: "sf-normal"
                },
                iconContainer: {
                  top: 20,
                  right: 15
                }
              }}
              //value={this.state.favSport3}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColorAndroid: Colors.credFormBorder }}
              Icon={() => {
                return <Chevron size={1} color={Color.credFormBorder} />;
              }}
            />
          </View>
          <View style={{ ...styles.genderField, ...styles.padLeft }}>
            <MaterialCommunityIcons
              style={{ ...styles.dobIcon, ...styles.left10 }}
              name="home-outline"
              size={18}
              color={Colors.credIcons}
            />
            <Text style={styles.formLabels}>Marital Status</Text>
            <RNPickerSelect
              items={[
                { label: "Football", value: "football" },
                { label: "Baseball", value: "baseball" },
                { label: "Hockey", value: "hockey" }
              ]}
              onValueChange={value => console.log(value)}
              // onValueChange={value => {
              // this.setState({
              //     favSport3: value,
              // });
              //}}
              style={{
                inputAndroid: {
                  backgroundColor: "transparent",
                  paddingLeft: 30,
                  paddingTop: 10,
                  paddingBottom: 15,
                  paddingRight: 10,
                  marginLeft: 0,
                  marginHorizontal: 0,
                  fontSize: 18,
                  fontFamily: "sf-normal"
                },
                iconContainer: {
                  top: 20,
                  right: 15
                }
              }}
              //value={this.state.favSport3}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColorAndroid: Colors.credFormBorder }}
              Icon={() => {
                return <Chevron size={1} color={Color.credFormBorder} />;
              }}
            />
          </View>
        </View>
        <View style={styles.doubleColumn}>
          <View style={{ ...styles.dobField, ...styles.padRight }}>
            <AntDesign
              style={styles.dobIcon}
              name="user"
              size={18}
              color={Colors.credIcons}
            />
            <Text style={styles.formLabels}>Guarantor's Name</Text>
            <TextInput style={{ ...styles.dobFieldInput, ...styles.margin5 }} />
          </View>
          <View style={{ ...styles.genderField, ...styles.padLeft }}>
            <Ionicons
              style={{ ...styles.rightSideIcon, ...styles.left10 }}
              name="ios-infinite"
              size={18}
              color={Colors.credIcons}
            />
            <Text style={styles.formLabels}>Relationship</Text>
            <RNPickerSelect
              items={[
                { label: "Football", value: "football" },
                { label: "Baseball", value: "baseball" },
                { label: "Hockey", value: "hockey" }
              ]}
              onValueChange={value => console.log(value)}
              // onValueChange={value => {
              // this.setState({
              //     favSport3: value,
              // });
              //}}
              style={{
                inputAndroid: {
                  backgroundColor: "transparent",
                  paddingLeft: 30,
                  paddingTop: 10,
                  paddingBottom: 15,
                  paddingRight: 10,
                  fontSize: 18,
                  fontFamily: "sf-normal"
                },
                iconContainer: {
                  top: 20,
                  right: 15,
                  fontSize: 100
                }
              }}
              //value={this.state.favSport3}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColorAndroid: Colors.credFormBorder }}
              Icon={() => {
                return <Chevron size={1} color={Color.credFormBorder} />;
              }}
            />
          </View>
        </View>

        <View style={styles.doubleColumn}>
          <View style={{ ...styles.dobField, ...styles.padRight }}>
            <MaterialCommunityIcons
              style={styles.dobIcon}
              name="home-outline"
              size={18}
              color={Colors.credIcons}
            />
            <Text style={styles.formLabels}>Guarantor's Address</Text>
            <TextInput style={styles.dobFieldInput} />
          </View>
          <View style={{ ...styles.dobField, ...styles.padLeft }}>
            <Text style={styles.formLabels}>Guarantor's Phone Number</Text>
            <TextInput style={styles.dobFieldInput} keyboardType="number-pad" />
          </View>
        </View>
        <TouchableOpacity style={{ alignItems: "center" }} onPress={onSubmit}>
          <View style={styles.nextButton}>
            <Text style={styles.buttonText}>NEXT</Text>
          </View>
          <View style={styles.dataLock}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={18}
              color={Colors.credIcons}
            />
            <Text style={styles.dataLockText}>Your data is secured</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "4%",
    backgroundColor: "#FFFFFF"
  },
  steps: {
    paddingRight: 20
  },
  headerRightText: {
    fontFamily: "sf-normal",
    color: "#555555"
  },
  headerLeft: {
    paddingLeft: 20
  },
  leftWrap: {
    width: 100
  },
  profileTabPills: {
    flex: 5,
    flexDirection: "row",
    paddingHorizontal: "10.76%",
    marginVertical: 20
  },
  singleTabPill: {
    marginHorizontal: 10,
    height: 5,
    width: "20%",
    borderRadius: 2.5,
    backgroundColor: Colors.credBlue,
    opacity: 0.1
  },
  profileWrapper: {
    marginHorizontal: 0,
    marginTop: 15
  },
  activeTabPill: {
    backgroundColor: Colors.credBlue,
    marginHorizontal: 10,
    height: 5,
    width: "20%",
    borderRadius: 2.5
  },

  profileHeading: {
    alignContent: "center"
  },
  profileHeadingText: {
    color: Colors.credBlue,
    fontFamily: "sf-bold",
    fontSize: 42
  },
  profileView: {
    paddingLeft: 4,
    marginTop: 10
  },

  profileViewText: {
    fontFamily: "sf-normal",
    fontSize: 17,
    color: Colors.credDark
  },
  formWrapper: {
    marginVertical: 40,
    height: "75%",
    maxWidth: "98%",
    marginBottom: 30
  },
  fullColumn: {
    marginVertical: -5
  },
  doubleColumn: {
    // flex: 2,
    flexDirection: "row"
  },
  formLabels: {
    paddingLeft: 30,
    color: Colors.credBlue,
    fontFamily: "sf-normal",
    position: "relative",
    top: 5,
    fontSize: 12
  },
  dobField: {
    width: 200,
    maxWidth: "50%"
  },
  dobFieldInput: {
    backgroundColor: "transparent",
    paddingLeft: 30,
    paddingBottom: 5,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.credFormBorder,
    fontFamily: "sf-normal",
    fontSize: 18
  },
  marginTopRemove: {
    marginTop: 0
  },
  dobIcon: {
    position: "absolute",
    top: 22
  },
  padRight: {
    paddingRight: "2%"
  },
  padLeft: {
    paddingLeft: "2%"
  },
  rightSideIcon: {
    position: "absolute",
    top: 30
  },
  left10: {
    left: 10
  },
  genderField: {
    width: 200,
    maxWidth: "50%"
  },
  genderFieldInput: {
    backgroundColor: "transparent"
  },
  nextButton: {
    backgroundColor: Colors.credBlue,
    marginTop: "14%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    maxWidth: "51.5%",
    width: 213,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontFamily: "sf-normal",
    fontSize: 20,
    textAlign: "center"
  },
  redbg: {
    backgroundColor: "red"
  },
  dataLock: {
    flexDirection: "row",
    marginVertical: 10
  },
  dataLockText: {
    fontSize: 16,
    color: Colors.credIcons,
    paddingHorizontal: 10
  },
  firstIcon: {
    left: 10,
    top: 20
  },
  rightIcon: {
    position: "absolute",
    left: 10,
    top: 22
  },
  margin5: {
    marginTop: 12
  }
});

CompleteProfile.navigationOptions = options => {
  return {
    headerTitle: "",
    headerLeft: () => (
      <TouchableOpacity
        style={styles.headerLeft}
        onPress={() => options.navigation.pop()}
      >
        <View style={styles.leftWrap}>
          <Ionicons name="ios-arrow-back" size={25} />
        </View>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <View style={styles.steps}>
        <Text style={styles.headerRightText}>Step 1 of 5</Text>
      </View>
    )
  };
};

export default CompleteProfile;
