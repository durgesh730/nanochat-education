import React, { useEffect } from 'react'
import '../style/body.css';
import imgaes from '../images/landing page.png'
import { BsYoutube, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si';
import Cards from './Cards';
import Tables from './Tables';

import Footer from './Footer';
import Videos from './Videos';
import Notification from './Notification';
import Myself from './Myself';
import Aos from "aos";
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Navbar from "../component/Navbar";


const Body = () => {

  useEffect(() => {
    Aos.init({
       duration: 1200
    });
 }, []);

  return (
    <>
      <Navbar/>
      <div className='container'>
        <div className='imgpara' >
          <div className='Text' data-aos="fade-down-right">
            <div className='textone' ><span>Our Objective is to provide</span></div>
            <div className='textsecond' ><span>Quality Education</span></div>
            <div className='textthird' ><small>we effort to improve the ability to think and euip them with specialized </small></div>
            <div className='textfourth' ><small>skill usefil in differentareas of medical, engineering and others</small></div>
            <div className='textButton'>
              {/* <button className='btn'>Our Channel</button> */}
              <Link className='btn' to="form" >Counselling Form</Link>
              </div>
          </div>
          <div className='img' data-aos="fade-down-left">
            <img src={imgaes} alt="images" ></img></div>
        </div>
      </div>

      {/* ==================== side social media icons ============================ */}

      <section>
        <div className='socialMediaLogo' id='phonemedia'>
          <div className='youtube'><a href='https://www.youtube.com/@nanochat' target='black'><BsYoutube /></a></div>
          <div className='linkdin'><a href='/' target='black'><BsLinkedin /></a></div>
          <div className='instagram'><a href='https://www.instagram.com/_durgesh.chaudhary/' target='black'><SiInstagram /></a></div>
          <div className='gmail'><a href='/' target='black'><BsTwitter /></a></div>
        </div>
      </section>

      <Cards/>
      <Notification/>
      <Tables/>
      <Myself/>
      <Videos/>
      <Footer/>
  
    </>
  )
}

export default Body
