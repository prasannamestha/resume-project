import React from 'react'

const Links = () => (
    <section id="links" className="std-width">
        <h1 className="ml-60">Links & Projects</h1>
        <div className="box">
            <div className="row-container">
                <div className="left w-100 h-100">
                    <img src="images/github.png" className="w-100 h-100"/>
                </div>
                <div className="right w-500 pl-25 v-top">
                    <h2>GitHub contributions</h2>
                    <span>@prasannamestha is my username. My open source contributions include a simple TODO app in reactJs and VanillaJs.</span>
                </div>
            </div>

            <div className="row-container">
                <div className="left w-100 h-100">
                    <img src="images/linkedin.jpg" className="w-100 h-100"/>
                </div>
                <div className="right w-500 pl-25 v-top">
                    <h2>LinkedIn</h2>
                    <span>You can also find my complete profile at LinkedIn. Do send me a connection request and we could chat more about opportunities.</span>
                </div>
            </div>

            <div className="row-container">
                <div className="left w-100 h-100">
                    <img src="images/CV_Contract_Agreement_Resume_Paper_Document-512.png" className="w-100 h-100"/>
                </div>
                <div className="right w-500 pl-25 v-top">
                    <h2>Online Portfolio</h2>
                    <span>practiskills.com - The website that you are looking at is created by Me. Looks interesting right? Hire Me!</span>
                </div>
            </div>
        </div>
    </section>
)

export default Links