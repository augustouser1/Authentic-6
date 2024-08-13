import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
container:{
 flex:1,
 alignItems: "center",
 justifyContent:"center",

},

Text:{
color:'white',
fontSize: 40,
fontWeight:'bold',
padding:20,
},

Text2:{
    fontSize: 40,
    color:'white',
    fontWeight:'bold',
  
  },
  
  Text3:{
   fontSize: 40,
   color:'white',
   fontWeight:'bold',
  },

  Botao:{
    borderRadius: 10,
    backgroundColor:'#AD00FF', 
    margin:30,
    
},

Botao2:{
    borderRadius: 10,
    backgroundColor:'#8205CE', 
   
    
},

input:{
  fontSize: 18,
  padding:10,
  width: "70%"

},
row:{
  margin:10,
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 0.7,
  borderColor: "#0000",
  borderRadius: 10,
  backgroundColor:"white",
},


});