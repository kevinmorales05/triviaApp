import React, {useContext} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {ScoreContext} from '../../context/ScoreProvider';

export default function Question({ question, handleNext}) {
  const {score, setScore} = useContext(ScoreContext);
const compareAnswer = (op) => {
  const answer = question.correct_answer;
  console.log("answer ", answer)
  if(answer === op){
    alert("The answer is correct!");
    setScore(score + 1);
    handleNext();
    return;
  }
  alert("Incorrect answer!");
  handleNext();
}

  return (
    <View >
      <Text style={{ textAlign: "center", fontSize: "1.4rem" }}>
        {question.category}
      </Text>
      <View
        style={{
          height: "fit-content",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          border: "2px solid black",
          padding: 25,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: "1.2rem" }}>
          {question.question}
        </Text>
      </View>

      <TouchableOpacity key={1} onPress={() => compareAnswer("True")}>True</TouchableOpacity>
      <TouchableOpacity key={0} onPress={() => compareAnswer("False")}>False</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      width:'60%',
      textAlign:'center',
      margin:20,
      fontSize:'1.4rem'
    },
    textTitle:{
      width:'60%',
      textAlign:'center',
      marginTop:0,
      marginBottom:160,
      fontWeight:'bolder',
      fontSize:'1.6rem'
    },
    btn:{
      width:'40%',
      backgroundColor:'gray',
      textAlign:'center',
      height:40,
      borderRadius:'10px',
      alignContent:'center',
      padding:10,
      
    }
  });