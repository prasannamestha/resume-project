import React from 'react'
import ReactDOM from 'react-dom'

import About from './components/About'
import Expertise from './components/Expertise'
import Links from './components/Links'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
    return (
        <>
            <About />
            <Expertise />
            <Links />
            <Contact />
            <Footer />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))