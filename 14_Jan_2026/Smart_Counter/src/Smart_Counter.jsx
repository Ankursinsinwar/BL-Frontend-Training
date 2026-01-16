import React from 'react'
import Counter_class from './Components/Counter_class'
import Counter_function from './Components/Counter_function'

export default function Smart_Counter() {
    return (
        <>
            <h1>Smart Counter</h1>
            <hr /><br />
            <Counter_class />
            <br />
            <hr />
            <br />
            <Counter_function />
            <br />

        </>
    )
}
