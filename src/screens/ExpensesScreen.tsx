import React from "react";
import { Text, View } from "react-native";

type Props = {};
const ExpensesScreen = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Expenses</Text>
    </View>
  );
};
export default ExpensesScreen;
