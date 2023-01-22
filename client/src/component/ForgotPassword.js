import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './Navbar';


function ForgotPassword() {

  const { id, token } = useParams();
  const history = useNavigate();

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const userValid = async () => {
    const res = await fetch(`/forgotpassword/${id}/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json()

    if (data.status === 201) {
      // console.log("user valid")
      console.log("")
    } else {
      // if user is not valid the go to error page
      history("/")
    }
  }


  const setval = (e) => {
    setPassword(e.target.value)
  }

  const sendpassword = async (e) => {
    e.preventDefault();

    if (password === '') {
      toast("Enter Your Password", {
        autoClose: 1500,
      })
    } else if (password.length < 6) {
      toast("Password must be 6 characters", {
        autoClose: 2000,
      })
    } else {
      const res = await fetch(`/${id}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ password })
      });

      const data = await res.json()

      if (data.status === 201) {
        setPassword("")
        setMessage(true)
      } else {
        toast("Token expried Generate New Link", {
          autoClose: 2000,
        })
      }

    }
  }

  useEffect(() => {
    userValid()
  })

  return (
    <>
       <Navbar/>

      <section className='container forgot '>
        <div className='form_data'>
          <div className='form_heading'><h1>Enter Your New Passsword</h1></div>
          {message ? <p style={{ color: "green", fontweight: "bold" }} >Your Passsword Updated Successfully</p> : " "}
          <form>
            <div className='form_input'>
              <label htmlFor='email'>New Passsword</label>
              <input type='password' name="password" value={password} id='password' placeholder='Enter Your Password' onChange={setval} /> </div>

            <button className='btn' onClick={sendpassword} >Submit</button>
          </form>
        </div>
      </section>

      <ToastContainer />
    </>
  )
}

export default ForgotPassword
