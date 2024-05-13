import React, { useState, useEffect, useRef } from "react";
import Logo from "../../images/Logo.png";
import axios from "axios";
import CatchAsyncError from "../../utils/CatchAsyncError";
import "./SignUp.css";
function Login() {
  const [ButtonHover, setButtonHover] = useState(false);

  //

  //SIGNUP OPERATION
  const [Data, setData] = useState({
    phoneNumber: null,
    emailAddress: "",
    password: "",
    confirmPassword: "",
  });
  const FormSubmit = CatchAsyncError(async (e) => {
    e.preventDefault();
    let { phoneNumber, emailAddress, password, confirmPassword } = e.target;
    if (!phoneNumber || !emailAddress || !password || !confirmPassword) {
      throw new Error("Please fill all the fields");
    }
    setData({
      phoneNumber: parseInt(phoneNumber.value),
      emailAddress: emailAddress.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });
    e.target.reset();
  });

  useEffect(() => {
    const submitData = CatchAsyncError(async () => {
      console.log(Data);
      if (!Data.phoneNumber) {
        return;
      }
      const resp = await axios.post("https://main--burningmoonapi.netlify.app/api/users/signup", Data);
      localStorage.setItem("Authentication", resp.data.token);
      setData({
        phoneNumber: null,
        emailAddress: "",
        password: "",
        confirmPassword: "",
      });
      window.location.href = "/user/home";
    });

    if (Data.phoneNumber !== null) {
      submitData();
    }
  }, [Data]);

  //

  //Animation Operation

  const Gradient2Ref = useRef();
  useEffect(() => {
    Gradient2Ref.current.style.opacity = ButtonHover ? "0" : "1";
  }, [ButtonHover]);
  return (
    <div className="SignUpContainer">
      <div className="SignUpback">
        <div className="SignUpgradient"></div>
        <div className="SignUpgradient2" ref={Gradient2Ref}></div>
        <img src={Logo} alt="adf" className="SignUpimage" />
      </div>
      <div className="SignUpbody">
        <div className="SignUpheading">
          <div className="SignUpheadLeft">Burning</div>
          <div className="SignUpheadRight">Moon</div>
        </div>
        <div className="SignUpcontent">
          <div className="SignUpLeftPart">
            <div className="SignUpleftHeading">SignUp</div>
            <div className="SignUpleftBody">
              <form className="SignUpFormDiv" onSubmit={FormSubmit}>
                <div className="SignUppair">
                  <label htmlFor="emailAdd" className="SignUpLabel">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    autocomplete="off"
                    placeholder="+91-XXXXX-XXXXX"
                    className="SignUpInputArea"
                  />
                </div>
                <div className="SignUppair">
                  <label htmlFor="emailAdd" className="SignUpLabel">
                    Email address
                  </label>
                  <input
                    type="text"
                    placeholder="abc@gmail.com"
                    name="emailAddress"
                    autocomplete="off"
                    className="SignUpInputArea"
                  />
                </div>
                <div className="SignUppair">
                  <label htmlFor="pass" className="SignUpLabel">
                    Create Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your password here"
                    className="SignUpInputArea"
                  />
                </div>
                <div className="SignUppair">
                  <label htmlFor="pass" className="SignUpLabel">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Rewrite the password"
                    className="SignUpInputArea"
                  />
                </div>
                <div className="SignUpbuttonCover">
                  <button
                    className="SignUpButtonLeft"
                    onMouseEnter={() => {
                      setButtonHover(true);
                    }}
                    onMouseLeave={() => {
                      setButtonHover(false);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="SignUpLeftPart">
            <div className="SignUpleftHeading SignUprightHeading">
              Familiar face?
            </div>
            <div className="SignUpleftBody">
              <div className="SignUprightPara">
                Welcome back to Burning Moon, where every frame tells a story
                and every scene sparks magic! It's time to rekindle your love
                affair with cinema.
                <br />
                <br /> Login now to pick up right where you left off - whether
                it's delving into heart-pounding thrillers, immersing yourself
                in heartwarming dramas, or exploring the depths of unforgettable
                romances. <br />
                The silver screen awaits your return, ready to whisk you away on
                another unforgettable adventure. Let's reignite the passion for
                film and embark on yet another mesmerizing journey together!
              </div>
              <div className="SignUpbuttonCover">
                <button
                  className="SignUpButtonLeft SignUpButtonRight"
                  onMouseEnter={() => {
                    setButtonHover(true);
                  }}
                  onMouseLeave={() => {
                    setButtonHover(false);
                  }}
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
