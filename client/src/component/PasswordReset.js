import React, { useEffect, useState } from 'react'
import '../style/passwordreset.css'
import resetimg from '../images/email.png'
import Aos from "aos";
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer'

const PasswordReset = () => {

    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    }, []);

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");

    const setVal = (e) => {
        // user ka email setemail me ajayega
        setEmail(e.target.value)
    }

    const sendLink = async (e) => {
        e.preventDefault();

        // call api to front end 
        const res = await fetch(`${process.env.REACT_APP_SERVER_HOST}/sendpasswordlink`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });
        const data = await res.json();

        if (data.status == 201) {
            setEmail("")
            setMessage(true)
        }
    }

    return (
        <>
            <section className='container Bottom'>
                <div className='Bottomimg' data-aos="fade-down-right" ><img src={resetimg} /></div>

                <div className='form_data' data-aos="fade-down-left" >
                    <div className='form_heading'><h1>Enter Your Email</h1> </div>
                    <div className='my-2' ><p style={{ textAlign: "center" }} >We are glad that your data have been be saved and <br /> Protected. We hope that you will get like it.</p></div>
                    {message ? <p style={{ color: "green", fontweight: "bold" }} >Passsword reset link send Successfully in Your Email</p> : " "}
                    <form>
                        <div className='form_input'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name="email" value={email} id='email' placeholder='Enter Your Email Address' onChange={setVal} /> </div>

                        <button className='btn' onClick={sendLink} >Login</button>
                        <p>Go to Home page?<Link to="/"> Home</Link></p>
                    </form>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default PasswordReset
