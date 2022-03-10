import React, {useContext} from "react";
import { ScoreContext } from "../context/ScoreProvider";
const { setQuestions } = useContext(ScoreContext);

const getQuestions = () => {
    axios
      .get(url)
      .then(function (response) {
        setQuestions(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
}
export default getQuestions;