import React, { useState } from 'react'
import './LeftPanel.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDashboard, faUserAlt, faBook } from '@fortawesome/free-solid-svg-icons'
import { UserState } from '../../../Context'
import { useNavigate } from 'react-router-dom'

const LeftPanel = () => {

    const { user, setUser } = UserState({})
    const navigate = useNavigate()
    const handleLogout = () => {
        setUser({})
        navigate('/login')
    }

    return (
        <>
            <div className='leftPanel'>
                <ul>
                    <NavLink exact="true" activeclassname="active" to="/">
                        <li>
                            <div className='panelList'>
                                <div className='panelListIcon'>
                                    <FontAwesomeIcon icon={faDashboard} />
                                </div>
                                <div className='panelListName'>
                                    Dashboard
                                </div>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" to="/admin">
                        <li>
                            <div className='panelList'>
                                <div className='panelListIcon'>
                                    <FontAwesomeIcon icon={faUserAlt} />
                                </div>
                                <div className='panelListName'>
                                    Admin
                                </div>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" to="/book">
                        <li>
                            <div className='panelList'>
                                <div className='panelListIcon'>
                                    <FontAwesomeIcon icon={faBook} />
                                </div>
                                <div className='panelListName'>
                                    Book
                                </div>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" to="/register">
                        <li>
                            <div className='panelList'>
                                <div className='panelListIcon'>
                                    <FontAwesomeIcon icon={faDashboard} />
                                </div>
                                <div className='panelListName'>
                                    Add Admin
                                </div>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" to="/login">
                        <li>
                            <div className='panelList'>
                                <div className='panelListIcon'>
                                    <FontAwesomeIcon icon={faDashboard} />
                                </div>
                                <div className='panelListName'>
                                    Login
                                </div>
                            </div>
                        </li>
                    </NavLink>

                    <li>
                        <div className='panelList' onClick={handleLogout}>
                            <div className='panelListIcon'>
                                <FontAwesomeIcon icon={faDashboard} />
                            </div>
                            <div className='panelListName'>
                                Logout
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default LeftPanel