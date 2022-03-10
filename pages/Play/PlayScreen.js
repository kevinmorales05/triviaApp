import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import axios from "axios";
import Question from "../../components/Question/Question";

function PlayScreen({ navigation }) {
  const [questions, setQuestions] = useState([]); //all the questions
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [page, setPage] = useState(false);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
      .then(function (response) {
        console.log(response.data.results);
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
      <View
        style={{
          marginVertical: 40,
        }}
      >
        {/* Question Counter */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 20,
              opacity: 0.6,
              marginRight: 2,
            }}
          >
            {currentQuestionIndex + 1}
          </Text>
          <Text style={{ color: "black", fontSize: 18, opacity: 0.6 }}>
            / {questions.length}
          </Text>
        </View>
        <Question
          question={questions[currentQuestionIndex]}
          handleNext={handleNext}
        />
      </View>
    );
  };
  const handleNext = () => {
    if (currentQuestionIndex == questions.length - 1) {
      // Last Question
      navigation.navigate("Results");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
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
  );
}

export default PlayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: "60%",
    textAlign: "center",
    margin: 20,
    fontSize: "1.4rem",
  },
  textTitle: {
    width: "60%",
    textAlign: "center",
    marginTop: 0,
    marginBottom: 160,
    fontWeight: "bolder",
    fontSize: "1.6rem",
  },
  btn: {
    width: "40%",
    backgroundColor: "gray",
    textAlign: "center",
    height: 40,
    borderRadius: "10px",
    alignContent: "center",
    padding: 10,
  },
});
