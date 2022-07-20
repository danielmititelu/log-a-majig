import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, onChangeText] = React.useState("");
  const [messages, onChangeMessages] = React.useState([""]);
  const [totalSpent, onChangeTotalSpent] = React.useState(0);

  const numberRule = /\d+/;

  const submitMessage = function () {
    const newSpent = Number(text.match(numberRule));
    onChangeTotalSpent(totalSpent + newSpent);
    onChangeMessages([...messages, text]);
    onChangeText("");
  };

  return (
    <View style={styles.container}>
      <Text>Spent this month: {totalSpent} ron</Text>
      <View>
        {messages.map((e, i) => (
          <Text key={i}>{e}</Text>
        ))}
      </View>
      <View style={styles.bottom}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="add a track a majig"
        />
        <View style={styles.button}>
          <Button
            onPress={submitMessage}
            title="Submit"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "8%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "aliceblue",
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {},
  input: {
    width: "65%",
    height: 40,
    margin: 10,
    padding: 10,
    borderWidth: 1,
  },
});
