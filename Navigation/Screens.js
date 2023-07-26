import DetailPageOne from "../pages/DetailPageOne";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AddRestroom from "../pages/AddRestroom";

const Stack = createNativeStackNavigator();

export default function Screens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DetailPageOne" component={DetailPageOne} />
      <Stack.Screen name="AddRestroom" component={AddRestroom} />
    </Stack.Navigator>
  );
}
