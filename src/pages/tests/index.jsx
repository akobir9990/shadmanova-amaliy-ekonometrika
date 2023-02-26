import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import { questions } from "./quiz";
import "./style.css";
import { Box } from "@mui/material";

function Quiz() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerId, setAnswerId] = useState();
  const [isAnswered, setIsAnswered] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [complatedAnswerIds, setComplatedAnswersIds] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);
  const [scorePercent, setScorePercent] = useState(0);

  const quizLimite = 20;

  const checkAnswer = (item) => {
    setIsAnswered(true);
    setAnswerId(item.id);
    if (item.isCorrect) {
      setScore((score) => score + 1);
    }
  };
  const tryAgain = () => {
    setShowScore(false);
    setScore(0);
    setIsAnswered(false);
    randomQuestion();
    setCurrentQuestion((currentQuestion) => 0);
  };

  const nextQeustion = () => {
    if (!isAnswered) {
      alert("siz savolga javob bermadingiz iltimos javob bering");
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsAnswered(!isAnswered);
    }
    randomQuestion();
  };

  const getResult = () => {
    setShowScore(!showScore);
    setComplatedAnswersIds([]);

    setScorePercent(Math.floor((score / quizLimite) * 100));
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * questions.length);
  };

  const randomQuestion = () => {
    const randomNum = getRandomNumber();

    if (!complatedAnswerIds.includes(randomNum)) {
      setComplatedAnswersIds((p) => [...p, randomNum]);
      setRandomNumber(randomNum);
    } else {
      randomQuestion();
    }
  };

  useEffect(() => {
    setRandomNumber(getRandomNumber());
  }, []);

  // console.log("scorePercent => ", scorePercent, typeof scorePercent);

  return (
    <div className="h-[100vh]">
      {showScore ? (
        <div>
          <h1 className="text-[28px]">Test yakunlandi</h1>
          <p className="text-[20px]">
            To'g'ri javoblar soni: {score} <br />
            Umumiy savollar soni: {quizLimite} <br />
          </p>
          <Button variant="contained" onClick={tryAgain}>
            qayta topshirish
          </Button>
          <div className="relative border-[solid] border-[1px] border-[grey] rounded-lg w-[400px] my-3 h-9 flex items-center overflow-hidden">
            <div
              style={{ width: `${scorePercent}%` }}
              className={
                "relative h-9 bg-green-500 flex items-center justify-center text-slate-50 font-bold"
              }
            >
              {scorePercent}%
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3>
            Savol - {currentQuestion + 1}/{quizLimite}
          </h3>
          <h1 className="text-4xl font-bold py-2">
            {questions[randomNumber].questionText}
          </h1>
          <div>
            {questions[randomNumber].answerOptions.map((item) => (
              <div
                key={item.id}
                className={
                  "answerItem " +
                  (isAnswered && answerId === item.id
                    ? item.isCorrect
                      ? " "
                      : "wrongAnswer "
                    : "") +
                  (isAnswered ? "disable " : "") +
                  (isAnswered && item.isCorrect ? "currectAnswer " : "")
                }
                onClick={() => checkAnswer(item)}
              >
                {item.answerText}
              </div>
            ))}
          </div>
          <Box className="sm:flex-row sm:my-3 flex flex-col justify-between">
            <Button
              disabled={currentQuestion === quizLimite - 1}
              variant="outlined"
              onClick={nextQeustion}
              className="py-4"
              sx={{
                margin: "5px 0px",
              }}
            >
              next
            </Button>
            <Button
              variant="contained"
              onClick={tryAgain}
              className="my-4 border-[solid] border-[1px] border-[red] "
              sx={{
                margin: "5px 0px",
              }}
            >
              qayta topshirish
            </Button>
            <Button
              variant="contained"
              onClick={getResult}
              sx={{
                margin: "5px 0px",
              }}
            >
              ShowScore
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Quiz;
