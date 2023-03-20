import styled from "styled-components"
import {FavoriteBorderOutlined, Search, ShoppingCartOutlined} from '@mui/icons-material'
import {mobile} from '../responsive'

const Info = styled.div`
    position : absolute
    top : 0
    left : 0
    width : 100%
    height : 100%
    display : flex
    justify-content : center
    align-items : center
    gap : 10px
    opacity : 0
    transition : all 0.5s ease
    border-radius : 4px
    background-color : rgba(0,0,0,0.5)
`
const Container = styled.div`
    width : 250px
    height : 250px
    position : relative
    border : 1px solid grey
    border-radius : 4px
    &:hover ${Info}{
        opacity : 1
    }
    ${mobile({width : '90%'})}
`
const Image = styled.img`
    width : 100%
    border-radius : 4px
    height : 100%
`
const Icon = styled.span`
    width : 40px
    height : 40px
    border-radius : 50%
    background : white
    display : flex
    align-items :center
    justify-content : center
    transition : all 0.3s ease
    &:hover{
        transform : scale(1.1)
    }
`

const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
        <Icon>
            <FavoriteBorderOutlined/>
        </Icon>
        <Icon>
        <Search/>
        </Icon>
        <Icon>
        <ShoppingCartOutlined/>
        </Icon>
        </Info>
    </Container>
  )
}

export default Product
