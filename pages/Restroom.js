// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import { Div } from 'react-native-div' ;
import { Button, Dimensions } from "react-native";
import { Text, View, StyleSheet, } from "react-native";
import {
  LineChart,
}from "react-native-chart-kit";


const screenWidth = Dimensions.get("window").width;
const data = {
  labels: ["M", "Tu", "W", "Th", "F"],
  datasets: [
    {
      data: [5, 4, 4, 1, 2],
      //come back to the RGBA
      color: (opacity = 1) => `rgba(255,0,0, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Restroom1"] // optional
};

export default function Restroom() {
  const chartConfig = {
    backgroundColor: "#6F6F6F",
    color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
    strokeWidth: 5, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
    return(
    <View >
      <Text style={styles.text}>Hello, Name</Text>
      {/* <Div>
        <Button
        title='Restroom1'
        onPress={()=> this.props.navigation.navigate()}/>
      </Div> */}
      <LineChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
/>
    </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      //   flex: 1,
      //   flexDirection: 'column',
      backgroundColor: "##454444, #141414",
      //   alignItems: 'center',
      //   justifyContent: 'center',
    },
    text: {
      color: "red",
      fontSize: 35,
      zIndex: 10,
      fontFamily: "Quicksand",
      fontStyle: "normal",
      fontWeight: 400,
    },
  });

  