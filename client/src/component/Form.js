import React, { useState } from 'react'
import '../style/form.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const Form = () => {

  const [inVal, setInpval] = useState({
    fname: '',
    lastname: "",
    DOB: "",
    AIQRank: "",
    CRank: "",
    phonenumber: "",
    category: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    question: "",
    state: ""
  })

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inVal,
        [name]: value
      }
    })
  }

  const handleform = async (e) => {
    e.preventDefault();

    const { fname, lastname, DOB, AIQRank, CRank, phonenumber, category, choice1, choice2, choice3, choice4, question, state } = inVal;

    if (fname === '') {
      toast("Enter Your Name", {
        autoClose: 3000,
      })
    } else if (phonenumber.length < 10) {
      toast("Enter Your Correct Phone number", {
        autoClose: 3000,
      })
    } else if (AIQRank ==="") {
      toast("Enter Your AIQ Rank", {
        autoClose: 3000,
      })
    } else if (category ==="") {
      toast("Enter Your Category", {
        autoClose: 3000,
      })
    } else {
      const data = await fetch(`${process.env.REACT_APP_SERVER_HOST}/studentform`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ fname, lastname, DOB, AIQRank, CRank, phonenumber, category, choice1, choice2, choice3, choice4, question, state })
      });

      const res = await data.json();
      // console.log(res)

      if (res.status === (201)) {
        toast("Your form submitted successfully", {
          autoClose: 3000,
        })
        setInpval({
          ...inVal,
          fname: '',
          lastname: "",
          DOB: "",
          AIQRank: "",
          CRank: "",
          phonenumber: "",
          category: "",
          choice1: "",
          choice2: "",
          choice3: "",
          choice4: "",
          question: "",
          state: ""
        })

      } else {
        toast("Please Enter Correct Details!", {
          autoClose: 3000,
        })
      }
    }

  }

  return (
    <>

    <Navbar/>
     
      <div className='container formfields '>
        <form >
          <h2 className='text-center my-4'>Counselling Form</h2>
          <div className=' inputs'>
            <div className="form-group p-3 ">
              {/* <label htmlfor="name">Name</label> */}
              <input type="fname" className="form-control" value={inVal.fname} name="fname" id="name" aria-describedby="emailHelp" placeholder="First Name" onChange={setVal} minlength="3" />
            </div>

            <div className="form-group p-3 ">
              {/* <label for="lastname">Last Name</label> */}
              <input type="lastname" className="form-control" id="lastname" name="lastname" value={inVal.lastname} placeholder="Last Name" onChange={setVal} />
            </div>



            <div className="form-group p-3 ">
              {/* <label for="DOB">DOB</label> */}
              <input type="DOB" className="form-control" id="DOB" value={inVal.DOB} name="DOB" placeholder="Category" onChange={setVal} />
            </div>
          </div>

          <div className='inputs'>
            <div className="form-group p-3 ">
              {/* <label htmlfor="name">Name</label> */}
              <input type="AIQRank" className="form-control" id="AIQRank" value={inVal.AIQRank} name="AIQRank" aria-describedby="emailHelp" placeholder="AIQ Rank" onChange={setVal} />
            </div>

            <div className="form-group p-3 ">
              {/* <label for="lastname">Last Name</label> */}
              <input type="CRank" className="form-control" id="CRank" name="CRank" value={inVal.CRank} placeholder="Category Rank" onChange={setVal} />
            </div>

            <div className="form-group p-3 ">
              {/* <label for="DOB">DOB</label> */}
              <input type="phonenumber" className="form-control" name="phonenumber" value={inVal.phonenumber} id="phonenumber" placeholder="Phone Number" onChange={setVal} minlength="10" />
            </div>

            <div className="form-group p-3 ">
              {/* <label for="DOB">DOB</label> */}
              <input type="category" className="form-control" name="category" value={inVal.category} id="category" placeholder="Category" onChange={setVal} />
            </div>
          </div>


          <div className='px-4 ' style={{ fontSize: "1.5rem", padding: "1rem" }} ><small className='text-center my-4'>Enter Your Desired College Choices </small></div>

          <div className='inputs'>
            <div className="form-group p-3 ">
              {/* <label htmlfor="name">Name</label> */}
              <input type="choice1" className="form-control" id="choice1" name="choice1" value={inVal.choice1} aria-describedby="emailHelp" placeholder="1. Choice" onChange={setVal} />
            </div>

            <div className="form-group p-3 ">
              {/* <label for="lastname">Last Name</label> */}
              <input type="choice2" className="form-control" id="choice2" name="choice2" value={inVal.choice2} placeholder="2. Choice" onChange={setVal} />
            </div>

            <div className="form-group p-3 ">
              {/* <label for="DOB">DOB</label> */}
              <input type="choice3" className="form-control" id="choice3" name="choice3" value={inVal.choice3} placeholder="3. Choice" onChange={setVal} />
            </div>
          </div>

          <div className='d-flex'>
            <div className="form-group p-3 ">
              {/* <label for="DOB">DOB</label> */}
              <input type="choice4" className="form-control  " value={inVal.choice4} name="choice4" id="choice4" placeholder="4. Choice" onChange={setVal} />
            </div>
          </div>

          <div className='textarea'>
            <div className="form-group p-3">
              <label htmlfor="DOB">You have any question than write here</label>
              <textarea class="form-control" id="question" value={inVal.question} name="question" rows="2" onChange={setVal}></textarea>
            </div>

            <div className="form-group p-3 ">
              <label htmlfor="DOB">Enter Your State Name</label>
              <input type="state" className="form-control" value={inVal.state} id="state" name="state" placeholder="State Name" onChange={setVal} required />
            </div>

          </div>

          <div className='formbutton my-4'>
            <button type="submit" onClick={handleform} className="btn">Submit</button></div>
        </form>
      </div>

      <Footer/>

      <ToastContainer />
    </>
  )
}

export default Form
