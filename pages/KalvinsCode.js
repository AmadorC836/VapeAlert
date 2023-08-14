import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";

export const WifiScreen = () => {
  const [changeStyle, onChangeStyle] = useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  // const [selectedLanguage, setSelectedLanguage] = useState();
  const [connect, onPressConnect] = React.useState("Connect");
  const SavePreferenceClick = () => {
    setSavedSliderValue(sliderValue);
    // Console is behind
    console.log("Saved Value:", savedSliderValue);
    setIsModalVisible(() => !isModalVisible);
  };
  // const container = document.getElementsByClassName('container')[0];

  return (
    <View style={styles.container}>
      <View style={styles.separator}>
        <TouchableOpacity onPress={handleModal} style={[styles.popupButton, styles.boxShadow]}>
          <Text style={styles.SaveModalButtonText}>Connect</Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={isModalVisible} animationIn="bounceInDown">
        <View
          style={{
            backgroundColor: '#171717',
            height: 273,
            width: 273,
            left: 50,
            bottom: 80,
          }}
        >
          <TouchableOpacity
            onPress={handleModal}
            style={[styles.CancelModalButton]}
          >
            <Text style={styles.CancelModalText}>X</Text>
          </TouchableOpacity>
        

          <Image
            source={require("../assets/BConnection.png")}
            style={{ height: 83, width: 123, alignSelf: "center" }}
          />

          <Text
            style={{
              color: "white",
              fontSize: 20,
              alignSelf: "center",
              top: 40,
            }}
          >
            Scanning...{" "}
          </Text>
        </View>
        <View style={{ width: 80, bottom: 104, left: 60 }}>
          <Text style={{ color: "#ACACAC", fontSize: 18 }}> DEVICES </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            if (connect === "Connect") {
              onPressConnect("Disconnect");
              onChangeStyle(true);
            } else {
              onPressConnect("Connect");
              onChangeStyle(false);
            }
          }}
          style={styles.th}
        >
          <View style={styles.inner}>
            <Text style={styles.text1}>Device Name</Text>
            <Text style={[styles.con_dis, changeStyle && styles.con_dis1]}>
              {connect}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          
          style={styles.the}
        >
          <View style={styles.inner}>
            <Text style={{ color: "white", fontSize: 15, left: 10, top: 18 }}>
              Device Name
            </Text>
            <Text style={{ color: 'white', fontsize: 15, left: 200}}>
              Connect
            </Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  text1: {
    color: "white",
    fontSize: 15,
    left: 10,
    top: 18,
  },
  the: {
    width: 273,
    height: 58,
    backgroundColor: "#484848",
    bottom: 98,
    left: 50,
  },
  th: {
    width: 273,
    height: 58,
    backgroundColor: "#484848",
    bottom: 100,
    left: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  separator: {
    //Nothing here
  },
  popupButton: {
    left: 0,
    marginTop: 108,
    marginVertical: 30,
    top: 320,
    width: 369,
    height: 48,
    paddingTop: 13,
    borderRadius: 10,
    backgroundColor: "black",
    color: "#FFFFFF",
  },
  SaveModalButtonText: {
    alignItems: "center",
    left: 95,
    bottom: 1,
    color: "#FFFFFF",
    fontSize: 20,
    paddingLeft: 53,
    paddingTop: 1,
  },
  SaveModal: {
    flex: 1,
    backgroundColor: "black",
    marginTop: 200,
    marginBottom: 350,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 15,
  },
  CancelModalButton: {
    backgroundColor: "'rgba(23, 23, 23, 1)'",
    top: 1,
    left: 230,
    width: 40,
    height: 50,
    borderRadius: 10,
  },
  CancelModalText: {
    height: 100,
    width: 100,
    paddingLeft: 10,
    paddingTop: 10,
    color: "white",
    fontSize: 25,
  },
  SaveModalButton: {
    backgroundColor: "#CD6FFE",
    top: 30,
    left: 190,
    height: 50,
    width: 70,
    borderRadius: 10,
  },
  SaveButtonInput: {
    top: 55,
    left: 60,
    marginRight: 110,
    color: "#FFF",
    backgroundColor: "FFF",
    fontSize: 25,
    borderWidth: 3,
    borderColor: "#FFF",
    borderRadius: 10,
  },
  con_dis: {
    flexWrap: "wrap",
    color: "white",
    left: 200,
  },
  con_dis1: {
    flexWrap: "wrap",
    color: "white",
    left: 190,
  },
  boxShadow: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset:{
      width: 10,
      height: 10
    },
    shadowOpacity: 0.6,
    shadowRadius:4
  }
});
