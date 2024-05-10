import React, { useState, useEffect } from "react";
import styled from "styled-components";
function MovieGrid({ Catagory, MovieJson }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rightVisibility, setRightVisibility] = useState(true);
  const [leftVisibility, setLeftVisibility] = useState(false);
  useEffect(() => {
    if (currentIndex >= 1) setLeftVisibility(true);
    else setLeftVisibility(false);
    if (currentIndex < MovieJson.length - 8) setRightVisibility(true);
    else setRightVisibility(false);
  }, [currentIndex, MovieJson.length]);
  return (
    <Container>
      {Catagory && <Heading>{Catagory}</Heading>}
      <MovieArea>
        {rightVisibility && (
          <RightButton
            onClick={() => {
              setCurrentIndex((ele) => ele + 1);
            }}
          >
            {">"}
          </RightButton>
        )}
        {leftVisibility && (
          <LeftButton
            onClick={() => {
              setCurrentIndex((ele) => ele - 1);
            }}
          >
            {"<"}
          </LeftButton>
        )}
        <SubContainer Index={currentIndex} totalMovies={MovieJson.length}>
          {MovieJson.map((ele) => {
            return (
              <Movie>
                <ImageArea>
                  <img src={ele.Image} alt="" />
                </ImageArea>
                <PlayButton></PlayButton>
                <CompletedBar></CompletedBar>
                <Title></Title>
              </Movie>
            );
          })}
        </SubContainer>
      </MovieArea>
    </Container>
  );
}

export default MovieGrid;
const Container = styled.div`
  // margin-top: 40px;
  color: white;
  width: 99.4%;
  position: relative;
`;
const Heading = styled.div`
  margin-left: 150px;
  font-size: 23px;
  font-weight: 600;
`;
const MovieArea = styled.div`
  padding: 10px;
  // margin-top: 20px;
  margin-left: 100px;
  width: 90%;
  height: 280px;
  margin-bottom: 30px;
  overflow: hidden;
`;
const SubContainer = styled.div`
  display: flex;
  transform: translateX(-${(ele) => ele.Index * 250}px);
  transition: 400ms;
  width: ${(ele) => ele.totalMovies * 180}px;
  margin-top: 5px;
  justify-content: space-around;
  height: 93%;
`;
const Movie = styled.div`
  position: relative;
  // top: -20px;
  height: 100%;
  transition: 400ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const ImageArea = styled.div`
  height: 100%;
  img {
    border-radius: 10px;
    height: 100%;
    object-fit: contain;
  }
`;
const PlayButton = styled.div``;
const CompletedBar = styled.div``;
const Title = styled.div``;
const RightButton = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  right: 20px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: linear-gradient(
    to left,
    rgba(10, 11, 15, 1),
    rgba(10, 11, 15, 0)
  );
`;
const LeftButton = styled(RightButton)`
  left: 90px;
  background-image: linear-gradient(
    to right,
    rgba(10, 11, 15, 1),
    rgba(10, 11, 15, 0)
  );
`;
