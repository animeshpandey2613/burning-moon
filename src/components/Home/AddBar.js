import React from "react";
import Styled from "styled-components";
function AddBar() {
  return (
    <>
      <Container>
        <Image>
          <img src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-07-20/SilkJuly231366x768-ede61dfd-ccf7-49b9-9b21-69d3c4a287c3.jpg"  alt="sdf"/>
        </Image>
        <Gradient></Gradient>
        <TextArea>
          <Text>
            <img
              className="smallLogo"
              src="https://brand-img1.hotstarext.com/image/upload/v1689845362/Shahabaaz/Ganache_hotstar-brand-logo.jpg"
              alt=""
            />
            <TextBox>
              <SubPart1>
                <AdButton>AD</AdButton>
                <Heading>Cadbury Silk Ganache</Heading>
              </SubPart1>
              <SubPart2>Feels like a French Kiss</SubPart2>
            </TextBox>
          </Text>
          <Button className="BuyNow">Buy Now</Button>
        </TextArea>
      </Container>
    </>
  );
}

export default AddBar;
const Container = Styled.div`
font-family: "Inter", sans-serif;
position:relative;
top:10px;
left:100px;
height:22vw;
z-index:-1;
width:calc(100vw - 170px);
border-radius:10px;
background-color:rgb(18, 20, 26);
margin:0px 20px;
overflow:hidden;
`;
const Image = Styled.div`
img{
    height:100%;
    position:absolute;
    top:-20px;
}`;

const Gradient = Styled.div`
position:relative;
left:500px;
width:102px;
height:22vw;
z-index:100;
background-image: linear-gradient(to left, rgba(22,24,31,1),rgba(22,24,31,0.7),rgba(22,24,31,0.5), rgba(22,24,31,0))
`;
const TextArea = Styled.div`
position:absolute;
left:632px;
top:8px;
bottom:40px;
height:calc(22vw - 40px);
width:500px;
display:flex;
justify-content:space-between;
flex-direction:column;
z-index:-1;

`;
const Text = Styled.div`
display:flex;
margin-top:20px;
.smallLogo{
    top:-20px;
    height:50px;
}
color:white;`;
const Button = Styled.div`
color:white;
font-size:20px;
padding:15px 0px;
background-color:rgb(37,40,51);
display:flex;
justify-content:center;
align-items:center;
width:180px;
border-radius:7px;
font-weight:700;
cursor:pointer;`;
const AdButton = Styled.div`
height:15px;
justify-content:center;
display:flex;
align-items:center;
padding:3px 3px;
color:rgb(133,92,29);
background-color:rgb(255,204,117);
border-radius:2px;
font-size:13px;
font-weight:900;
`;
const Heading = Styled.div`
margin-left:10px;`;
const TextBox = Styled.div`
display:flex;
flex-direction:column;`;
const SubPart1 = Styled.div`
display:flex;
margin-left:10px;`;
const SubPart2 = Styled.div`
display:flex;
margin:5px 10px;
color:rgb(133,142,158)`;
