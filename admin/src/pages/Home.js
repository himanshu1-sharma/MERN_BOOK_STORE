import React, { useState, useEffect } from 'react'
import LeftPanel from './includes/LeftPanel/LeftPanel'
import Navigation from './includes/Navigation/Navigation'
import { UserState } from '../Context'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const { user, setUser } = UserState({})
    console.log("user", user)
    const navigate = useNavigate()
    useEffect(() => {
        if (!user.token) {
            navigate('/login')
        }

    }, [user])
    return (
        <>
            <Navigation />
            <div className='container-fluid p-0'>
                <div className='row'>
                    <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12'>
                        <LeftPanel />
                    </div>
                    <div className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12'>
                        <div className='table'>
                            <h4>Dashboard</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home