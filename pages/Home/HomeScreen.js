import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle} >Welcome to the Trivia Challenge</Text>
      <Text style={styles.text} >You will be presented with 10 True or False questions</Text>
      <Text style={styles.text} >Can you score 100%?</Text>
      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Play')}>
        <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>BEGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C44AE8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    width:'60%',
    textAlign:'center',
    margin:20,
    fontSize:20
  },
  textTitle:{
    width:'60%',
    textAlign:'center',
    marginTop:0,
    marginBottom:160,
    fontWeight: "bold",
    fontSize:25
  },
  btn:{
    width:'40%',
    backgroundColor:'#79E8BD',
    textAlign:'center',
    height:45,
    borderRadius:10,
    alignContent:'center',
    padding:10,
    borderColor:'black',
    borderWidth:2,
  }
});