import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'
import {mobile} from '../responsive'

const Container =styled.div`
    width : 100%
    margin : 2rem 0
    padding : 1rem
    display : flex
    flex-wrap : wrap
    justify-content : space-between
    gap : 30px;
    ${mobile({flexDirection : 'column' ,alignItems : 'center'})}
`
const Products = () => {
  return (
    <Container>
        {popularProducts.map(item=>{
            return <Product item={item}/>
        })}
    </Container>
  )
}

export default Products
