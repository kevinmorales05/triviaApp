import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {ScoreContext} from '../../context/ScoreProvider';
function ResultsScreen() {
    const {score} = useContext(ScoreContext);
    return (
        <View>
            <Text>Results</Text>
            <Text>{score}/10</Text>
        </View>
    )
}

export default ResultsScreen
