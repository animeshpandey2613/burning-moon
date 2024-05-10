import React, { useState, useRef, useEffect } from "react";
import "./Row.css";
function Row({ number, leftShift, rightShift, setDeactivate, Shifter }) {
  const data = [
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3410/1623410-i-5fe8c00b81e1",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7105/1607105-i-294b3dd109a2",
    "https://img10.hotstar.com/image/upload/l_discovery:PP:usp_callouts_on_artwork:Free:Free_Vertical_Eng/c_scale,fl_relative,w_1.0/c_crop,fl_relative,w_1.0,h_1.0/fl_layer_apply/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/5477/1770015477/1770015477-v",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/6613/1707211556613-i",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5944/1615944-i-d9f07bfd2d40",
    "https://img10.hotstar.com/image/upload/l_discovery:PP:usp_callouts_on_artwork:Free:Free_Vertical_Eng/c_scale,fl_relative,w_1.0/c_crop,fl_relative,w_1.0,h_1.0/fl_layer_apply/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/3838/1000053838/1000053838-v",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5629/1710249875629-i",
    "https://img10.hotstar.com/image/upload/l_discovery:PP:usp_callouts_on_artwork:Free:Free_Vertical_Eng/c_scale,fl_relative,w_1.0/c_crop,fl_relative,w_1.0,h_1.0/fl_layer_apply/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3132/1383132-i-011cefc50da9",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5545/1375545-i-4b156857922b",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3343/1707280633343-i",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8068/1408068-i-df235801e67e",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4773/1544773-i-780799471081",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/826/1650826-i-8f4844af31a6",
  ];
  const leftRef = useRef();
  const rightRef = useRef();
  const [shift, setShift] = useState(false);
  useEffect(()=>{
    if(Shifter===true) setShift(true);
  },[Shifter])
  useEffect(() => {
    if (shift === true) {
      leftRef.current.style.marginRight = `${leftShift}px`;
      rightRef.current.style.marginLeft = `${rightShift}px`;
      if (setDeactivate) {
        setDeactivate(true);
      }
    }
  }, [shift, rightShift, leftShift, setDeactivate]);
  return (
    <div>
      <div
        className="Rowcontainer"
        onMouseEnter={() => {
          setShift(true);
        }}
      >
        {data.map((ele, index) => {
          return (
            <img
              src={ele}
              alt="posterImage"
              ref={
                index === number
                  ? rightRef
                  : index === number - 1
                  ? leftRef
                  : null
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
