import React from 'react'

const Info = () => {
    return (
        <div>
            <div className="about__info grid">
                <div className="about__box">
                <i className="uil uil-trophy about__icon"></i>
                    <h3 className="about__title">Experince</h3>
                    <span className="about__subtitle">4 years working</span>
                </div>
                <div className="about__box">
                <i className="uil uil-briefcase-alt about__icon"></i>
                    <h3 className="about__title">Completed</h3>
                    <span className="about__subtitle">10 projects</span>
                </div>
                <div className="about__box">
                <i className="uil uil-life-ring about__icon"></i>
                    <h3 className="about__title">Support</h3>
                    <span className="about__subtitle">Online 24/7</span>
                </div>
            </div>
        </div>
    )
}

export default Info
