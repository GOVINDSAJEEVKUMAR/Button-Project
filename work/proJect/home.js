import React from 'react'
import {Text,View,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native'

export default class HomeScreen extends React.Component{
   goToNextScreen = ()=>{
    this.props.navigation.navigate('Page2')
  }
  render(){
    return(

      <View>
      <ImageBackground  source={require("./In.jpg")} style={styles.img}>
      <TouchableOpacity style={styles.button}
      onPress= {()=>{this.goToNextScreen()}}>
      <Text>One</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bun}
      onPress= {()=>{this.props.navigation.navigate('Page3')}}>
      <Text>Two</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.drop}
      onPress= {()=>{this.props.navigation.navigate('Page4')}}>
      <Text>Three</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.mark}
      onPress= {()=>{this.props.navigation.navigate('Page5')}}>
      <Text>Four</Text>
      </TouchableOpacity>
</ImageBackground>
      </View>
    )
}
}
const styles = StyleSheet.create({
   
   button:{
     backgroundColor:'lightblue',
     marginTop:230,
     marginLeft:30,
     width:130,
     height:80,
     alignItems:'center',
     justifyContent:'center'
     
   },

   bun:{
     backgroundColor:'lightgoldenrodyellow',
     marginTop:30,
     marginLeft:180,
     width:130,
     height:80,
     alignItems:'center',
     justifyContent:'center'
     
   },
   drop:{
     backgroundColor:'lightpink',
     marginTop:30,
     marginLeft:30,
     width:130,
     height:80,
     alignItems:'center',
     justifyContent:'center'
     
   },
   mark:{
     backgroundColor:'linen',
     marginTop:30,
     marginLeft:180,
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
