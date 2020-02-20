import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Color";
import Color from "../constants/Color";

const EntryScreeen = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.entryView}>
        <Text style={styles.entryText}>Entry Screen</Text>
      </View>

      <View style={styles.wrapBothButtons}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            props.navigation.navigate({
              routeName: "FillProfile"
            })
          }
        >
          <View style={styles.navigationButton}>
            <Text style={styles.navigationText}>Complete profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            props.navigation.navigate({
              routeName: "EditProfile"
            })
          }
        >
          <View style={styles.navigationButton}>
            <Text style={styles.navigationText}>edit profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: "5%"
  },

  wrapBothButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 6,
    padding: 20,
    borderRadius: 20
  },
  navigationButton: {
    backgroundColor: Colors.credBlue,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5
  },
  navigationText: {
    color: "white",
    fontFamily: "sf-normal",
    fontSize: 20,
    textAlign: "center"
  },
  entryText: {
    fontFamily: "sf-bold",
    fontSize: 30
  },
  entryView: {
    marginVertical: 30
  }
});

export default EntryScreeen;
