import { View } from "react-native";
import Restroom from "../pages/Restroom";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tabs = createMaterialTopTabNavigator();

export default function TabNavigators() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="     " component={Restroom} />
    </Tabs.Navigator>
  );
}
