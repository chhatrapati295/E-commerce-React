import styled from "@emotion/styled";
import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0.7rem 0;
`;
const Title = styled.span`
  display: block;
  text-align: center;
  font-size: 2rem;
`;
const Wrapper1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;
const Button = styled.button`
  padding: 0.5rem;
  cursor: pointer;
  background: black;
  color: white;
  border-radius: 4px;
  border: none;
  &:hover {
    background: grey;
    transition: all 0.3s ease;
  }
`;
const Status = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
  ${mobile({display : 'none'})}
`;
const Text = styled.span`
  text-decoration: underline;
  font-size: 0.8rem;
  &:hover {
    color: blue;
  }
`;
const Wrapper2 = styled.div`
  display: flex;
  gap: 10px;
  margin: 0.5rem 1rem;
  padding: 0.5rem;
  ${mobile({flexDirection : 'column'})}
`;
const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Right = styled.div`
  flex: 1;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 25px;
  border-radius: 4px;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid grey;
  border-radius: 4px;
`;
const Image = styled.img`
  width: 30%;
  height: 150px;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;
const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;
const ColorBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.bg};
`;
const Price = styled.span`
  font-size: 2rem;
`;
const Bold = styled.span`
  font-weight: bold;
`;
const DarkText = styled.span``;
const List = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Cart = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Container>
        <Title>YOUR BAG</Title>
        <Wrapper1>
          <Button>CONTINUE SHOPPING</Button>
          <Status>
            <Text>Shopping Bag(2)</Text>
            <Text>Your Wishlist(0)</Text>
          </Status>
          <Button>CHECKOUT NOW</Button>
        </Wrapper1>
        <Wrapper2>
          <Left>
            <Item>
              <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"></Image>
              <Info>
                <InfoLeft>
                  <DarkText>
                    <Bold>Product : </Bold>JESSIE THUNDER SHOES
                  </DarkText>
                  <DarkText>
                    <Bold>ID : </Bold>9874384
                  </DarkText>
                  <ColorBox bg={"black"} />
                  <DarkText>
                    <Bold>Size : </Bold>37.5
                  </DarkText>
                </InfoLeft>
                <InfoRight>
                  <Status>
                    <Add />
                    <DarkText>2</DarkText>
                    <Remove />
                  </Status>
                  <Price>$30</Price>
                </InfoRight>
              </Info>
            </Item>
            <Item>
              <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"></Image>
              <Info>
                <InfoLeft>
                  <DarkText>
                    <Bold>Product : </Bold>COTTON T-SHIRT
                  </DarkText>
                  <DarkText>
                    <Bold>ID : </Bold>9874384
                  </DarkText>
                  <ColorBox bg={"grey"} />
                  <DarkText>
                    <Bold>Size : </Bold>M
                  </DarkText>
                </InfoLeft>
                <InfoRight>
                  <Status>
                    <Add />
                    <DarkText>1</DarkText>
                    <Remove />
                  </Status>
                  <Price>$20</Price>
                </InfoRight>
              </Info>
            </Item>
          </Left>
          <Right>
            <Title>ORDER SUMMARY</Title>
            <List>
              <DarkText>Subtotal</DarkText>
              <DarkText>$ 80</DarkText>
            </List>
            <List>
              <DarkText>Estimated Shipping</DarkText>
              <DarkText>$ 5.90</DarkText>
            </List>
            <List>
              <DarkText>Shipping Discount</DarkText>
              <DarkText>- $ 5.90</DarkText>
            </List>
            <List>
              <DarkText>
                <Bold>Total</Bold>
              </DarkText>
              <DarkText>$80</DarkText>
            </List>
            <Button>CHECKOUT NOW</Button>
          </Right>
        </Wrapper2>
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
};

export default Cart;
