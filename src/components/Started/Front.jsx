import React, { useState, useEffect, useRef } from "react";
import Row from "./Subcomponent/Row";
import "./Front.css";

function Front() {
  const [Shifter, setShifter] = useState(false);
  const FrontContainerRef = useRef();
  useEffect(() => {
    const Timeout = setTimeout(() => {
      setShifter(true);
      if (FrontContainerRef.current)
        FrontContainerRef.current.style.pointerEvents = "none";
    }, 4000);
    return () => clearTimeout(Timeout);
  }, []);
  return (
    <div className="FrontContainer" ref={FrontContainerRef}>
      <div className="FrontRowArea">
        <Row number={1} leftShift={30} rightShift={80} Shifter={Shifter} />
      </div>
      <div className="FrontRowArea">
        <Row number={2} leftShift={300} rightShift={100} Shifter={Shifter} />
      </div>
      <div className="FrontRowArea">
        <Row number={4} leftShift={500} rightShift={100} Shifter={Shifter} />
      </div>
      <div className="FrontRowArea">
        <Row number={8} leftShift={600} rightShift={100} Shifter={Shifter} />
      </div>
      <div className="FrontRowArea">
        <Row number={12} leftShift={800} rightShift={100} Shifter={Shifter} />
      </div>
      <div className="FrontRowArea">
        <Row number={11} leftShift={500} rightShift={100} Shifter={Shifter} />
      </div>
      <div className="FrontRowArea">
        <Row number={7} leftShift={500} rightShift={100} Shifter={Shifter} />
      </div>
      <div className="FrontRowArea">
        <Row number={11} leftShift={100} rightShift={100} Shifter={Shifter} />
      </div>
      {/* <div className="FrontRowArea">
        <Row number={7} leftShift={50} rightShift={100} Shifter={Shifter} />
      </div> */}
    </div>
  );
}

export default Front;
