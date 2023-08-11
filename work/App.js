import React from "react";
import {Text,View} from "react-native";
import HomeScreen from "./proJect/home";
import Page2 from "./proJect/page2";
import Page3 from "./proJect/page3";
import Page4 from "./proJect/page4";
import Page5 from  "./proJect/page5";
import {createAppContainer,createSwitchNavigator} from "react-navigation";

export default class App extends React.Component{
  render(){
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  Page2:Page2,
  Page3:Page3,
  Page4:Page4,
  Page5:Page5,
  
})

const AppContainer = createAppContainer(AppNavigator)