import styled from 'styled-components'
import {mobile} from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
    flex : 1
    position : relative
`
const Image = styled.img`
    width : 100%
    height : 100%
    object-fit : cover;
    ${mobile({height : '500px'})}
`
const Info = styled.div`
    position : absolute
    width : 100%
    height : 100%
    top : 0
    left : 0
    color : white
    text-align :center
    display : flex
    flex-direction : column
    align-items : center
    justify-content : center
    gap : 10px
`
const Title = styled.h2`

`
const Button = styled.button`
    padding : 0.5rem
    outline : none
    border-radius : 4px
    background : white
    border : 2px solid white
    font-weight : 500
    letter-spacing : 1px
    &:hover{
        background : #CFD2CB
        border : 2px solid white
        transition : all 0.4s ease
    }
`

const Category = ({item}) => {
  return (
    <Container key={item.id}>
         <Link to="/productList" style={{textDecoration : 'none' , color : 'black'}}><Image src={item.img} ></Image></Link>
        <Info>
            <Title>{item.title}</Title>
            <Link to="/product" style={{textDecoration : 'none' , color : 'black'}}><Button>SHOP NOW</Button></Link>
        </Info>
    </Container>
  )
}

export default Category