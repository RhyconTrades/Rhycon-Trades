import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Question from '../ui/Question'

function Faq() {
  return (
    <section id='faq'>
        <h1 className="section-title faq-title">Have a&nbsp;<span className="purple">question ?</span></h1>
        <ul className="questions">
            <Question />
            <Question />
            <Question />
            <Question />
        </ul>
    </section>
  )
}

export default Faq