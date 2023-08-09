import { View } from "react-native";
import Restroom from "../pages/Restroom";
import Dashboard from "../pages/Dashboard"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tabs = createMaterialTopTabNavigator();

export default function TabNavigators() {
  return (

    <Tabs.Navigator>
      <Tabs.Screen name="Dashboard" component={Restroom} />
      <Tabs.Screen name="Dashboard" component={Dashboard} />
    </Tabs.Navigator>
  );
}
