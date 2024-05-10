import React from "react";
import styled from "styled-components";
import "./Opener.css";
function Opener() {
  return (
    <>
      {" "}
      <Container className="ooper"></Container>
      <ShortName className="ShortName">Spark E</ShortName>
    </>
  );
}

export default Opener;
const Container = styled.div``;
const ShortName = styled.div``;
