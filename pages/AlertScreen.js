import { Text, View, StyleSheet, Quicksand } from "react-native";

export default function AlertScreen() {
    return(
    <View >
      <Text style={styles.text}>Hello, Name!</Text>
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
  