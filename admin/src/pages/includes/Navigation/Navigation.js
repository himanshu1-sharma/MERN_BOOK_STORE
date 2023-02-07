import React from 'react'
import './Navigation.css'

const Navigation = () => {
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
                                <h4>Himanshu Sharma</h4>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation