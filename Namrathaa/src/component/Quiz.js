import React, { useRef } from "react"
import { Link } from 'react-router-dom'
import "./styles/main.css"


// import "./Quiz.css"


const Contact = () => {

  const inputRef = useRef(null)


  return (
    <div className="bg-black ">
     <div className='container items-center justify-center  '>
        <h1 className='title text-light '>Quiz Application</h1>

         <ol className="inline-block px-25 pt-10 text-white">
            <li><span className="color">1</span>.You will be asked 10 questions one after another.</li>
            <li><span className="color">2</span>. 10 points is awarded for the correct answer.</li>
            <li><span className="color">3</span>. Each question has three options. You can choose only one options.</li>
            <li><span className="color">4</span>. You can review and change answers before the quiz finish.</li>
            <li><span className="color">5</span>. The result will be declared at the end of the quiz.</li>
        </ol> 

        {/* <div class="info_box">
        <div class="info-title"><span>Some rules of this Quiz</span></div>
        <div class="info-list">
        <div class="info">
          1. You will have only <span>15 seconds</span> per each question.</div>
        <div class="info">
          2. Once you select your answer, it can't be undone.</div>
        <div class="info">
          3.You can't select any optiononce time goes off.</div>
        <div class="info">
          4.You can't exit from the Quiz while you're attending.</div>
        <div class="info">
          5.You'll get points on the basis of your correct answers.</div>
      </div>
      </div> */}


        <form id="form">
            <input ref={inputRef} className="userid " type="text" placeholder='Username*' />
        </form>


        <div className="flex items-center w-full">
        <button className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg
            text-lg font-semibold text-black"><Link className='button' to={'start'} >Start Quiz</Link></button>
        </div>

        
        </div>
    </div>
  )
}
export default Contact
