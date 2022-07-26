import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [text, onChangeText] = React.useState("");
  const [messages, onChangeMessages] = React.useState<string[]>([]);
  const [totalSpent, onChangeTotalSpent] = React.useState(0);

  const numberRule = /\d+/;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      onChangeMessages(data); // da eroare cand incepi cu null
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
      <View>
        {console.log(messages)}
        {messages === null ? (
          <Text>""</Text> // part 1 din rezolvare eroare linia 16
        ) : (
          messages.map((e, i) => <Text key={i}>{e}</Text>)
        )}
      </View>
      <View style={styles.bottom}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="asd"
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

const storeData = async (value: string[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
