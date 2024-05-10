import React from "react";
import styled from "styled-components";
import UserImage from "../../images/UserImage.png";
import KidsImage from "../../images/Kids.png";
import BurningMoon from "../../images/Logo.png";
function StartingPage({setOpen}) {
  const ClickHandler=()=>{
    setOpen(true);
  }
  return (
    <Container>
      <IconArea>
        <img src={BurningMoon} alt="logo" />
      </IconArea>
      <CenterArea>
        <UserProfile onClick={ClickHandler}>
          <img src={UserImage} alt="UserImage" />
          <div>User</div>
        </UserProfile>
        <UserProfile onClick={ClickHandler}>
          <img src={KidsImage} alt="KidsProfile" />
          <div>Kids</div>
        </UserProfile>
      </CenterArea>
    </Container>
  );
}

export default StartingPage;
const Container = styled.div`
  color: white;
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const IconArea = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 80px;
  widht: 80px;
  border-radius: 50%;
  img {
    height: 100%;
    width: 100%;
  }
`;
const CenterArea = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-around;
`;
const UserProfile = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  img {
    margin: 20px;
    height: 80%;
    width: 80%;
  }
  transition: 500ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
