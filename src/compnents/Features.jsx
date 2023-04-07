import React from 'react'
import { Link } from 'react-router-dom'
import Feature from '../ui/Feature'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Features() {
  return (
    <section id="features">
        <div className="features-container">
            <div className='features'>
            <div className="features--intro">
                <h2 className="section-title features-title"> <span className="purple">Maximize</span> Your ROI: Discover Our <span className="purple">High-Value</span> Services</h2>
                <ul className="feature--list">
                  <li className="feature--list__item">
                    <p><FontAwesomeIcon className='purple' icon='fa fa-arrow-right' /> High potantial returns </p>
                  </li>
                  <li className="feature--list__item">
                    <p><FontAwesomeIcon className='purple' icon='fa fa-arrow-right' /> Greater <b className="purple">control over funds</b></p>
                  </li>
                  <li className="feature--list__item">
                    <p><FontAwesomeIcon className='purple' icon='fa fa-arrow-right' /> <b className="purple">Risk management</b> and position sizing </p>
                  </li>
                  <li className="feature--list__item">
                    <p><FontAwesomeIcon className='purple' icon='fa fa-arrow-right' /> Protection against <b className="purple"> inflation</b></p>
                  </li>
                </ul>
                <Link to='/products'><button className='features__btn'>enroll now</button></Link>
            </div>
            <div className="features-wrapper">
            <Feature typeIsAccurate={true} />
            <Feature typeIsAccurate={false} />
            </div>
            </div>
            <figure className="feature--img">
              <img src="https://cdn.discordapp.com/attachments/1088531111942037534/1093574216592408676/IMG_1457_1.png"/>
            </figure>
        </div>
    </section>
  )
}

export default Features