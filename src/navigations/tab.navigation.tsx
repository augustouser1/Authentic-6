import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { ScreenMensagem,ScreenHome } from '../screens';

import {FontAwesome6,AntDesign} from '@expo/vector-icons'
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
              <FontAwesome6 name="person" size={24} color="black" />

            ),
          }}
       />
        <Tab.Screen name="Mensagem" component={ScreenMensagem}
          options={{
            tabBarIcon: () => (
              <FontAwesome6 name="person" size={24} color="black" />
   
            ),
          }}
       />

      </Tab.Navigator>
    )



}