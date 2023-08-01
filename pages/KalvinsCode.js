import React, { useState, useEffect } from 'react';
import { Button, Pressable, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import { TextInput } from "react-native";

export const WifiScreen = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    const SavePreferenceClick = () => {
        setSavedSliderValue(sliderValue);
        // Console is behind
        console.log('Saved Value:', savedSliderValue);
        setIsModalVisible(() => !isModalVisible);
    }


    return (
        <View style={styles.container}>
            <View style={styles.separator} >
                <TouchableOpacity onPress={handleModal} style={styles.popupButton}>
                    <Text style={styles.SaveModalButtonText}>Connect</Text>
                </TouchableOpacity>
            </View>
            <Modal
                isVisible={isModalVisible}
                animationIn="bounceInDown"
            >
                <View style={{ backgroundColor: 'rgba(23, 23, 23, 1)', height: 273, width: 273, left:50, bottom: 80,}}>
                    <TouchableOpacity onPress={handleModal} style={styles.CancelModalButton}>
                        <Text style={styles.CancelModalText}>X</Text>
                    </TouchableOpacity>
                    { /* put image here */}
                    
                    <Image source = {require('../assets/BConnection.png')} style = {{ height: 83, width: 123, alignSelf: 'center'}} />
                    
                    <Text style={{ color : 'white', fontSize: 20, alignSelf: 'center', top: 40}}>Scanning... </Text> 
                    </View>
            </Modal>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"red"
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
        backgroundColor: '#585858',
        color: "#FFFFFF",
    },
    SaveModalButtonText: {
        alignItems: 'center',
        left: 95,
        bottom: 5,
        color: '#FFFFFF',
        fontSize: 20,
        paddingLeft: 53,
        paddingTop: 1,
    },
    SaveModal: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: 200,
        marginBottom: 350,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 15,
    },
    CancelModalButton: {
        backgroundColor: "'rgba(23, 23, 23, 1)'",
        top:1,
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
        color: 'white',
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
        color: '#FFF',
        backgroundColor: 'FFF',
        fontSize: 25,
        borderWidth: 3,
        borderColor: "#FFF",
        borderRadius: 10,
    },
});