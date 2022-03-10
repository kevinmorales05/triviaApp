import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Animated, SafeAreaView } from "react-native";
import axios from "axios";
import Question from "../../components/Question/Question";
import {ScoreContext} from "../../context/ScoreProvider";

function PlayScreen({ navigation }) {
  const { questionIndex,setQuestionIndex, questions, setQuestions } = useContext(ScoreContext);
  //const [questions, setQuestions] = useState([]); //all the questions
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [page, setPage] = useState(false);
  const url =
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

  useEffect(() => {
      axios
      .get(url)
      .then(function (response) {
        setQuestions(response.data.results);
        setPage(true);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
    
    
  }, []);

  const renderQuestion = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textPage}>{questionIndex + 1}</Text>
          <Text style={styles.textTotal}>/ {questions.length}</Text>
        </View>
        <Question
          question={questions[questionIndex]}
          handleNext={handleNext}
        />
      </View>
    );
  };
  const handleNext = () => {
    if (questionIndex == questions.length - 1) {
      navigation.navigate("Results");
    } else {
      setQuestionIndex(questionIndex + 1);
    }
    Animated.timing(progress, {
      toValue: questionIndex + 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 20 }}>
        {page === true ? (
          <View>{renderQuestion()}</View>
        ) : (
          <View>
            {" "}
            <Text>Loading</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default PlayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: "200px",
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  textPage: {
    color: "black",
    fontSize: 20,
    opacity: 0.6,
    marginRight: 2,
  },
  textTotal: { color: "black", fontSize: 18, opacity: 0.6 },
});
