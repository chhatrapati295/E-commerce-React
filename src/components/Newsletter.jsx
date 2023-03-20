import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width : 100%
    height : 60vh
    display : flex
    margin : 2rem 0
    flex-direction : column
    justify-content : center
    align-items : center
    gap : 5px
    background : #FCF1ED;
    text-align : center;
    ${mobile({ padding: "0.5rem 1rem", justifyContent: "center" })}
`;
const Title = styled.h1`
  font-size: 3rem;
`;
const Info = styled.p`
    font-size : 1rem
    letter-spacing : 1px
`;
const InputField = styled.div`
    width : 40%
    border: 1px solid grey
    display :flex
    justify-content : space-between
    align-items : center
    margin-top : 2rem
    border-radius : 4px;
    ${mobile({width : 'auto'})}
`;
const Input = styled.input`
    outline : none
    border : none
    flex : 8
    padding : 0.5rem    
    height : 100%
    font-size : 1rem
    border-radius : 4px
`;
const Button = styled.button`
    border : none
    outline : none
    flex : 1
    background : teal
    color : white
    transition : all 0.3s ease
    padding : 0.5rem
    &:hover{
        background : RGB(0, 90, 90)
    }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Info>Get timely updates from your favourite products.</Info>
      <InputField>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputField>
    </Container>
  );
};

export default Newsletter;
