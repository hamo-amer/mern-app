import React from 'react'
import { Link } from 'react-router-dom'
import { toggleFalse } from '../../JS/Actions/actionsContact'
import { useDispatch } from 'react-redux'

import './Home.css'



const Home = () => {

    const dispatch = useDispatch()

    return (
        <div>
            {/* contact list button */}
            <Link to="/">
                <button className="app-btn">Contact List</button>
            </Link>

            {/* add contact button */}
            <Link to="/add_contact">
                <button className="app-btn" onClick={() => { dispatch(toggleFalse()) }}
                >Add Contact</button>
            </Link>
        </div >
    )
}

export default Home
