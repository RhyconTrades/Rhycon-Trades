import React from 'react'
import Buy from '../compnents/Buy'
import Faq from '../compnents/Faq'
import Features from '../compnents/Features'
import Header from '../compnents/Header'
import Testimonials from '../compnents/Testimonials'
import Trusted from '../compnents/Trusted'


function Home({testimonials , faqs}) {
  return (
    <>
        <Header />
        <main>
            <Trusted />
            <Testimonials testimonials={testimonials} />
            <Features />
            <Buy />
            <Faq faqs={faqs} />
        </main>
    </>
  )
}

export default Home