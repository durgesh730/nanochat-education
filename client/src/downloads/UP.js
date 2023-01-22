import React from 'react'
import { Link } from 'react-router-dom'
import "../style/download.css"
import Footer from "../component/Footer"
import Navbar from '../component/Navbar'

const Download = () => {

     const token = localStorage.getItem('usersdatatoken');

     return (
          <>
               <Navbar />
               <div className='container'>
                    <div className='colleges'>
                         <div className='TopHeading'>
                              <span>State Name</span>
                              <h6>Year</h6>
                              <small>Option</small>
                         </div>

                         <div className='stateName'>
                              <div className='download' >
                                   <div><span>fgh</span></div>
                                   <div><span>ggg</span></div>
                                   <div><span>hghhg</span></div>
                                   <div><span>hhh</span></div>
                                   <div><span>hghh</span></div>
                              </div>
                              <div className='download' >
                                   <div><a>2022</a></div>
                                   <div><a>2022</a></div>
                                   <div><a>2022</a></div>
                                   <div><a>2022</a></div>
                                   <div><a>2022</a></div>
                              </div>

                              {token !== null ? (
                                   <div className='option'>
                                        <div><a href="https://drive.google.com/file/d/1gMnX6qqIC99fWIbpV79eeqas8HBU-3Dd/view?usp=share_link" target="_blank" >Download</a></div>
                                        <div><a href="" target="_blank" >Download</a></div>
                                        <div><a href="" target="_blank"  >Download</a></div>
                                        <div><a href="" target="_blank"  >Download</a></div>
                                        <div><a href="" target="_blank"  >Download</a></div>
                                        <div><a href="" target="_blank" >Download</a></div>
                                        <div><a href="" target="_blank" >Download</a></div>
                                   </div>
                              ) : (
                                   <div className='option'>
                                        <div><Link to="/Login" >Download</Link></div>
                                        <div><Link to="/Login"> Download </Link></div>
                                        <div><Link to="/Login"> Download </Link></div>
                                        <div><Link to="/Login"> Download </Link></div>
                                        <div><Link to="/Login"> Download </Link></div>
                                   </div>
                              )}
                         </div>
                    </div>
               </div>
               <Footer />
          </>
     )
}

export default Download
