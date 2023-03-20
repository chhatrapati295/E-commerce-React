import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import {mobile} from '../responsive'

const Container = styled.div`
    width : 100%;
    min-height : 100vh
    display : flex
    justify-content : center
    align-items : center
    background : url("https://images.pexels.com/photos/1422286/pexels-photo-1422286.jpeg?auto=compress&cs=tinysrgb&w=600" )center;
    background-size : cover
    `
    const Wrapper = styled.div`
    border-radius : 4px
    padding : 1rem
    display : flex
    flex-direction : column
    gap : 10px
    color : white
    width : 40%
    background : rgba(0,0,0,0.5);
    ${mobile({width : '80%'})}
`
const Title = styled.span`
    font-weight : 600
`
const Form = styled.form`
    display :flex
    flex-wrap : wrap
    justify-content : space-between
    ${mobile({flexDirection : 'column'})}
`
const Input = styled.input`
    width : 49%
    padding : 0.5rem
    outline : none
    margin-bottom : 1rem
    border-radius : 4px
    border : none;
    ${mobile({width : '100%'})}
`
const Text = styled.p`
    font-size : 0.8rem
    letter-spacing : 1px
    cursor : pointer
`
const Button = styled.button`
    padding 0.5rem;
    font-weight : 600;
    background-color : orchid
    color : white
    border : none
    border-radius : 4px
`

const Cart = () => {
  return (
    <>
    <Navbar/>
    <Announcement/>
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT*</Title>
            <Form>
                <Input placeholder='First name'></Input>
                <Input placeholder='Last name'></Input>
                <Input placeholder='Username'></Input>
                <Input placeholder='Email'></Input>
                <Input placeholder='Password'></Input>
                <Input placeholder='Confirm Password'></Input>
            </Form>
                <Text>By creating an account , I consent to the processing of my personal data in accordance with the <strong>privacy policy</strong>.</Text>
                <Button type='submit'>Create</Button>
      </Wrapper>
    </Container>
    </>
  )
}

export default Cart
