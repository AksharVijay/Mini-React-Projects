import React, { useRef, useState } from "react";
import styles from "./QuizApp.module.css";
import Quiz from "./Quiz";

const Quizz = () => {
  const [index, setIndex] = useState(0);
  const question = Quiz[index];
  const [lock, setLock] = useState(false);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);


  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  const optionArray = [option1, option2, option3, option4];

  const checkAnswers = (element, answer) => {
    if (lock === false) {
      if (answer === question.answer) {
        element.target.classList.add(styles.correct);
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        element.target.classList.add(styles.wrong);
        setLock(true);
        optionArray.forEach((opt) => {
          if(
            opt.current &&
            opt.current.innerText.trim().toLowerCase() ===
            question.answer.trim().toLowerCase()
          ){
            opt.current.classList.add(styles.correct)
          }
        })
      }
    }
  };

const next = () => {
  if(lock === true){
    if(index === Quiz.length -1){
      setResult(true);
      return 0;
    }
  }
  setIndex(prev => prev + 1);
  setLock(false);
  optionArray.map((opt) => {
    opt.current.classList.remove(styles.correct);
    opt.current.classList.remove(styles.wrong);
    return null;
  })
}


const reset = () => {
  setIndex(0);
  setResult(false);
  setLock(false);
}
  

  return (
    <>
      <div className={styles.Container}>
        <h1>Quiz App</h1>
        <hr />
        {
          result ? <></> : <>         <h2>
          {index + 1}. {question.question}
        </h2>
        <ul>
          <li
            ref={option1}
            onClick={(element) =>
              checkAnswers(element, question.answers.option1)
            }
          >
            {question.answers.option1}
          </li>
          <li
            ref={option2}
            onClick={(element) =>
              checkAnswers(element, question.answers.option2)
            }
          >
            {question.answers.option2}
          </li>
          <li
          ref={option3}
            onClick={(element) =>
              checkAnswers(element, question.answers.option3)
            }
          >
            {question.answers.option3}
          </li>
          <li
          ref={option4}
            onClick={(element) =>
              checkAnswers(element, question.answers.option4)
            }
          >
            {question.answers.option4}
          </li>
        </ul>
        <button onClick={next}>Next</button>
        <div className={styles.index}>
          {" "}
          {index + 1} out {Quiz.length} questions
        </div>
        
        </>
        }
        {
          result ? <> 
          
          <p> You scored {score}  out {Quiz.length}</p>
          <button onClick={reset}>Reset</button>
          </> : <></>
        }

      </div>
    </>
  );
};

export default Quizz;
