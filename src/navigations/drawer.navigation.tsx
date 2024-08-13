import {createDrawerNavigator, DrawerNavigationProp} from '@react-navigation/drawer'
import {TabNavigation} from './tab.navigation'
import { ImageBackground, Text, TouchableOpacity, View, Image, Alert, KeyboardAvoidingView, } from "react-native";
type DrawerParamList = {
    Tab: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}
export function DrawerNavigation(){
   const Drawer = createDrawerNavigator<DrawerParamList>()
   const logo  = require('../../assets/carta.png')
return(
  <Drawer.Navigator screenOptions={{
   headerStyle: { backgroundColor:"purple"},
   headerTintColor:"white",
   drawerStyle:{
     backgroundColor:"blue",
   },
   drawerActiveTintColor:"white",
   drawerInactiveTintColor:"white"
  }}>
   <Drawer.Screen name="Tab" component={TabNavigation}
    options={{
       drawerLabel:'Home',
       headerTitle:'Home',
      
    }}
    />






  </Drawer.Navigator>


)

}