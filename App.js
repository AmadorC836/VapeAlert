import TabNavigators from "./Navigation/TabNavigators";
import "react-native-gesture-handler";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import DetailPageOne from "./pages/DetailPageOne";
import AddRestroom from "./pages/AddRestroom";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    primary: " rgb(255,255,255)",
    text: "rgb(255,255,255)",
  },
};

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#262626" }}>
      <View
        style={{
          marginTop: 66,
          marginLeft: 19,
          alignItems: "flex-start",
          backgroundColor: "#262626",
        }}
      >
        <Text style={{ fontSize: 30, color: "white" }}>Dashboard </Text>
      </View>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={TabNavigators}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Details" component={DetailPageOne} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
