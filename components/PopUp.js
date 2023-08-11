import {
    Text,
    View,
    StyleSheet,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Modal
  } from "react-native";

export default function PopUp(props) {

    return(
        <View  style={{ backgroundColor: "rgba(23, 23, 23, 0.80)", width: 369, height: 141, borderRadius: 15, left: 10, top: 0}}>
            <View style= {{backgroundColor: "#841515", height: 71, borderRadius: 15,}}>
                <Image style={{ height: 31, width: 25.952, top: 6, left: 10}} source={require("../assets/VapeAlertLogo.png")}/>
                <Text style={{ color: "white", fontSize: 15, left: 50, bottom: 15}}>
                    Vape Alert
                </Text>
                <Text style={{ color: "white", fontSize: 15, left: 15, bottom: 12}}>
                    High Levels of HCHO Detected              Now
                </Text>
            </View>
        <View>
            <TouchableOpacity style={{ width: 161, height: 41, backgroundColor: "#3E3E3E", borderRadius: 15, left: 10, top: 20}} onPress={() => {
                props.setIsPopUpVisible(false)
            }}>
        
                <Text style={{ color: "white", textAlign: "center", top:10}}> Can not Manage </Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={{ width: 161, height: 41, backgroundColor: "#3E3E3E", borderRadius: 15, left: 200, bottom: 20}} onPress={() => {
                props.setIsPopUpVisible(false)
            }}>
        
                <Text style={{ color: "white", textAlign: "center", top: 10}}> Can  Manage </Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}