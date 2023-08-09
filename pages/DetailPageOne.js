import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { LineChart } from "react-native-gifted-charts";
import React, { useState, useRef, useEffect } from "react";
import { AccordionItem } from "../components/AccordianList";
import { WifiScreen } from "./KalvinsCode";
import { PermissionsAndroid } from "react-native";
import PopUp from "../components/PopUp";
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

const DEFAULT_IP = "192.168.68.108";

const DEFAULT_DATA = [{ value: 100 }];

// //Main function running this page
export default function DetailPageOne({ navigation }) {
  const [ip, setIp] = useState(DEFAULT_IP);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [currentData, setCurrentData] = useState(DEFAULT_DATA);
  const [status, setStatus] = useState("Disconnected");

  useEffect(() => {
    const ws = new WebSocket(`ws://${ip}/ws`);
    ws.onopen = () => {
      setStatus("Connected");
    };
    ws.onclose = (e) => {
      setStatus("Disconnected");
    };
    ws.onerror = (e) => {
      setStatus("Error");
      console.log(e.message);
    };
    ws.onmessage = (e) => {
      // add new reading into data array
      setCurrentData((preVal) => {
        // append if we have less than 12
        if (preVal.length < 11) {
          return [
            ...preVal,
            {
              value: e.data,
            },
          ];
        }
        // remove first index before appending a new reading
        else {
          const d = preVal;
          d.shift();
          return [
            ...d,
            {
              value: e.data,
            },
          ];
        }
      });
    };

    // FOR TESTING WITHOUT SENSOR
    // const interval = setInterval(() => {
    //   const num = Math.floor(Math.random() * (800 - 0 + 1) + 0);
    //   setCurrentData((preVal) => {
    //     // append if we have less than 12
    //     if (preVal.length < 11) {
    //       return [
    //         ...preVal,
    //         {
    //           value: num,
    //         },
    //       ];
    //     }
    //     // remove first index before appending a new reading
    //     else {
    //       const d = preVal;
    //       d.shift();
    //       return [
    //         ...d,
    //         {
    //           value: num,
    //         },
    //       ];
    //     }
    //   });
    // }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <SafeAreaView>
      <View>
        {isPopUpVisible ? (
          <PopUp setIsPopUpVisible={setIsPopUpVisible} />
        ) : null}
      </View>
      <View>
        <AccordionItem
          title={"Not Connected"}
          body1={"Floor: "}
          body2={"Restroom #:"}
          body3
          floorNum={1}
          restNum={251}
        />
      </View>
      <View>
        <WifiScreen />
      </View>
      <View style={style.that}>
        <View style={style.inner3}>
          <Text style={{ color: "white", fontSize: 25 }}>
            HCHO <Text style={{ color: "#FF4B4B" }}>Level</Text> :{" "}
            {currentData[currentData.length - 1].value} PPM
          </Text>
        </View>
      </View>
      <View>
        {/* https://gifted-charts.web.app/linechart */}
        <LineChart
          isAnimated
          animationDuration={1200}
          yAxisColor="#FF4B4B"
          rulesColor="FF4B4B"
          showVerticalLines
          verticalLinesColor="#FF4B4B"
          xAxisColor="#FF4B4B"
          color="#FF4B4B"
          initialSpacing={0}
          data={currentData}
          spacing={35}
          hideDataPoints
          thickness={5}
          hideRules
          maxValue={800}
          animateOnDataChange
          onDataChangeAnimationDuration={1000}
          yAxisTextStyle={{ color: "lightgray" }}
          backgroundColor="#3e3e3e"
        />
      </View>
      <TouchableOpacity>
        <View>
          <Image
            style={{
              height: 40,
              width: 40,
              alignItems: "center",
              top: 100,
              left: 185,
            }}
            source={require("../assets/formkit_add.png")}
          />
          <Text style={{ color: "white", left: 170, top: 100 }}>
            Add Device
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
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
    borderRadius: 10,
    right: -30,
    top: 320,
  },
  innter4: {
    backgroundColor: "red",
    top: 500,
  },
  that: {
    width: 355,
    height: 88,
    padding: 1,
  },
  container: {
    width: 369,
    height: 50,
    left: 26,
    top: 20,
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: "0,0,0,0.5",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 273,
    backgroundColor: "rgba(23, 23, 23, 0.80)",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
