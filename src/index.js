import React from 'react'
import ReactDOM from 'react-dom'

import About from './components/About'
import Expertise from './components/Expertise'

const App = () => {
    return (
        <>
            <About />
            <Expertise />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))