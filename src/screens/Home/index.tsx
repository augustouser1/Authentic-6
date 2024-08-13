import { ComponentButtonInterface } from "../../Components/";
import { ComponentBackgroundOne } from "../../Components/";
import { useAuth } from "../../hook/auth";
import { ComponentBackgroundTwo } from "../../Components/";
import {View} from "react-native";
export function Home(){
      const {user, signOut} = useAuth()
     return(
       <ComponentBackgroundTwo>
        <View>

        </View>





      <ComponentButtonInterface title="Sair" type="primary"
         onPressI={async() => await signOut}
         />
       </ComponentBackgroundTwo>
       



     )

}