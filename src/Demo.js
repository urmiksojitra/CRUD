import React, { useState } from 'react'

const Demo = () => {
    const [inputtext, setinputtext] = useState('')

    const submithandler = (e) => {
        e.preventdefult()
    }

    const texthendler = (e) => {
        setinputtext(e.target.value)
    }
    return (
        <div>
            <input type="text" value={inputtext} onChange={() => texthendler()}></input>
            <button onClick={(e) => submithandler()}>Submit</button>
            <h1>hello</h1>
        </div>
    )
}

export default Demo
