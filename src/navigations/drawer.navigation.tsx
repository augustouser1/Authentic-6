import {createDrawerNavigator, DrawerNavigationProp} from '@react-navigation/drawer'
import {TabNavigation} from './tab.navigation'
import {FontAwesome6,AntDesign} from '@expo/vector-icons'
type DrawerParamList = {
    Tab: undefined
}
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation: DrawerScreenNavigationProp
}
export function DrawerNavigation(){
   const Drawer = createDrawerNavigator<DrawerParamList>()
   
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
       drawerIcon: () => (
        <FontAwesome6 name="person" size={24} color="black" />

      ),
    }}
    />


  </Drawer.Navigator>


)

}