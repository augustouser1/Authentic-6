import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { ScreenMensagem,ScreenHome } from '../screens';
import { ImageBackground, Text, TouchableOpacity, View, Image, Alert, KeyboardAvoidingView, } from "react-native";
type TabParamList = {
   Home: undefined
   Mensagem: undefined
}
type  TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, "Home">
export type TabTypes = {
    navigation: TabScreenNavigationProp
}
export function TabNavigation (){
    const Tab = createBottomTabNavigator<TabParamList>()
    const person = require("../assets/girl.png")
    const balao = require("../assets/balaomensagem.png")
    return(
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor:"purple",
          tabBarActiveTintColor: "white",
          headerShown: false,
          tabBarInactiveBackgroundColor: "blue",
          tabBarInactiveTintColor:"white",
        }}
      >
        <Tab.Screen name="Home" component={ScreenHome}
          options={{
            tabBarIcon: () => (
                <Image source={person}>
               </Image>

            ),
          }}
       />
        <Tab.Screen name="Mensagem" component={ScreenMensagem}
          options={{
            tabBarIcon: () => (
                <Image source={balao}>
               </Image>

            ),
          }}
       />

      </Tab.Navigator>
    )



}