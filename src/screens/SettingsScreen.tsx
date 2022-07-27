import React from "react";
import { Text, View } from "react-native";

type Props = {};
const SettingsScreen = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings</Text>
    </View>
  );
};
export default SettingsScreen;
