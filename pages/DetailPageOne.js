import { Text, 
  View, 
  StyleSheet, 
  Image, 
  TouchableWithoutFeedback, 
  Animated, 
  Easing, 
  SafeAreaView,
  ScrollView,
TouchableOpacity
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import React, { useState, useRef } from 'react';
import { PropsWithChildren } from "react";
import AccordionItem from "../components/AccordianList";

const screenWidth = Dimensions.get("window").width;
const data = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  datasets: [
    {
      data: [6, 7, 1, 3, 9 ,3 ,4 ,2 ,6],
      //come back to the RGBA
      color: (opacity = 1) => `rgba(255,255,255 ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  // legend: ["Restroom1"], // optional
};

export default function DetailPageOne() {
  return (
    <View>
      <View style={{ width: 369, height:50, left:16, top:20}}>
      <View
        style={{
          backgroundColor: "#3E3E3E",
          flex: 2,
          padding: 5,
          borderRadius: 10,
        }}
      >
        <Image
          source={require("../assets/Carrot.png")}
          style={{ width: 15, height: 24, left: 300, top: 11 }}
        />
        <Text style={{ fontSize: 20, color: "white", left: 122, top: -15 }}>
          Restroom 1
        </Text>
      </View>
      </View>
      <View style={style.row}>
        <View style={style.box}>
          <View style={style.inner}>
            <Text style={{ color: "white", left: 38, fontSize: 15 }}>
              Floor:                                        #
            </Text>
          </View>
        </View>
        <View style={style.box}>
          <View style={style.inner2}>
            <Text style={{ color: "white", left: 38, fontSize: 15 }}>
              Restroom:                   ###
            </Text>
          </View>
        </View>
        <View style={style.that}>
          <View style={style.inner3}>
            <Text style={{ color: "white", fontSize: 25, }}>
             HCHO <Text style={{color: '#FF4B4B'}}>Level</Text> : 0 PPM
            </Text>
          </View>
        </View>
        <LineChart
          data={data}
          width={355}
          height={292}
          chartConfig={chartConfig}
          style={{ right: 677, top: 150, borderRadius: 10, padding: 2}}
        />
      </View>
    </View>
  );
}

const chartConfig = {
  backgroundGradientFrom: "#3E3E3E",
      backgroundGradientTo: "#3E3E3E",
  color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
  strokeWidth: 5, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const style = StyleSheet.create({
  box: {
    width: 172,
    height: 88,
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: "#3E3E3E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    left: 19,
    top: 47,
  },
  row: {
    flexDirection: "row",
  },
  inner2: {
    flex: 1,
    backgroundColor: "#3E3E3E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    left: 40,
    top: 47,
  },
  inner3: {
    flex: 1,
    backgroundColor: "#3E3E3E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    right:319,
    top: 460,
  },
  that:{
  width: 355,
    height: 88,
    padding: 1,
  }
});
