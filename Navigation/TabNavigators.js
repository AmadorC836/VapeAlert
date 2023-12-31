import Restroom from "../pages/Restroom";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tabs = createMaterialTopTabNavigator();

export default function TabNavigators() {
  return (

    <Tabs.Navigator>
      <Tabs.Screen name="Dashboard" component={Restroom} />
    </Tabs.Navigator>
  );
}
