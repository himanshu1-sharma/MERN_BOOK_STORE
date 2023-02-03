import React, { useState } from 'react'

const Navigation = (props) => {

    const [counter, setCounter] = useState(0)

    return (
        <>
            {console.log("navigation renderd method")}
            <button onClick={() => setCounter(counter + 1)}>Counter</button>
            <p>{counter}</p>
        </>

    )
}

export default Navigation