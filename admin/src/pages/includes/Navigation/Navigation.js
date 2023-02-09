import React from 'react'
import './Navigation.css'
import { UserState } from '../../../Context'

const Navigation = () => {

    const { user, userState } = UserState()

    return (
        <>
            <div className='navigation'>
                <ul>
                    <li>
                        <div className='logo'>
                            <h4>Book Store</h4>
                        </div>
                    </li>
                    <li>
                        <div className='profile'>
                            <div className='profileImg'></div>
                            <div className='profileContent'>
                                <img src={user.profilepic} />
                                <h4>{user.name}</h4>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation