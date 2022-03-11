import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import Question from "../../components/Question/Question";
import { ScoreContext } from "../../context/ScoreProvider";

function PlayScreen({ navigation }) {
  const { questionIndex, setQuestionIndex, questions, setQuestions } =
    useContext(ScoreContext);
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
        <Question question={questions[questionIndex]} handleNext={handleNext} />
      </View>
    );
  };
  const handleNext = () => {
    if (questionIndex == questions.length - 1) {
      navigation.navigate("Results");
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#853A9C" }}>
      <View style={{ margin: 20 }}>
        {page === true ? (
          <View>{renderQuestion()}</View>
        ) : (
          <View style={styles.containerLoading}>
            <ActivityIndicator size="large" color="#79E8BD" />
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
    backgroundColor: "#C44AE8",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 200,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
  },
  containerLoading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 400,
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
