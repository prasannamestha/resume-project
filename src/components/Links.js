import React from 'react'

import GithubLogo from '../images/github.png'
import LinkedInLogo from '../images/linkedin.jpg'
import PortfolioLogo from '../images/portfolio.png'

const Links = () => (
    <section id="links" className="std-width">
        <h1 className="ml-60">Links & Projects</h1>
        <div className="box">
            <div className="row-container">
                <div className="left w-100 h-100">
                    <img src={GithubLogo} className="w-100 h-100"/>
                </div>
                <div className="right w-500 pl-25 v-top">
                    <h2>GitHub contributions</h2>
                    <span>@prasannamestha is my username. My open source contributions include a simple TODO app in reactJs and VanillaJs.</span>
                </div>
            </div>

            <div className="row-container">
                <div className="left w-100 h-100">
                    <img src={LinkedInLogo} className="w-100 h-100"/>
                </div>
                <div className="right w-500 pl-25 v-top">
                    <h2>LinkedIn</h2>
                    <span>You can also find my complete profile at LinkedIn. Do send me a connection request and we could chat more about opportunities.</span>
                </div>
            </div>

            <div className="row-container">
                <div className="left w-100 h-100">
                    <img src={PortfolioLogo} className="w-100 h-100"/>
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