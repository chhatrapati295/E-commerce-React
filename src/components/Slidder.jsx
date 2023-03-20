import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useState } from "react";
import { sliderItems } from "../data";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    height : 85vh
    position : relative
    overflow : hidden
    display : flex;
    ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
    width : 40px
    height : 40px
    border-radius : 50%
    background : grey
    display : flex
    justify-content : center
    align-items : center
    position : absolute
    top : 0
    bottom : 0
    z-index : 99
    color : black
    opacity : 0.2
    margin : auto
    // left : ${(props) => props.direction === "left" && "10px"}
    // right : ${(props) => props.direction === "right" && "10px"}
    &:hover{
        opacity : 0.6
        transition : all 0.3s ease-in-out
    }
`;
const Wrapper = styled.div`
    // width : 100vw
    height : 100vh
    // border : 2px solid orange
    display : flex
    transition : all 1s ease-in-out
    transform : translateX(${(props) => props.slidderIndex * -100}vw)
    `;
const Slide = styled.div`
    display : flex;
    width : 100vw;
    height : 100vh;
    background-color : #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  // background : #F6F6F6
`;
const TextContainer = styled.div`
    flex : 1
    display : flex
    flex-direction : column
    justify-content : center
    align-items : flex-start
    gap : 15px
    padding : 2rem
    // background : #F6F6F6
`;
const Image = styled.img`
    width : 100%
    height : 85%
    object-fit : cover
    object-position : top
`;
const Title = styled.h1`
  font-size: 3rem;
`;
const Description = styled.p`
    font-size : 1.2rem
    font-weight : 600
    letter-spacing : 3px
`;
const Button = styled.button`
    font-size : 1rem
    padding : 0.5rem
    background : transparent
    outlined : none
    border-radius : 4px
    font-weight : 600
    letter-spacing : 1px;
    cursor : pointer;
    transition : all 0.3s ease;
    &:hover{
        background : #eee;
    }
`;
const Slidder = () => {
  const [slidderIndex, setSlidderIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlidderIndex(slidderIndex > 0 ? slidderIndex - 1 : 2);
    } else {
      setSlidderIndex(slidderIndex < 2 ? slidderIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow
        direction="left"
        style={{ left: "10px" }}
        onClick={() => handleClick("left")}
      >
        <ArrowLeft />
      </Arrow>
      <Wrapper slidderIndex={slidderIndex}>
        {sliderItems.map((item) => {
          return (
            <Slide key={item.id} bg={item.bg}>
              <ImgContainer>
                <Image src={item.img}></Image>
              </ImgContainer>
              <TextContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>SHOP NOW</Button>
              </TextContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow
        direction="right"
        style={{ right: "10px" }}
        onClick={() => handleClick("right")}
      >
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slidder;
