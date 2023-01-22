import React, { useState } from 'react'
import "../style/navbar.css"
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { BsArrowReturnLeft } from 'react-icons/bs';

// for reset value of result
import { useDispatch } from 'react-redux';
import { resetALLAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';


const Navbar = () => {
  
  const dispatch = useDispatch();
  var [isShown] = useState(false);

  const handleClick = () => {
    if (isShown === false) {
      document.getElementById('SideNav').style.width = "170px"
      isShown = true;
    } else {
      document.getElementById('SideNav').style.width = "0px"
      isShown = false;
    }
  };

  const CloseNav = () => {
    document.getElementById('SideNav').style.width = "0px"
  }

  const token = localStorage.getItem('usersdatatoken');

  const handleLogout = () => {
    const deleted = localStorage.removeItem('usersdatatoken');
    if (deleted !== "") {
      toast("You are Logged Out successfully", {
        autoClose: 3000,
      })
    }
  }

  const onReset=()=>{
      dispatch(resetALLAction())
      dispatch(resetResultAction());
  }

  return (
    <>
      <div className='Navbar'>
        <div className='container'>
          <nav>
            <div className='logo'><Link to="/" onClick={onReset} >Nano chat</Link></div>
            
            <div className='RightNav'>
              <Link to='/neet'>NEET</Link>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Signup</Link>
              {token == null ? " " : <Link onClick={handleLogout} id='logout' >Logout</Link>}
              <span className='Bars' onClick={handleClick}><FaBars /></span>
            </div>
          </nav>
        </div>

        <div className='Sidenav' id='SideNav'>
          <span onClick={CloseNav} id="Close" style={{ fontSize: "1.5rem" }} ><BsArrowReturnLeft /></span>
          <Link to='/'>Home</Link>
          <Link to='/neet' onClick={onReset} >NEET</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
          <Link onClick={handleLogout} id='logout' >Logout</Link>
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default Navbar
