import React from 'react'

const Header = (props) => {

    return (
        <>
            {console.log("header renderd method")}
            Header : {props.name}
        </>
    )
}

export default Header