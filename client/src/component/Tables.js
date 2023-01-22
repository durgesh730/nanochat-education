import React, { useEffect } from 'react'
import '../style/tables.css'
import Aos from "aos";
import 'aos/dist/aos.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Tables = () => {

    useEffect(() => {
        Aos.init({
           duration: 1200
        });
     }, []);

    return (
        <>
            <section className="container bothtable">
                <div className="Firsttable" data-aos="fade-up">
                    <table class="table borderless">
                        <thead class="thead"><tr><th scope="col"><span>AIIMS NEET Cut-Off</span></th></tr></thead> <hr/>
                        <tbody>
                            <tr><td><a href=" #"><span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS Delhi</a></td></tr>
                            <tr><td><a href=" #"><span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span>  AIIMS Rishikesh</a></td> </tr>
                            <tr><td><a href=" #"> <span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS Kalyani</a></td> </tr>
                            <tr><td><a href=" #"> <span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS Madurai</a></td></tr>
                            <tr><td><a href=" #"> <span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS Gorakhpur </a></td></tr>
                            <tr> <td><a href=" #"><span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span>  AIIMS Raebareli</a></td></tr>
                            <tr><td><a href=" #"> <span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS Jammu </a></td></tr>
                            <tr> <td><a href=" #"> <span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS Deoghar</a></td></tr>
                            <tr> <td><a href=" #"> <span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS Bibinagar</a></td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="secondtable" data-aos="fade-up">
                    <table class="table borderless ">
                        <thead class="thead"> <tr><th scope="col">AIIMS NEET Cut-Off</th></tr></thead> <hr/>
                        <tbody>
                            <tr><td><a href=" #"> <span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS batinda</a></td></tr>
                            <tr><td><a href=" #"> <span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS Raipur</a></td> </tr>
                            <tr><td><a href=" #"> <span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS Rishikesh</a></td></tr>
                            <tr><td><a href=" #"> <span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS Jodhapur</a></td></tr>
                            <tr><td><a href=" #"> <span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS Bhubneswar</a></td></tr>
                            <tr><td><a href=" #"> <span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS Guwahati</a></td> </tr>
                            <tr><td><a href=" #"> <span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS Nagpur</a></td> </tr>
                            <tr><td><a href=" #"> <span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS Bilaspur</a></td> </tr>
                            <tr><td><a href=" #"> <span style={{fontSize:".8rem", color:"#232354"}} ><BsFillCheckCircleFill/></span> AIIMS Rajkot</a></td> </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Tables
