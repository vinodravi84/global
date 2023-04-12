import React, { useState } from 'react'
import questions from "./DataBase/data"
import "./Start.css"

function Start(){

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);


  const optionClicked = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option;
    setSelectedOptions(updatedOptions);

    if (option.isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } 
  };

  const submitClicked = () => {
    setFinalResults(true);
  };

  //restartQuiz
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
    setSelectedOptions([]);
  };


  return (
    <div>
        <div className=' bg-black'>
            <div className='container '>
         {/* <h1 className='title text-light '>Quiz Application</h1> */}
         {/* <h1 class="title text-light border-4 border-yellow-500 border-opacity-75 motion-safe:animate-pulse">Quiz Application</h1> */}
         <h1 class="title text-light bg-gray-900 animate-pulse duration-3">Quiz Application</h1>



            
      {showFinalResults ? (
        <div className="final-results">
          <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" width="80px" height="80px" alt="img2" />
          <h2> You have successfully submitted the assignment </h2>
          <p> <b>Question asked :</b> {questions.length}</p>
          <p> <b>Question correct :</b> {score}</p>
          <p> <b>Your Score : </b>{(score / questions.length).toFixed(2) * 100} %</p>
          <button onClick={() => restartGame()}> Restart Quiz </button>
        </div>
      ) : (


        // Main Page section


        <div className="row p-3">


          {/* Review Answer Section - Left Side of Screen */}

          <div className="col-sm-6 review-card p-3  ">
            <img src="https://cdn-icons-png.flaticon.com/512/9792/9792969.png" width="80px" height="80px" alt="img" />
            <h2 className="p-4 text-white">Review Answer</h2>
            <div className="card text-dark p-3">
              {selectedOptions.map((option) => (
                <h3 key={option.id}>{option.text}</h3>
              ))}
            </div>

          </div>

          {/* Quiz section - Qestion with Answer and Prev, Next  and submit button */}

          <div className="col-md-6 question-card p-3">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <div className="button-section text-right mb-3">

                {/* Previous Button  */}
                {currentQuestion > 0 && (
                  <button
                    className="btn prev"
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  >
                    Prev
                  </button>
                )}

                {/* Next Button  */}
                {currentQuestion < questions.length - 1 && (
                  <button
                    className="btn next"
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>

            {/* <div container>

  <h3> Question :  {currentQuestion + 1} out of {questions.length} </h3>
  <h4 className="question-text p-3 ">
    Q. {currentQuestion + 1}. {questions[currentQuestion].text}
  </h4>
  <ul>
    <div className="justify-content-md-end namru flex flex-col ">
      {questions[currentQuestion].options.map((option) => {
        return (
          <li 
            className='bg-gray-200 text-gray-700 py-2 px-4 rounded-lg my-2 mr-2 hover:bg-gray-300 focus:bg-gray-300 cursor-pointer'
            style={{ minWidth: '200px' }}
            type='radio'
            onClick={() => optionClicked(option)}
            key={option.id}
          >
            {option.text}
          </li>
        );
      })}
    </div> */}

    <div container className='bg-green-400 text-white  rounded-lg'>
  {/* Quiz Section Qestion and Option */}
  <h3 className='text-black'> Question :  {currentQuestion + 1} out of {questions.length} </h3>
  <h4 className="question-text p-3  ">
    Q. {currentQuestion + 1}. {questions[currentQuestion].text}
  </h4>
  <ul>
    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-800  ease-in-out">
      {questions[currentQuestion].options.map((option) => {
        return (
          <li 
            className='bg-gray-200 text-gray-700 py-2 px-4 rounded-lg my-2 mr-2 hover:bg-yellow-300 focus:bg-gray-300 cursor-pointer text-center text-black'
            style={{ minWidth: '200px' }}
            type='radio'
            onClick={() => optionClicked(option)}
            key={option.id}
          >
            {option.text}
          </li>
        );
      })}
    </div>



            </ul>
            </div>

            {/* Submit Button */}
            {currentQuestion === questions.length - 1 && (
              <button
                className="ms-md-4 d-flex text-light btn btn next"
                onClick={() => submitClicked()}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      )}
    </div>
 


         </div>
         </div>
    // </div>
  )
}

export default Start;









