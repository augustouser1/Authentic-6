import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { LoginNavigation } from './Login.navigation';
import { useAuth } from '../hook/auth';
import {DrawerNavigation} from './drawer.navigation'
import { ComponentLoading } from '../Components';

export default function Navigation(){
    const {user, loading} = useAuth()
    if(loading){
        return <ComponentLoading/>
    }
   return (
       <NavigationContainer>
        {user?.token ? <DrawerNavigation /> : <LoginNavigation/>}
       </NavigationContainer>
   );

}
