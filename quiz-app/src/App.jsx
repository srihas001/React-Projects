import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  Questionlist from './components/Questionlist'
import './App.css'

function App() {
  let questions = [
    {
      question: "What is React.js?",
      options: ["Open-source JavaScript back-end library", "JavaScript front-end library to create a database", "Free and open-source JavaScript front-end library", "None of the mentioned"],
      answer:"Free and open-source JavaScript front-end library"
    },
      {
      question: " What is JSX in React?",
      options: ["JavaScript Execution","JavaScript XML","JavaScript Extra","None of the mentioned"],
      answer:"JavaScript XML"
    },
      {
      question: " React.js is primarily used for which of the following?",
      options: ["Backend Development","Database Management","Frontend Development","Mobile App Development"],
      answer:"Frontend Development"
    },
      {
      question: " Which of the following acts as the input of a class-based component?",
      options: ["Class","Props","Factory","None of the mentioned"],
      answer:"Props"
    },
      {
      question: "What is the main purpose of JSX in React?",
      options: ["Database Query Language","JavaScript Function","CSS Styling","HTML-like syntax"],
      answer:"HTML-like syntax"
    }
  ]
  const [currentstateIndex, setcurrentstateIndex] = useState(0)
  const [currentanswer, setcurrentanswer] = useState(null)
  const [score, setscore] = useState(0)
  const [showAnswers, setShowAnswers] = useState(false)
  const handleClick=(optio)=>{
    setcurrentanswer(optio);
    if (currentanswer === null && optio === questions[currentstateIndex].answer) {
    setscore(score + 1);
  }
};
const handleAnswers=()=>{
  setShowAnswers(true);

}
  return (
    <>
    
     {currentstateIndex<questions.length ?  <div>
        <Questionlist question={questions[currentstateIndex].question} option={questions[currentstateIndex].options} answer={questions[currentstateIndex].answer} handleClick={handleClick} currentanswer={currentanswer}/>
        <div className="button">
        <button disabled={currentanswer===null} className={currentanswer===null ? 'currentans':''} onClick={()=>{setcurrentstateIndex(currentstateIndex + 1); setcurrentanswer(null); }}>next question</button>
        </div>
        </div> :<><div className='score'>Your score is {score}/{questions.length}
          <button onClick={()=>{handleAnswers()}} className='key'>Show Key</button></div> 
      {showAnswers && (
  <div className="answer-list">
    <h2>Answer Key:</h2>
    <ul>
      {questions.map((q, index) => (
        <li key={index}>
          Q{index + 1}: {q.question}
          <br />
          Answer: <span style={{ color: "green" }}>{q.answer}</span>
        </li>
      ))}
    </ul>
  </div>
)}
  </>
 }
       
      

    </>
  )
}

export default App
