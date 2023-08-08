import { Text, View, StyleSheet, SafeAreaView } from "react-native";
// import { LineChart } from "react-native-chart-kit";
import { LineChart } from "react-native-gifted-charts";
import { Dimensions } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import useInterval from "../Polling/useInterval";

const screenWidth = Dimensions.get("window").width;
const data = {
  labels: ["1"],
  datasets: [
    {
      data: [0],
      //come back to the RGBA
      color: (opacity = 1) => `rgba(255,255,255, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  // legend: ["Restroom1"], // optional
};

// //Main function running this page
export default function DetailPageOne({ navigation }) {
  const [mainData, setData] = useState(data);
  const [state, setState] = useState("Disconnected");

  const latestData = [
    {
      value: 120,
    },
    {
      value: 210,
    },
  ];

  const [currentData, setCurrentData] = useState(latestData);

  React.useEffect(() => {
    const ws = new WebSocket("ws://192.168.68.108/ws");
    ws.onopen = () => {
      setState("Connected to the server");
      console.log("connected");
    };
    ws.onclose = (e) => {
      setState("Disconnected. Check internet or server.");
    };
    ws.onerror = (e) => {
      console.log(e);
      setState(e.message);
    };
    ws.onmessage = (e) => {
      //console.log(e.data);
      // setData({
      //   ...mainData,
      //   labels: [...mainData.labels, mainData.labels.length + 1],
      //   datasets: [
      //     {
      //       ...mainData.datasets[0],
      //       data: [...mainData.datasets[0].data, e.data],
      //     },
      //   ],
      // });

      setCurrentData((preVal) => {
        if (preVal.length < 12) {
          return [
            ...preVal,
            {
              value: e.data,
            },
          ];
        } else {
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
  }, []);

  console.log(currentData.length);
  const dPoint = () => {
    return (
      <View
        style={{
          width: 14,
          height: 14,
          backgroundColor: "white",
          borderWidth: 3,
          borderRadius: 7,
          borderColor: "#07BAD1",
        }}
      />
    );
  };

  return (
    <SafeAreaView>
      <View>{/* <WifiScreen /> */}</View>
      <View style={style.that}>
        <View style={style.inner3}>
          <Text style={{ color: "white", fontSize: 25 }}>
            HCHO <Text style={{ color: "#FF4B4B" }}>Level</Text> :
            {mainData.datasets[0].data[mainData.datasets[0].data.length - 1]}{" "}
            PPM
          </Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 100,
          paddingVertical: 50,
          backgroundColor: "#414141",
          borderWidth: 3,
          borderColor: "white",
        }}
      >
        {/* <LineChart
          data={data}
          width={355}
          height={292}
          chartConfig={chartConfig}
          style={{ left: 25, top: -80, borderRadius: 10, padding: 2 }}
        /> */}

        <LineChart
          isAnimated
          animationDuration={1200}
          startFillColor="#0BA5A4"
          startOpacity={1}
          endOpacity={0.3}
          yAxisColor="#0BA5A4"
          showVerticalLines
          verticalLinesColor="rgba(14,164,164,0.5)"
          xAxisColor="#0BA5A4"
          color="#0BA5A4"
          initialSpacing={0}
          data={currentData}
          spacing={35}
          hideDataPoints
          thickness={5}
          hideRules
          maxValue={800}
        />
      </View>
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
