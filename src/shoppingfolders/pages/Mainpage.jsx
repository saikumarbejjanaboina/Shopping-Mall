import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Content from '../components/Content'
import { Gents, Ladies } from '../../data'
import WomenCollections from '../components/WomenCollections'


const Mainpage = () => {
    const [gentsFashion, setGentsFashion] = useState(Gents)
    const [ladiesFashion, setLadiesFashion] = useState(Ladies)
 console.log(Gents)
  return (
    <div>
        <Header />
        <Banner />
        <Content gentsFashion= {gentsFashion}/>
        <WomenCollections ladiesFashion = {ladiesFashion}/>
        <Footer />
    </div>
  )
}

export default Mainpage