import React, { useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View, Image, Alert, KeyboardAvoidingView, } from "react-native";
import { ComponentButtonInterface } from "../../Components/";
import { ComponentBackgroundOne } from "../../Components/";
import { styles } from "./styles"
import { styleContainer } from "../../styles/globalstyle";
import { LoginTypes } from "../../navigations/Login.navigation";
import { TextInput } from "react-native-gesture-handler";
import { useAuth } from '../../hook/auth';
import { AxiosError } from "axios";


export interface IAuthenticate {
    email?: string;
    password?: string;
}

export function Login({ navigation }: LoginTypes) {
    const image = require('../../assets/Autscreen.png')
    const logo  = require('../../assets/image2.png')
    const carta = require('../../assets/carta.png')
    const cadeado = require('../../assets/cadeado.jpg')
     
    const [data, setData] = useState<IAuthenticate>(/*{} as IAuthenticate*/)
    const {signIn, setLoading} = useAuth()
    async function handleSignIn(){
      if (data?.email && data.password){
      setLoading(true)
      try{
          await signIn(data)
      } catch(error){
          const err = error as AxiosError
          const msg = err.response?.data as string
          Alert.alert(msg)
      }
      setLoading(false)
  } else {
      Alert.alert("Preencha todos os campos!!!");
  }
}

function handleRegister(){
  navigation.navigate("Register")
}
function handleChange(item: IAuthenticate){
  setData({...data, ...item});
}
    


    return (
        <ComponentBackgroundOne>
         <KeyboardAvoidingView style={styles.Container}>
            <Text style={styles.title}>Bem-vindo ao Ourspace</Text>
            <Image source={logo} style={styles.logo}>
               </Image>
            <View style={styles.row}>
            <Image source={carta} >
            </Image>
                <TextInput
                     placeholderTextColor={'#000000'}
                     style={styles.input}
                     placeholder="Email"
                     keyboardType ="email-address"
                     autoCapitalize="none"
                     onChangeText={(i) => handleChange({email: i})}
                />
            </View>
            <View style={styles.row}>
            <Image source={cadeado} >
            </Image>
               <TextInput 
                 placeholderTextColor={'#000000'}
                 style={styles.input}
                 placeholder="Senha"
                 secureTextEntry={true}
                 autoCapitalize="none"
                 onChangeText={(i) => handleChange({password: i})}
               />
               </View>
             <ComponentButtonInterface title='Entrar' type='primary' onPressI={handleSignIn} />
             <ComponentButtonInterface title='Cadastre-se' type='secondary' onPressI={handleRegister} />
           </KeyboardAvoidingView>
           </ComponentBackgroundOne>





    );


}