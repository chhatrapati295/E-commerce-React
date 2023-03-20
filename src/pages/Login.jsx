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
    width : 30%
    background : rgba(0,0,0,0.5);
    ${mobile({width : '80%'})}
`
const Title = styled.span`
    font-weight : 600
`
const Form = styled.form`
    display :flex
    flex-direction : column

`
const Input = styled.input`
    padding : 0.5rem
    outline : none
    margin-bottom : 1rem
    border-radius : 4px
    border : none
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
    cursor : pointer
`

const Login = () => {
  return (
    <>
    <Navbar/>
    <Announcement/>
    <Container>
      <Wrapper>
        <Title>SIGN IN*</Title>
            <Form>
                <Input placeholder='Username'></Input>
                <Input placeholder='Password'></Input>
            </Form>
                <Button type='submit'>LOGIN</Button>
                <Text>Forgot password ?</Text>
                <Text>Create a new account</Text>
      </Wrapper>
    </Container>
    </>
  )
}

export default Login
