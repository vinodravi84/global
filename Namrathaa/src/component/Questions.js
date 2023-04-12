import React, { useEffect, useState } from 'react'
// import "./styles/main.css"
import data from "./DataBase/data"
// import dummy_data from './DataBase/data'
import { useSelector } from 'react-redux'
import "./Question.css"


// custom hook
import { useFetchQuestions } from '../hooks/FetchQuestion'

const Questions = () => {

    const[checked, setChecked] = useState(undefined)
    const [{isLoading  , apiData , serverError},] = useFetchQuestions()
    const question = data[0]


    
    // const questions = useSelector(state => state.questions)
    const questions = useSelector(state => state.questions.queue)



    useEffect(() => {
      console.log(questions)
    })


 
    function onSelect(){
        // console.log("radio button change")
    }

    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error" }</h3>



  return (
    <div className='questions grid'>
    {/* <div className='questions grid grid-rows-4  h-auto'> */}
        <h2 className='text-light'>{question.question}</h2>
       
        <ul key={question.id}>
        {/* in q we have all options and in i index value */}
            {
                question.options.map((q, i) => (
                <li key={i}>
                    <input 
                    type='radio'
                    value = {false}
                     name='options' 
                     id={`q${i}-option`}
                     onChange={onSelect()} 

                     />

                    <label  classname="text-primary" htmlFor={`q${i}-option`}>{q}</label>
                    <div className='check '></div>
               </li>
                ))
            }
        </ul>
    </div>
 
  )
}

export default Questions;