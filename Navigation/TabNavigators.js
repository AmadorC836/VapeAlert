import { View } from "react-native";
import Restroom from "../pages/Restroom";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Dashboard from "../pages/Dashboard";

const Tabs = createMaterialTopTabNavigator();

export default function TabNavigators() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Restroom" component={Restroom} />
      <Tabs.Screen name="Dashboard" component={Dashboard} />
    </Tabs.Navigator>
  );
}
