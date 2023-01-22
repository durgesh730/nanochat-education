import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../style/result.css'
import NeetNav from './NeetNav'
import Footer from '../component/Footer'

// imoprt actions
import { resetALLAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'
import { attempts_Number, earnPoints_Number} from '../helper/helper'
import { usePublishResultPhy } from '../hooks/setResult'

export default function Result() {

    const dispatch = useDispatch()
    const { questions: { queue, answers }, result: { result} } = useSelector(state => state)

    const totalMarks = queue.length * 4;
    const attempts = attempts_Number(result)
    const ObtainedMarks = earnPoints_Number(result, answers, 4)
    const CorrectQuestions = earnPoints_Number(result, answers, 1)

    usePublishResultPhy({
        result,
        attempts,
        points:  ObtainedMarks,
    })

    function onRestart() {
        dispatch(resetALLAction())
        dispatch(resetResultAction())
    }

    return (
        <>
            <NeetNav />
            <div className='container'>
                <div className='result flex-center'>
                    <div className='text-center' >
                        <h3 className='title text-dark'>Your Result</h3></div>

                    <div className='flex' >
                        <span>Total Questions :</span>
                        <span className='bold'>{queue.length || 0}</span>
                    </div>

                    <div className='flex' >
                        <span>Total Marks:</span>
                        <span className='bold'>{totalMarks || 0}</span>
                    </div>

                    <div className='flex' >
                        <span>Total Attempt Questions :</span>
                        <span className='bold'>{attempts || 0}</span>
                    </div>

                    <div className='flex' >
                        <span>Obtained Marks :</span>
                        <span className='bold'>{ObtainedMarks || 0} </span>
                    </div>
               
                <div className='flex' >
                        <span>Total Correct Questions :</span>
                        <span className='bold'>{CorrectQuestions || 0} </span>
                    </div>
                </div>

                <div className='start'>
                    <Link to={'/neet'} className="mx-4" onClick={onRestart} >Restart</Link>
                    <Link to={'/'} className="mx-4" onClick={onRestart} >Home</Link>
                </div>

            </div>

            <Footer />
        </>
    )
}
