import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../style/cards.css'
import Aos from "aos";
import 'aos/dist/aos.css';

const Cards = () => {

    useEffect(() => {
        Aos.init({
            duration: 1200
        });
    }, []);

    return (
        <>
            <div className='text-center cutoff'>
                <h2>NEET Cut Off State Wise</h2></div>

            <div className='State container'>
                <div className='ThirdCard' data-aos="fade-up">
                    <div class="card " >
                        <div class="card-body d-grid ">
                            <div className='cardsheading'><span>States</span></div> <hr />
                            <Link to={"Panjab"}>Panjab</Link>
                            <Link to={"Delhi"}>Delhi</Link>
                            <Link to={"HimanchalPradesh"}>Himachal Pradesh</Link>
                            <Link to={'Bihar'}>Bihar</Link>
                            <Link to={"Chandigarh"}>Chandigarh</Link>
                        </div>
                    </div>
                </div>

                <div className='ThirdCard' data-aos="fade-up">
                    <div class="card container">
                        <div class="card-body d-grid ">
                            <div className='cardsheading'><span>States</span></div><hr />
                            <Link to={"Rajasthan"}>Rajasthan</Link>
                            <Link to={"UtterPradesh"}>Uttar Pradesh</Link>
                            <Link to={"Maharashtra"}>Maharashtra</Link>
                            <Link to={"MadhyaPradesh"}>Madhya Pradesh</Link>
                            <Link to={"Haryana"}>Haryana</Link>
                        </div>
                    </div>
                </div>

                <div className='ThirdCard' data-aos="fade-up">
                    <div class="card container">
                        <div class="card-body d-grid ">
                            <div className='cardsheading'><span>States</span></div><hr />
                            <Link to={"WestBengal"}>West Bengal</Link>
                            <Link to={"Odisha"}>Odisha</Link>
                            <Link to={"Gujrat"}>Gujarat</Link>
                            <Link to={"Uttarakhand"}>Uttarakhand</Link>
                            <Link to={"Telangana"}>Telangana</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Cards
