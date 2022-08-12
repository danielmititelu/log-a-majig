import React from "react";
import { Text, View } from "react-native";

type Props = {
  totalSpent: number;
};

const ExpensesScreen = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
      <Text>Spent this month: {props.totalSpent} ron</Text>
    </View>
  );
};
export default ExpensesScreen;
