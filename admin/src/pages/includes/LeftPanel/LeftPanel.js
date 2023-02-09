import React, { useState } from 'react'
import './LeftPanel.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDashboard, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const LeftPanel = () => {

    const [active, setActive] = useState()

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
                </ul>
            </div>
        </>
    )
}

export default LeftPanel