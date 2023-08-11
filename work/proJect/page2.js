import React from 'react'
import {Text,ImageBackground,TouchableOpacity,View,StyleSheet} from 'react-native'


export default class Address extends React.Component

{
  goToNextScreen = ()=>{
    this.props.navigation.navigate('HomeScreen')
  }
  render(){
    return(
      <View>
      <ImageBackground  source={require("./p2.jpg")} style={styles.img}>
      <TouchableOpacity style={styles.button}
       onPress= {()=>{this.goToNextScreen()}}>
      <Text>BACK</Text>
      </TouchableOpacity>
      </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
   
   button:{
     backgroundColor:'lightgray',
     marginTop:530,
     marginLeft:100,
     width:130,
     height:80,
     alignItems:'center',
     justifyContent:'center'
     
   },
    img:{
 alignSelf:'stretch',
 width: 360,
 height: 800,
}
   
})