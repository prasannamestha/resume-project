import React from 'react'
import ProfilePic from '../images/Prasanna.jpg'

const About = () => {
    return (
        <section id="about" className="std-width">
            <div className="box">
                <div className="profile-summary">
                    <div className="profile-image">
                        <img src={ProfilePic} alt="Profile Image" className="profile-pic" />
                    </div>
                    <div className="profile-heading">
                        <h1>Prasanna Mestha</h1>
                        <p>
                            <span className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                            prasanna.mestha@practiskills.com
                        </p>
                        <p>
                            <span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                            Mangaluru, Karnataka
                        </p>
                    </div>
                </div>
                <div className="profile-description">
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.</p>
                </div>
            </div>
        </section>
    )
}

export default About