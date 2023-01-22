import React, { useEffect } from 'react'
import Intro from "../images/IMG_1364.JPG"
import '../style/myself.css'
import Aos from "aos";
import 'aos/dist/aos.css';

function Myself() {

    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    }, []);

    return (
        <>
            <div className=' intro ' >
                <div className='container'>
                    <div className='myself' data-aos="fade-up">
                        <div className='self' >
                            <div className='text-center' >
                                <img src={Intro} ></img></div>
                            <p>
                                <h3>Something About me</h3>
                                I'm Durgesh Chaudhary, a software engineering student.
                                This Youtube Channel, Nano chat has been created by me for helping
                                medical Students i.e NEET, AIIMS and others. My Goal is to provide
                                best knowledge to student related queries.<br/><br/>
                                <a className='Channel' href='https://www.youtube.com/@nanochat' >Our Channel</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Myself
