import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Color from "../constants/Color";
import { color } from "react-native-reanimated";
import Personal from "../components/Personal";
import Security from "../components/Security";
import Others from "../components/Others";
import { Colors } from "react-native/Libraries/NewAppScreen";

const EditProfile = props => {
  const [activeTab, setActiveTab] = useState("others");

  let currentTabView = <Others />;

  if (activeTab === "others") {
    currentTabView = <Others />;
  }
  if (activeTab === "personal") {
    currentTabView = <Personal />;
  }
  if (activeTab === "security") {
    currentTabView = <Security />;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.EditHeader}>
        <Text style={styles.EditHeaderText}>Edit Profile</Text>
      </View>
      <View style={styles.navigationTabs}>
        <TouchableOpacity
          style={
            activeTab === "personal"
              ? { ...styles.navtab, ...styles.activetab }
              : styles.navtab
          }
          onPress={() => setActiveTab("personal")}
        >
          <View>
            <Text
              style={
                activeTab === "personal"
                  ? { ...styles.navtabText, ...styles.activetabText }
                  : styles.navtabText
              }
            >
              Personal
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            activeTab !== "security"
              ? styles.navtabMiddle
              : styles.activeMiddleTab
          }
          onPress={() => setActiveTab("security")}
        >
          <View>
            <Text
              style={
                activeTab !== "security"
                  ? styles.navtabText
                  : styles.activeMiddleTabText
              }
            >
              Security
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            activeTab === "others"
              ? { ...styles.navtab, ...styles.activetab }
              : styles.navtab
          }
          onPress={() => setActiveTab("others")}
        >
          <View>
            <Text
              style={
                activeTab === "others"
                  ? { ...styles.navtabText, ...styles.activetabText }
                  : styles.navtabText
              }
            >
              Others
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.spaceBelow}>{currentTabView}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: "5%"
  },
  steps: {
    paddingRight: 20
  },
  headerLeft: {
    paddingLeft: 20
  },
  headerRightText: {
    fontFamily: "sf-normal",
    color: Color.credBlue
  },
  save: {
    borderWidth: 1,
    borderColor: "rgba(39,79,237, 0.2)",
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 8,
    position: "relative"
  },
  discard: {
    color: Color.credPalRed,
    fontSize: 16,
    fontFamily: "sf-normal",
    position: "relative",
    bottom: 22,
    left: 15
  },
  leftWrap: {
    width: 100,
    position: "relative",
    top: 10
  },
  EditHeader: {
    flex: 1,
    flexDirection: "row"
  },
  EditHeaderText: {
    fontSize: 28,
    fontFamily: "sf-bold",
    color: Color.credDark
  },
  navigationTabs: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "rgba(85,85,85,0.05)",
    borderRadius: 10,
    width: "100%",
    alignSelf: "flex-start",
    justifyContent: "space-evenly",
    height: 50
  },
  navtab: {
    paddingVertical: 15,
    width: 130,
    alignItems: "center"
  },
  navtabMiddle: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "rgba(85,85,85,0.05)",
    paddingVertical: 5,
    marginVertical: 10,
    paddingHorizontal: 30
  },
  activeMiddleTab: {
    paddingVertical: 15,
    backgroundColor: Color.credBlue,
    borderRadius: 10,
    color: "white",
    paddingHorizontal: 30
  },
  activeMiddleTabText: {
    color: "white"
  },
  navtabText: {
    fontFamily: "sf-normal",
    fontSize: 16,
    color: "rgba(85,85,85,0.5)"
  },
  spaceBelow: {
    flex: 10,
    marginVertical: 20,
    borderTopWidth: 1,
    borderColor: "rgba(85,85,85,0.05)",
    width: "100%"
  },
  activetab: {
    backgroundColor: Color.credBlue,
    borderRadius: 10,
    color: "white"
  },
  activetabText: {
    color: "white"
  }
});

EditProfile.navigationOptions = options => {
  return {
    headerTitle: "",
    headerLeft: () => (
      <TouchableOpacity
        style={styles.headerLeft}
        onPress={() => options.navigation.pop()}
      >
        <View style={styles.leftWrap}>
          <Ionicons name="ios-arrow-back" size={25} color={Color.credPalRed} />
          <Text style={styles.discard}>Discard</Text>
        </View>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={() => options.navigation.popToTop()}>
        <View style={styles.steps}>
          <View style={styles.save}>
            <Text style={styles.headerRightText}>Save</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  };
};

export default EditProfile;
