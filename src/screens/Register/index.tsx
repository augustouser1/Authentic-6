import React, {useState} from "react";
import {KeyboardAvoidingView,ImageBackground, Text, TouchableOpacity, View, Image, Alert, TextInput} from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { ComponentBackgroundOne } from "../../Components/";
import {colors} from "../../styles/globalstyle";
import { LoginTypes } from "../../navigations/Login.navigation";
import { styles } from "./styles";
import { ComponentButtonInterface } from "../../Components";
import { useAuth } from '../../hook/auth';
import { AxiosError } from "axios";
import { apiUser } from "../../services/data";

export interface IRegister{
   name?: string
   email?: string
   password?: string
}

export function Register({navigation}: LoginTypes) {
    const image = require('../../assets/Autscreen.png')
    const carta = require('../../assets/carta.png')
    const cadeado = require('../../assets/cadeado.jpg')
    const pessoa = require('../../assets/personicon.png')
    const [data, setData] =useState<IRegister>();
    const {setLoading} = useAuth()
    async function handleRegister(){
      if(data?.email && data.name && data.password){
          setLoading(true)
          try{
              console.log(data)
              const response = await apiUser.register(data)
              Alert.alert(`${response.data.name} cadastrado!`)
              navigation.navigate("Login")
          }catch(error){
              const err = error as AxiosError
              console.log(err.response?.data)
              //const msg = err.response?.data as string
              //Alert.alert(msg)
          }
          setLoading(false)
      }else{
          Alert.alert("Preencha todos os campos")
      }
  }
    function handleGoBack(){
      navigation.navigate('Login')
    }
    function handleChange(item: IRegister){
      setData({ ...data, ... item});
    }
 return (
      <ComponentBackgroundOne>
        <KeyboardAvoidingView style={styles.container}>
          <Text style={styles.Text}>Cadastre-se</Text>
          <View style={styles.row}>
          <Image source={pessoa} >
          </Image>
            <TextInput
            placeholderTextColor={colors.primary}
            style={styles.input}
            placeholder="Nome"
            onChangeText={(i) => handleChange ({ name:i })}
            />
          </View>
          <View style={styles.row}>
          <Image source={carta} >
          </Image>
          <TextInput
            placeholderTextColor={colors.primary}
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(i) => handleChange ({ email:i })}
            />
          </View>
          <View style={styles.row}>
          <Image source={cadeado} >
          </Image>
           <TextInput
             placeholderTextColor={colors.primary}
             style={styles.input}
             placeholder="Senha"
             secureTextEntry={true}
             autoCapitalize="none"
             onChangeText={(i) => handleChange ({ password:i })}
          />
          </View>
          <ComponentButtonInterface title='Salvar' type='third' onPressI={handleRegister}/>
          <ComponentButtonInterface title='Voltar' type='primary' onPressI={handleGoBack}/>







        </KeyboardAvoidingView>
        </ComponentBackgroundOne>
 
 )

}