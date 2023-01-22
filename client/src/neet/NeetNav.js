import React from 'react'
import { Link } from 'react-router-dom'
import '../style/neetnav.css'

const NeetNav = () => {

    return (
        <>
            <div className='topnav' >
                <div className='neetlogo'><Link to="/">Nano chat</Link></div>
                <div className='neetRightNav'>
                    <Link to='/login'>Login</Link>
                </div>
            </div>

        </>
    )
}

export default NeetNav
