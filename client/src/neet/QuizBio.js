import React, { useState } from 'react'
import Questionb from './Questionb'
import '../style/quiz.css'

import { moveNextQuestion, movePrevQuestion } from '../hooks/bFetchQuestions'
import { PushAnswer } from '../hooks/setResult'

// redux store import
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Quiz = () => {

    // var [Qnumber, setQnumber] = useState()

    const [check, setChecked] = useState(undefined)

    const result = useSelector(state => state.result.result);
    const { trace, queue } = useSelector(state => state.questions);
    const dispatch = useDispatch()

    // next button event handler
    
    function onNext() {
        // console.log(queue.length)
        if (trace < queue.length) {
            // update the trace value by one using movenextaction
            dispatch(moveNextQuestion())
   
            // insert a new result
            if (result.length <= trace) {
                dispatch(PushAnswer(check))
            }
        }
        // reset the value of checked variable
        setChecked(undefined)
        // Qnumber = Qnumber+1 ;
    }

    function onPrev() {
        if (trace > 0) {
            // update the trace value by one using movenprevaction
            dispatch(movePrevQuestion())
        }
    }

    function onChecked(check) {
        // console.log(check)
        setChecked(check)
    }

    // finished exam  after the last question
    if (result.length && result.length >= queue.length) {
        return <Navigate to={'/bioresult'} replace={true}></Navigate>
    }

    return (
        <>
            <div className='container'>
                <div className='allquestion' >
                    <div className='questionpage'>
                    <Questionb onChecked={onChecked} /></div>
                    <div className='grid' >
                        <button className='btn prev' onClick={onPrev} >Prev</button>
                        <button className='btn next ' onClick={onNext} >Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz
