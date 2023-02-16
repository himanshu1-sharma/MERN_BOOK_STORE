import React from 'react'
import Navigation from './includes/Navigation/Navigation'
import LeftPanel from './includes/LeftPanel/LeftPanel'
import BookTable from './Tables/BookTable'

const Book = () => {
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
                            <BookTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Book