import React from 'react'

import ReactLogo from '../images/reactlogo.jpg'
import JsLogo from '../images/jslogo.png'
import CSS3 from '../images/css3.jpg'

const Expertise = () => {
    return (
        <section id="expertise" className="std-width">
            <h1 className="ml-60">My Expertise</h1>
            <div className="box">
                <div className="row-container">
                    <div className="left w-100 h-100">
                        <img src={ReactLogo} className="w-100 h-100"/>
                    </div>
                    <div className="right w-500 pl-25 v-top">
                        <h2>ReactJs</h2>
                        <span>Developed and deployed ReactJs applications. Expertise in building className based and Functional components.</span>
                    </div>
                </div>

                <div className="row-container">
                    <div className="left w-100 h-100">
                        <img src={JsLogo} className="w-100 h-100"/>
                    </div>
                    <div className="right w-500 pl-25 v-top">
                        <h2>Javascript</h2>
                        <span>Developed and deployed ReactJs applications. Expertise in building className based and Functional components.</span>
                    </div>
                </div>

                <div className="row-container">
                    <div className="left w-100 h-100">
                        <img src={CSS3} className="w-100 h-100"/>
                    </div>
                    <div className="right w-500 pl-25 v-top">
                        <h2>Html & Css3</h2>
                        <span>Developed and deployed ReactJs applications. Expertise in building className based and Functional components.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expertise