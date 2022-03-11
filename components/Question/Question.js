import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ScoreContext } from "../../context/ScoreProvider";

export default function Question({ question, handleNext }) {
  const { score, setScore, answeredQuestions, setAnsweredQuestions } = useContext(ScoreContext);
  const compareAnswer = (op) => {
    const answer = question.correct_answer;
    if (answer === op) {
      setScore(score + 1);
      setAnsweredQuestions([...answeredQuestions ,{
        questionResolved: question.question,
        result: true
      }])
      handleNext();
      return;
    }
    setAnsweredQuestions([...answeredQuestions ,{
      questionResolved: question.question,
      result: false
    }])
    handleNext();
  };

  return (
    <View>
      <Text style={styles.textTitle}>{question.category}</Text>
      <View style={styles.questionBox}>
        <Text style={styles.textQuestion}>{question.question}</Text>
      </View>
      <View style={styles.btnBox}>
        <TouchableOpacity style={styles.btn} key={1} onPress={() => compareAnswer("True")}>
          <Text>True </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} key={0} onPress={() => compareAnswer("False")}>
          <Text>False </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 15,
  },
  questionBox: {
    height: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    borderWidth:2,
    borderColor:'black',
    padding: 25,
    margin: 40,
  },
  textQuestion: { textAlign: "center", fontSize: 12 },
  btnBox:{
    display:'flex', flexDirection:'row', justifyContent:'center',
  },
  btn: {
    width: "30%",
    backgroundColor: "#79E8BD",
    textAlign: "center",
    height: 40,
    borderRadius: 10,
    alignContent: "center",
    padding: 10,
    margin:5,
    borderColor:'black',
    borderWidth:2,
  },
});
