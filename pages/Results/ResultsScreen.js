import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { ScoreContext } from "../../context/ScoreProvider";
import { AntDesign } from "@expo/vector-icons";

function ResultsScreen({ navigation }) {
  const { score, setScore, setQuestionIndex, answeredQuestions } =
    useContext(ScoreContext);

  const startGame = () => {
    setScore(0);
    setQuestionIndex(0);
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>Results</Text>
      <Text style={styles.text}>{score}/10</Text>
      <SafeAreaView>
        <ScrollView style={styles.scrollContainer}>
          {answeredQuestions.map((answer) => {
            return (
              <View style={styles.questionBlock}>
                {answer.result === true ? (
                  <>
                    <AntDesign name="checkcircle" size={30} color="#E8C061" />
                  </>
                ) : (
                  <>
                    <AntDesign name="closecircle" size={30} color="red" />
                  </>
                )}
                <Text
                  style={{
                    textAlign: "center",
                    width: "80%",
                    color: "white",
                    paddingLeft: 5,
                  }}
                >
                  {answer.questionResolved}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>

      <TouchableOpacity style={styles.btn} onPress={startGame}>
        <Text style={{ color: "white", fontWeight: "bold" }}>PLAY AGAIN?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C44AE8",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  scrollContainer: {
    height: 480,
    margin: 10,
    padding: 5,
    backgroundColor: "#C44AE8",
  },
  questionBlock: {
    display: "flex",
    flexDirection: "row",
    height: "fit-content",
    margin: 10,
    padding: 5,
    borderRadius: 8,
    backgroundColor: "#853A9C",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    textAlign: "center",
    margin: 20,
    fontSize: 12,
  },
  textTitle: {
    textAlign: "center",
    marginTop: 0,
    marginBottom: 60,
    fontWeight: "bold",
    fontSize: 15,
  },
  btn: {
    width: "40%",
    backgroundColor: "#79E8BD",
    textAlign: "center",
    height: 40,
    borderRadius: 10,
    alignContent: "center",
    padding: 10,
    borderColor: "black",
    borderWidth: 2,
  },
});
