import React from 'react'
import Buy from '../compnents/Buy'
import Faq from '../compnents/Faq'
import Features from '../compnents/Features'
import Header from '../compnents/Header'
import Testimonials from '../compnents/Testimonials'
import Trusted from '../compnents/Trusted'

function Home() {
  return (
    <>
        <Header />
        <main>
            <Trusted />
            <Testimonials />
            <Features />
            <Buy />
            <Faq />
        </main>
    </>
  )
}

export default Home