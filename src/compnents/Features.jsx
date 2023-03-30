import React from 'react'
import { Link } from 'react-router-dom'
import Feature from '../ui/Feature'

function Features() {
  return (
    <section id="features">
        <div className="features-container">
            <div className='features'>
            <div className="features--intro">
                <h2 className="section-title features-title"> <span className="purple">Maximize</span> Your ROI: Discover Our <span className="purple">High-Value</span> Services</h2>
                <p className="features__para">Looking for high-value services to maximize your ROI? <br /> Look no further. Our expert team and innovative solutions deliver exceptional results that exceed expectations. Discover how we can help you achieve greater profitability and success with our services.</p>
                <Link to='/products'><button className='features__btn'>enroll now</button></Link>
            </div>
            <div className="features-wrapper">
            <Feature typeIsAccurate={true} />
            <Feature typeIsAccurate={false} />
            </div>
            </div>
        </div>
    </section>
  )
}

export default Features