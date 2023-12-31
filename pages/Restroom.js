import {
  createAppContainer,
  NavigationContainer,
  Link,
} from "@react-navigation/native";
import { Dimensions } from "react-native";
import { Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Touchable from 'react-native-platform-touchable'
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { TouchableOpacity } from "react-native-gesture-handler";

// import React, {useState} from "react";
// import * as SplashScreen from 'expo-splash-screen';
// SplashScreen.preventAutoHideAsync();
// import { useFonts, Quicksand } from '@expo-google-fonts/quicksand';
{/*Add this to the other page at the top near imports  */}
const screenWidth = Dimensions.get("window").width;
// const data = {
//   labels: ["M", "Tu", "W", "Th", "F"],
//   datasets: [
//     {
//       data: [5, 4, 4, 1, 2],
//       //come back to the RGBA
//       color: (opacity = 1) => `rgba(255,0,0, ${opacity})`, // optional
//       strokeWidth: 2, // optional
//     },
//   ],
//   legend: ["Restroom1"], // optional
// };

export default function Restroom({ navigation }) {
  return (
    <View style={{ backgroundColor: "#262626", flex: 1 }}>
      <LinearGradient
        colors={["#262626", "#262626"]}
        style={{ position: "absolute", left: 30, right: 0, top: 0, height: 700 }}
      />

      <Touchable
      style={{ alignItems: 'center', alignContent: 'center', width: 111, height:111, left: 150, top: 250}}
        onPress={() => {
          navigation.navigate("Details")
        }}
        // style={({ pressed }) => {
        //   return { opacity: pressed ? 0.5 : 1 };
        // }}
      >
        {/* make another pressable and add an image tag into i t */}
        {/* <View
          style={{
            flex: 1,
            alignItems: "center",
            position: "absolute",
            top: 250,
            left: 150,
          }}
        > */}
        <View style= {styles.container}>
        <Image
          style={{
            height: 111,
            width: 111,
            alignItems: "center",
          
          }}
          source={require("../assets/formkit_add.png")}
        />
      
        {/* </View> */}
        </View>
      </Touchable>
      <Text style={{ color: "white", top: 250, left: 155, fontSize: 22}}>Add Device</Text>
      {/*Move this inside view part in Details page */}
      {/* <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      /> */}
    </View>
  );
}
{/*Move this near the styles part in Details page */}
// const chartConfig = {
//   backgroundColor: "#6F6F6F",
//   color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
//   strokeWidth: 5, // optional, default 3
//   barPercentage: 0.5,
//   useShadowColorFromDataset: false, // optional
// };

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width:111,
    width:111,
     
  },
  txt: {
    color: "red",
    fontSize: 35,
    zIndex: 10,
    fontFamily: "Quicksand",
    fontStyle: "normal",
    fontWeight: 400,
  },
  button: {
    backgroundColor: "Green",
    color: "Black",
    margin: 57,
    padding: 17,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
});
