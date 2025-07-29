import React, { useRef, useState } from "react";
import styles from "./QuizApp.module.css";
import quiz from "./Quiz.js";

const QuizApp = () => {
  const [index, setIndex] = useState(0);
  const question = quiz[index];
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let optionArray = [option1, option2, option3, option4];

  const checkAnswers = (e, answer) => {
    if (lock === false) {
      if (answer === question.answer) {
        e.target.classList.add(styles.correct);
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add(styles.wrong);
        setLock(true);
        optionArray.forEach((opt) => {
          if (
            opt.current &&
            opt.current.innerText.trim().toLowerCase() ===
              question.answer.trim().toLowerCase()
          ) {
            opt.current.classList.add(styles.correct);
          }
        });
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === quiz.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex((prev) => prev + 1);
      setLock(false);
      optionArray.map((opt) => {
        opt.current.classList.remove(styles.wrong);
        opt.current.classList.remove(styles.correct);
        return null;
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
  };
  return (
    <>
      <div className={styles.Container}>
        <h1>Quiz App</h1>
        <hr />
        {result ? (
          <></>
        ) : (
          <>
            <h2>
              {index + 1}. {question.question}
            </h2>
            <ul>
              <li
                ref={option1}
                onClick={(e) => checkAnswers(e, question.answers.option1)}
              >
                {question.answers.option1}
              </li>
              <li
                ref={option2}
                onClick={(e) => checkAnswers(e, question.answers.option2)}
              >
                {question.answers.option2}
              </li>
              <li
                ref={option3}
                onClick={(e) => checkAnswers(e, question.answers.option3)}
              >
                {question.answers.option3}
              </li>
              <li
                ref={option4}
                onClick={(e) => checkAnswers(e, question.answers.option4)}
              >
                {question.answers.option4}
              </li>
            </ul>
            <button onClick={next}> Next</button>
            <div className={styles.index}>
              {" "}
              {index + 1} of {quiz.length} Questions
            </div>
          </>
        )}

        {result ? (
          <>
            <h2>
              {" "}
              You {score} scored out of {quiz.length} questions
            </h2>

            <button onClick={reset}>Reset</button>
          </>
        ) : (
          <> </>
        )}
      </div>
    </>
  );
};

export default QuizApp;
