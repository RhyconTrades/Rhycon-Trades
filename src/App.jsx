import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Footer from './compnents/Footer';
import Nav from './compnents/Nav';
import Home from './pages/Home';
import Products from './pages/Prodcuts';
import { db } from './firebase/init';
import { collection , getDocs } from 'firebase/firestore'
import { useState , useEffect } from 'react';
import AboutProduct from './pages/AboutProduct';

function App() {

  const [testimonials , setTestimonials] = useState(null)
  const [faq , setFaq] = useState(null)
  const [products , setProducts] = useState(null)

  useEffect(() => {

    const getTestimonials = async () => {
      const data = await getDocs(collection(db , 'testimonials'))
      setTestimonials(data.docs.map((doc) => ({...doc.data() , id: doc.id})))
    }

    const getFaq = async () => {
      const data = await getDocs(collection(db , 'faq'))
      setFaq(data.docs.map((doc) => ({...doc.data() , id: doc.id})))
    }

    const getProducts = async () => {
      const data = await getDocs(collection(db , 'products'))
      setProducts(data.docs.map((doc) => ({... doc.data() , id: doc.id})))
    }

    getTestimonials()
    getFaq()
    getProducts()
  },[])

  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home testimonials={testimonials} faqs={faq} />} />
        <Route exact path='/products' element={<Products products={products} />} />
        <Route exact path='products/:nameInUrl' element={<AboutProduct products={products} />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
