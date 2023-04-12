import React from 'react'
import "./styles/Result.css";
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';

const Result = () => {


  function onRestart(){
    console.log('on Restart')
  }
  return (

    <div className='bg-gray-800'>
      <div className='container '>
        <h1 className='title text-light gap-y-0.5 '>Quiz Application</h1>

        <div className='result pt-10 flex-center '>
          <div className='flex'>
            <span>Username</span>
            <span className='bold'>Namrathaa</span>
          </div>

          <div className='flex'>
            <span>Total Quiz Points :</span>
            <span className='bold'>8</span>
          </div>

          <div className='flex'>
            <span>Total Questions :</span>
            <span className='bold'>5</span>
          </div>

          <div className='flex'>
            <span>Total Attempts :</span>
            <span className='bold'>3</span>
          </div>

          <div className='flex'>
            <span>Total Earn Points :</span>
            <span className='bold'>30</span>
          </div>

          <div className='flex'>
            <span>Quiz Result :</span>
            <span className='bold'>Passed</span>
          </div>
          
        </div>

        <div className='start pb-20'>
        <Link className='btn' to={'/quiz'} onClick={onRestart}>Restart</Link>
      </div>

      <div className='container'>
        <ResultTable />
      </div>

      </div>

    </div>
  )
}

export default Result