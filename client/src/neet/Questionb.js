import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../style/question.css'
// custom hook
import { useFetchQuestion } from '../hooks/bFetchQuestions'
import { updateResult } from '../hooks/setResult'


export default function Question({ onChecked }) {

    const [checked, setChecked] = useState(undefined)
    const { trace, queue } = useSelector(state => state.questions)
    const result = useSelector(state => state.result.result)
    const [{ isLoading, serverError }] = useFetchQuestion()

    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(questions)
        dispatch(updateResult({ trace, checked }))
    }, [checked])

    function onSelect(i) {
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ trace, checked }))
    }

    if (isLoading) return <h3 className='text-dark'>isLoading..</h3>
    if (serverError) return <h3 className='text-dark'>{serverError || "Unknow Error"}</h3>

    return (
        <>
            <div className='subjectName text-center '>
                <span>Biology</span>
            </div>

            <div className='number' >
                <div> <span>Question No: {trace + 1} </span></div>
                <div> <span>Total Question: {queue.length} </span> </div>
            </div>

            <div className='questions'>
                <div>
                    <h4 className='text-dark mb-4 '>{questions?.question}</h4>
                    <ul key={questions?.id}>
                        {
                            questions?.options.map((q, i) => (
                                <li key={i}>
                                    <input
                                        type="radio"
                                        value={false}
                                        name="options"
                                        id={`q${i}-option`}
                                        onChange={() => onSelect(i)} // change value click on radio button according id 
                                    />
                                    <label className='text' htmlFor={`q${i}-option`}>{q}</label>
                                    <div className={`check ${result[trace] === i ? "checked" : ""}`}></div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
