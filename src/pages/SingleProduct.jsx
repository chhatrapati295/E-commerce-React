import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import {mobile} from '../responsive'

const Container = styled.div`
    width : 90%
    margin : 0.5rem auto 
    height : 80vh
    display : flex
    border-radius : 4px;
    ${mobile({flexDirection : 'column',height : 'auto'})}
`;
const ImageContainer = styled.div`
    flex : 1
`;
const Image = styled.img`
    width : 100%
    height : 100%
    object-fit : cover
    object-position : top;
    ${mobile({height : '400px'})}
`;
const Info = styled.div`
    flex : 1
    padding : 1rem
    display : flex
    flex-direction : column
    justify-content : center
    gap : 20px
`;
const Title = styled.p`
    font-size : 1.7rem
    font-weight : 500
`;
const Desc = styled.p`

`;
const Appearence = styled.div`
    display : flex
    gap : 40px
`;
const Color = styled.div`
    display : flex
    align-items :Center
    gap : 10px
`;
const SmTitle = styled.span`
    font-weight : 500
`;
const ColorBox = styled.div`
    width : 20px
    height : 20px
    border-radius : 50%
    background : ${props=>props.bg}
`;
const Size = styled.div`
    display : flex
    align-items :Center
    gap : 10px
`;
const Select = styled.select`
    padding : 0.5rem 
    cursor : pointer
`;
const Option = styled.option`

`;
const Counting = styled.div`
    display :flex
    gap : 10px
    align-items :Center
    cursor : pointer
`
const Count = styled.span`
    width : 30px
    height: 30px
    border-radius : 10px
    border : 1px solid teal
    display : flex
    align-items : center
    justify-content : center
`;
const Button = styled.button`
    padding : 0.5rem
    outline : none
    background : teal
    color : white
    font-weight : 600
    border : none
    border-radius : 4px
    cursor : pointer
    &:hover{
        transition : all 0.3s ease
        background : RGB(0, 80, 150)
    }
`;
const SingleProduct = () => {
    const[val,setVal] = useState(1)
    const handleClick = (direction)=>{
        if(direction === 'min'){
            setVal(val > 1 ? val-1 : 1)
        }else{
            setVal(val + 1)
        }
    }
  return (
    <>
        <Navbar/>
        <Announcement/>
    <Container>
      <ImageContainer>
        <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
      </ImageContainer>
      <Info>
        <Title>Denim Jumpsuit</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          molestiae nesciunt atque nisi porro quod officia aliquid, recusandae
          culpa quibusdam ipsa pariatur, consequuntur illum harum fugit dolore
          modi a? Nisi?
        </Desc>
        <Title>$30</Title>
        <Appearence>
          <Color>
            <SmTitle>Color : </SmTitle>
            <ColorBox bg={'pink'}></ColorBox>
            <ColorBox bg={'skyBlue'}></ColorBox>
            <ColorBox bg={'darkgrey'}></ColorBox>
          </Color>
          <Size>
            <SmTitle>Size : </SmTitle>
            <Select>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
            </Select>
          </Size>
        </Appearence>
        <Appearence>
          <Counting>
            <Remove onClick={()=>handleClick('min')} />
            <Count>{val}</Count>
            <Add onClick={()=>handleClick('inc')}/>
          </Counting>
          <Button>Add To Cart</Button>
        </Appearence>
      </Info>
    </Container>
    <Newsletter/>
    <Footer/>
    </>
  );
};

export default SingleProduct;
