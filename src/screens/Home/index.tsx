import { ComponentButtonInterface } from "../../Components/";
import { ComponentBackgroundOne } from "../../Components/";
import { useAuth } from "../../hook/auth";
import { ComponentBackgroundTwo } from "../../Components/";
import { ImageBackground, Text, TouchableOpacity, View, Image, Alert, KeyboardAvoidingView, } from "react-native";
export function Home(){
      const {user, signOut} = useAuth()
     return(
       <ComponentBackgroundTwo>
        <View>

        </View>






       </ComponentBackgroundTwo>




     )

}