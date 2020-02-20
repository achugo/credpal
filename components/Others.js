import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Colors from "../constants/Color";
import RNPickerSelect from "react-native-picker-select";
import { Chevron } from "react-native-shapes";

const Others = props => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.editItem}>
        <View style={styles.itemTitle}>
          <Text style={styles.itemTitleText}>Employer</Text>
        </View>
        <View style={styles.itemContent}>
          <TextInput
            style={styles.itemContentInput}
            placeholder="CredPal Limited"
            underlineColorAndroid="transparent"
            editable={true}
          />
        </View>
      </View>
      <View style={styles.editItem}>
        <View style={styles.itemTitle}>
          <Text style={styles.itemTitleText}>Office Address</Text>
        </View>
        <View style={styles.itemContent}>
          <TextInput
            style={styles.itemContentInput}
            placeholder="75, Olonade street A..ba, Lagos"
            underlineColorAndroid="transparent"
            editable={true}
          />
        </View>
      </View>
      <View style={styles.editItem}>
        <View style={styles.itemTitle}>
          <Text style={styles.itemTitleText}>Job Title</Text>
        </View>
        <View style={styles.itemContent}>
          <TextInput
            style={styles.itemContentInput}
            placeholder="Graphics & UI/UX DESIGNER"
            underlineColorAndroid="transparent"
            editable={true}
          />
        </View>
      </View>
      <View style={styles.editItem}>
        <View style={styles.itemTitle}>
          <Text style={styles.itemTitleText}>Contract Type</Text>
        </View>
        <View style={styles.itemContent}>
          <RNPickerSelect
            items={[
              { label: "Football", value: "football" },
              { label: "Baseball", value: "baseball" },
              { label: "Hockey", value: "hockey" }
            ]}
            onValueChange={() => console.log("changed")}
            // onValueChange={value => {
            // this.setState({
            //     favSport3: value,
            // });
            //}}
            style={{
              inputAndroid: {
                backgroundColor: "transparent",
                paddingLeft: 30,
                // paddingTop: 10,
                paddingBottom: 10,
                marginBottom: -15,
                paddingRight: 20,
                fontFamily: "sf-normal",
                fontSize: 16
              },
              iconContainer: {
                top: 8,
                right: 5
              }
            }}
            //value={form.gender}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColorAndroid: "transparent" }}
            Icon={() => {
              return <Chevron size={1} color="gray" />;
            }}
          />
        </View>
      </View>
      <View style={styles.editItem}>
        <View style={styles.itemTitle}>
          <Text style={styles.itemTitleText}>Salary</Text>
        </View>
        <View style={styles.itemContent}>
          <TextInput
            style={styles.itemContentInput}
            placeholder="N840,000"
            underlineColorAndroid="transparent"
            editable={true}
          />
        </View>
      </View>
      <View style={styles.editItem}>
        <View style={styles.itemTitle}>
          <Text style={styles.itemTitleText}>Next of Kin</Text>
        </View>
        <View style={styles.itemContent}>
          <TextInput
            style={styles.itemContentInput}
            placeholder="Oshokoya Joseph"
            underlineColorAndroid="transparent"
            editable={true}
          />
        </View>
      </View>
      <View style={styles.editItem}>
        <View style={styles.itemTitle}>
          <Text style={styles.itemTitleText}>Relationship</Text>
        </View>
        <View style={styles.itemContent}>
          <RNPickerSelect
            items={[
              { label: "Football", value: "football" },
              { label: "Baseball", value: "baseball" },
              { label: "Hockey", value: "hockey" }
            ]}
            onValueChange={() => console.log("changed")}
            // onValueChange={value => {
            // this.setState({
            //     favSport3: value,
            // });
            //}}
            style={{
              inputAndroid: {
                backgroundColor: "transparent",
                paddingLeft: 30,
                // paddingTop: 10,
                paddingBottom: 10,
                marginBottom: -15,
                paddingRight: 20,
                fontFamily: "sf-normal",
                fontSize: 16
              },
              iconContainer: {
                top: 8,
                right: 5
              }
            }}
            //value={form.gender}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColorAndroid: "transparent" }}
            Icon={() => {
              return <Chevron size={1} color="gray" />;
            }}
          />
        </View>
      </View>

      <View style={styles.editItem}>
        <View style={styles.itemTitle}>
          <Text style={styles.itemTitleText}>Address</Text>
        </View>
        <View style={styles.itemContent}>
          <TextInput
            style={styles.itemContentInput}
            placeholder="Route 7, Ink park, Toronto,...o, CA"
            underlineColorAndroid="transparent"
            editable={true}
          />
        </View>
      </View>
      <View style={styles.editItem}>
        <View style={styles.itemTitle}>
          <Text style={styles.itemTitleText}>Contact Number</Text>
        </View>
        <View style={styles.itemContent}>
          <TextInput
            style={styles.itemContentInput}
            placeholder="N840,000"
            underlineColorAndroid="transparent"
            editable={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  editItem: {
    flexDirection: "row",
    flex: 2,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(85,85,85,0.05)",
    paddingVertical: 15
  },
  itemTitle: {
    fontFamily: "sf-normal",
    fontSize: 16
  },
  itemTitleText: {
    fontFamily: "sf-normal",
    fontSize: 16
  },
  itemContent: {
    fontFamily: "sf-normal",
    fontSize: 16
  },
  itemContentInput: {
    fontFamily: "sf-normal",
    fontSize: 16,
    color: Colors.credFormBorder,
    width: "100%",
    position: "relative"
  }
});

export default Others;
