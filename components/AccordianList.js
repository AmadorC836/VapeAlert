import React, { useState,useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  TextInput,
  onChangeNumber,
  number,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'material-icons-react';
import { toggleAnimation } from '../animations/toggleAnimation';



export function AccordionItem({ title,body1,body2,floorNum,restNum}) {

const TextInputExample = () => {
  const [number, onChangeNumber] = React.useState('');
}
  
  //setting initial state to false
  const[showContent,setShowContent] = useState(false)
  //Controls the animations for the body 
  const animationController = useRef(new Animated.Value(0)).current
  const config ={
    duration: 300,
    toValue:showContent ? 0:1,
    useNativeDriver:true

  };
  const toggleListItem = ( ) =>{
    
    Animated.timing(animationController,config).start();
    // LayoutAnimation.configureNext(toggleAnimation);
    setShowContent(!showContent);
  };
  // const arrowTransform = animationController.interpolate(config({
  //   inputRange: [0,1],
  //   outputRange: ['0deg', '90deg']
  // }));
 return(
  //Creates the view box and sets up the title
  <View style ={styles.container}>
    {/*This part toggles the body into and from view */}
    <TouchableOpacity onPress ={()=> toggleListItem()}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> {title}</Text> 
        <Image source={require("../assets/WifiGone.png")} style={{ height:18, width: 19.5, left: 30}}/>
        {/* <Animated.View style={{transform: [{rotateZ: arrowTransform}]}}> */}
        <Icon name={'chevron-right'} size={20} color={'white'} />
        {/* </Animated.View> */}
      </View>
      
    </TouchableOpacity>
{/*Sets up what is going to be in the body. Thinking this is where we will put the boxes mean to 
collapse into the accordian/ Box1*/}
<View style={styles.row}>
   {showContent && ( 
    <View style={styles.box}>
         <View style={styles.inner}>
             <Text style={{ color: "white", left: -30, fontSize: 15,top:15 }}>
              {body1}
             </Text>
             {/*Style this one for the 
             floor number */}
             <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="#"
        placeholderTextColor={'white'}
        keyboardType="numeric"
        
      />       
           </View>
         </View>

 
     
    
   )}
{/*Box2 */}
{showContent && ( 
    <View style={styles.box1}>
         <View style={styles.inner1}>
             <Text style={{ color: "white", left: -20, fontSize: 15,top:15 }}>
              {body2}
             </Text>
             {/*Make sure you style this text tag for 
             the restroom number */}
             <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="###"
        placeholderTextColor={'white'}
        keyboardType="numeric"
      />        
           </View>
         </View>  
   )}
   </View>
  </View>
 );
  };
 
  const styles = StyleSheet.create({
container:{
  width:369,
  padding:'2%',
  borderRadius:15,
  backgroundColor:'black',
  marginBottom:'2%',
  overflow:'hidden',
  left:21
 

},
title:{
  fontSize:16,
  color:'white',
  left:128

},
body:{
  paddingHorizontal:'2%',
  paddingVertical:'3%',
},
titleContainer:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  height:30,
  
},
inner: {
  
  height:88,
  width:172,
  backgroundColor: "#3E3E3E",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 15,
  left: -4,
  top: 5,
},
box: {
  width: 172,
  height: 100,
  padding: 10,
  backgroundColor:'black',
  left:-10
  // shadowColor:'white',
  // shadowOpacity:1,
  // shadowRadius:5,
},
box1: {
  width: 172,
  height: 100,
  padding: 10,
  backgroundColor:'black',
  top:5,
  right:-20
  
  // shadowColor:'white',
  // shadowOpacity:1,
  // shadowRadius:5,
},

inner1: {
  
  height:88,
  width:172,
  backgroundColor: "#3E3E3E",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 15,
  left: -16,
  top: 1,
},

row: {
  flexDirection: "row",
},
input: {
  height: 40,
  margin: 12,
  borderWidth: 0,
  padding: 10,
  color:'white',


},
  });