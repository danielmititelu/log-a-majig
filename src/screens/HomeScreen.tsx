import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const [text, onChangeText] = React.useState("");
  const [messages, onChangeMessages] = React.useState<string[]>([]);
  const [totalSpent, onChangeTotalSpent] = React.useState(0);

  const numberRule = /\d+/;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      if (data) {
        onChangeMessages(data);
      }
    };
    fetchData().catch(console.error);
  }, []);

  const submitMessage = async function () {
    if (text == "") return;
    const newSpent = Number(text.match(numberRule));
    onChangeTotalSpent(totalSpent + newSpent);
    const newMessages = [...messages, text];
    onChangeMessages(newMessages);
    onChangeText("");
    storeData(newMessages);
  };

  return (
    <View style={styles.container}>
      <Text>Spent this month: {totalSpent} ron</Text>

      <ScrollView style={styles.scrollView}>
        {messages.map((e, i) => (
          <Text style={styles.singleMessage} key={i}>
            {e}
          </Text>
        ))}
      </ScrollView>

      <View style={styles.bottom}>
        <TextInput
          style={styles.inputMessage}
          onChangeText={onChangeText}
          value={text}
          placeholder="What did you buy today?"
        />
        <View style={styles.button}>
          <Button
            onPress={submitMessage}
            title="⬆️"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const storeData = async (value: string[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("messages", jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("messages");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const styles = StyleSheet.create({
  singleMessage: {
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#1BCC77",
    color: "white",
  },
  inputMessage: {
    padding: 8,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    width: "95%",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  scrollView: {
    display: "flex",
    alignSelf: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    right: 30,
  },
});
