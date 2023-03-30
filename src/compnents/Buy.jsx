import React from 'react'
import { Link } from 'react-router-dom'

function Buy() {
  return (
    <section id="buy">
        <h1 className='buy-title'>What are you waiting for ?</h1>
        <p className='buy__para'>Don't let valuable opportunities slip away.</p>
        <Link to='/products'><button className='buy__btn'>buy now</button></Link>
        <div className="border"/>
    </section>
  )
}

export default Buy