import { Call,  MailOutline, Room } from "@mui/icons-material"
import styled from "styled-components"
import {mobile} from '../responsive'

const Container = styled.div`
    display : flex;
    width : 100%
    padding : 0 1rem 1rem 1rem ;
    ${mobile({flexDirection : 'column' , gap : '20px'})}
`
const Left = styled.div`
    flex : 1
    padding : 0.5rem
`
const Mid = styled.div`
    flex : 1
    padding : 0.5rem;
    ${mobile({display : 'none'})}
`
const Right = styled.div`
    flex : 1
    padding : 0.5rem
    display : flex
    flex-direction : column
    gap : 7px
`
const Logo = styled.h2`
    font-size : 2rem
    margin-bottom : 1rem
`
const Desc = styled.p`
    letter-spacing : 1px
`
const Title = styled.h3`
    margin-bottom : 1rem
`
const MenuItems = styled.ul`
    list-style : none
    display : flex
    flex-wrap : wrap
    gap : 5px
`
const MenuItem = styled.li`
    width : 45%
`
const Line = styled.div`
    display : flex
    align-items : center
`
const Image = styled.img`
    width : 50%
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AJIO</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa mollitia, aliquid at esse sunt temporibus excepturi molestias blanditiis architecto.</Desc>
      </Left>
      <Mid>
        <Title>Useful Links</Title>
        <MenuItems>
        <MenuItem>Home</MenuItem>
        <MenuItem>Men's Fashion</MenuItem>
        <MenuItem>Accessories</MenuItem>
        <MenuItem>Order Tracking</MenuItem>
        <MenuItem>Wishlist</MenuItem>
        <MenuItem>Cart</MenuItem>
        <MenuItem>Women Fashion</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Raise Query</MenuItem>
        <MenuItem>Terms</MenuItem>
        </MenuItems>
      </Mid>
      <Right>
        <Title>Contact</Title>
        <Line>
            <Room style={{marginRight : '1rem'}}/> 622 Diexi Path , South Tobinchester 98336
        </Line>
        <Line>
            <Call style={{marginRight : '1rem'}}/> +1 234 56789
        </Line>
        <Line>
            <MailOutline style={{marginRight : '1rem'}}/> contact@ajio.shop
        </Line>
        <Image src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
