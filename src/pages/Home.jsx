import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slidder from '../components/Slidder'

const Container = styled.div`
    width : 100%;
    min-height : 100vh;
    overflow-x : hidden;
`

const Home = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Slidder/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Home
