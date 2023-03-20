import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import {mobile} from '../responsive'

const Container = styled.div`
`
const Filter = styled.div`
display : flex
justify-content : space-between
padding : 0.5rem
margin : 2rem 0.5rem
`
const FilterLeft = styled.div`
display : flex   
gap : 15px
align-items :center;
${mobile({flexDirection : 'column', alignItems : 'flex-start'})}
`
const FilterRight = styled.div`
display : flex
gap : 15px
align-items :center;
${mobile({flexDirection : 'column'})}
`
const Title = styled.h1`
margin : 1rem 

`
const Heading = styled.p`
    font-weight : 600
`
const Select = styled.select`
    padding : 0.3rem 0.7rem
    outline : none
`
const Div = styled.div`
  gap : 15px
`
const Option = styled.option`
${mobile({fontSize : '1rem'})}
`
const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Title>Dresses</Title>
      <Filter>
        <FilterLeft>
            <Heading>Filter Products : </Heading>
            <Div style={{display : 'flex'}}>
            <Select name="" id="color">
                <Option value="">Color</Option>
                <Option value="">Yellow</Option>
                <Option value="">Green</Option>
                <Option value="">Blue</Option>
                <Option value="">White</Option>
                <Option value="">Black</Option>
            </Select>
            <Select name="" id="size">
                <Option value="">Size</Option>
                <Option value="">S</Option>
                <Option value="">M</Option>
                <Option value="">L</Option>
                <Option value="">XL</Option>
                <Option value="">XXL</Option>
            </Select>
            </Div>
        </FilterLeft>
        <FilterRight>
        <Heading>Sort Products : </Heading>
            <Select name="" id="sort">
                <Option value="">Newest</Option>
                <Option value="">Popular</Option>
                <Option value="">Modern</Option>
            </Select>
        </FilterRight>
      </Filter>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
