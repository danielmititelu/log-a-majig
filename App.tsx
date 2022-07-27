import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import ExpensesScreen from "./src/screens/ExpensesScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.root}>
      <View style={styles.tabs}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Expenses" component={ExpensesScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  tabs: {
    flex: 1,
  },
});
