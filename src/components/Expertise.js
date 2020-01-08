import React from 'react'

const Expertise = () => {
    return (
        <section id="expertise" className="std-width">
            <h1 className="ml-60">My Expertise</h1>
            <div className="box">
                <div className="row-container">
                    <div className="left w-100 h-100">
                        <img src="images/reactlogo.jpg" className="w-100 h-100"/>
                    </div>
                    <div className="right w-500 pl-25 v-top">
                        <h2>ReactJs</h2>
                        <span>Developed and deployed ReactJs applications. Expertise in building className based and Functional components.</span>
                    </div>
                </div>

                <div className="row-container">
                    <div className="left w-100 h-100">
                        <img src="images/jslogo.png" className="w-100 h-100"/>
                    </div>
                    <div className="right w-500 pl-25 v-top">
                        <h2>Javascript</h2>
                        <span>Developed and deployed ReactJs applications. Expertise in building className based and Functional components.</span>
                    </div>
                </div>

                <div className="row-container">
                    <div className="left w-100 h-100">
                        <img src="images/css3.jpg" className="w-100 h-100"/>
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