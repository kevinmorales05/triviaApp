import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { ScoreContext } from "../../context/ScoreProvider";

function ResultsScreen({ navigation }) {
  const { score, setScore, setQuestionIndex, setQuestions } = useContext(ScoreContext);
  const startGame = () => {
    setScore(0);
    setQuestionIndex(0);
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textTitle}>Results</Text>
        <Text style={styles.text}>{score}/10</Text>
        <TouchableOpacity style={styles.btn} onPress={startGame}>
          <Text>Start Again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    margin: 20,
    fontSize: "1.4rem",
  },
  textTitle: {
    textAlign: "center",
    marginTop: 0,
    marginBottom: 60,
    fontWeight: "bolder",
    fontSize: "1.5rem",
  },
  btn: {
    backgroundColor: "gray",
    textAlign: "center",
    height: 40,
    borderRadius: "10px",
    alignContent: "center",
    padding: 10,
  },
});
