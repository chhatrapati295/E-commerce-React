import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import {mobile} from '../responsive'
import { Link } from 'react-router-dom';

const NavbarWrapper = styled.div`
    width : 100%;
    height : 60px;
    display : flex;
    align-items : center;
    overflow : hidden;
    justify-content : space-between;
    ${mobile({height : '50px'})}
`
const Left = styled.div`
    flex : 1
    display : flex
    align-items : center
    justify-content : flex-start
    gap : 20px
    padding : 0.5rem 1rem;
    ${mobile({padding : '0.5rem'})}
`
const Mid = styled.div`
    flex : 1
    padding : 0.5rem 1rem;
    ${mobile({padding : '0.5rem'})}
`
const Right = styled.div`
    flex : 1;
    padding : 0.5rem 1rem;
    display : flex;
    justify-content : flex-end;
    align-items : center;
    gap : 20px;
    ${mobile({flex : '2' , whiteSpace : 'nowrap' , gap : '5px', justifyContent : 'space-around'})}
    `
const Language = styled.span`
    font-size : 0.8rem
    font-weight : 600;
    ${mobile({display : 'none'})}
`
const InputField = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    border : 1px solid black;
    border-radius : 4px;
    padding : 0.2rem 0.5rem;
    ${mobile({gap : '7px'})}
`
const Input = styled.input`
    border-radius : 4px
    border : none;
    outline : none;
    ${mobile({width : '40px'})}
`
const Logo = styled.h1`
    fonts-size : 2rem
    text-align : center
`
const Reg = styled.span`
    font-size : 0.8rem
    font-weight : 600
`
const Navbar = () => {
  return (
    <NavbarWrapper>
        <Left>
            <Language>EN</Language>
            <InputField>
                <Input></Input>
                <Search style={{fontSize : '1.3rem'}}/>
            </InputField>
        </Left>
        <Mid>
        <Link to="/" style={{textDecoration : 'none' , color : 'black'}}><Logo>AJIO.</Logo></Link>
        </Mid>
        <Right>
            <Link to="/register" style={{textDecoration : 'none' , color : 'black'}}><Reg>REGISTER</Reg></Link>
            <Link to="/login" style={{textDecoration : 'none' , color : 'black'}}><Reg>SIGN IN</Reg></Link>
            <Badge badgeContent={3} color="primary">
             <Link to="/cart" style={{textDecoration : 'none' , color : 'black'}}><ShoppingCartOutlined color="dark" /></Link>
            </Badge>
        </Right>
    </NavbarWrapper>
  )
}

export default Navbar
