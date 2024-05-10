import React, { useState, useEffect, useRef } from "react";
import CatchAsyncError from "../../utils/CatchAsyncError";
import Logo from "../../images/Logo.png";
import "./Login.css";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
  //
  const [loggedIn, setLoggedIn] = useState(false);
  const [Input, setInput] = useState({
    phoneNumber: "",
    password: "",
  });
  const LoginHandler = CatchAsyncError(async (e) => {
    e.preventDefault();
    // console.log(Input);
    const resp = await axios.post("http://127.0.0.1:8000/users/login", Input);
    localStorage.setItem("Authentication", resp.data.token);
    setLoggedIn(true);
  });

  useEffect(() => {
    if (loggedIn) {
      window.location.href = "/user/home";
    }
  }, [loggedIn]);
  //

  const inputHandler = (e) => {
    setInput((temp) => {
      return { ...temp, [e.target.name]: e.target.value };
    });
  };
  const [ButtonHover, setButtonHover] = useState(false);
  const Gradient2Ref = useRef();
  useEffect(() => {
    Gradient2Ref.current.style.opacity = ButtonHover ? "0" : "1";
  }, [ButtonHover]);

  //

  //Executing Forgot pass

  const ExecuteForgotPassword = CatchAsyncError(async () => {
    const { value: phoneNumber } = await Swal.fire({
      title: "<strong>Input your registered phone number</strong>",
      icon: "info",
      html: `
      <input type="number" id="swal-input1" class="SignUpInputArea" autocomplete="off"></input>
        `,
      focusConfirm: false,
      confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Great!
        `,
      preConfirm: () => {
        return document.getElementById("swal-input1").value;
      },
    });
    if (!phoneNumber) throw new Error("Please enter a phone number");
    const res = await axios.post("http://127.0.0.1:8000/users/forgotpassword", {
      phoneNumber,
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: res.data.message,
      showConfirmButton: false,
      timer: 4000,
    });
  });

  return (
    <div className="LoginContainer">
      <div className="Loginback">
        <div className="Logingradient"></div>
        <div className="Logingradient2" ref={Gradient2Ref}></div>
        <img src={Logo} alt="adf" className="Loginimage" />
      </div>
      <div className="Loginbody">
        <div className="Loginheading">
          <div className="LoginheadLeft">Burning</div>
          <div className="LoginheadRight">Moon</div>
        </div>
        <div className="Logincontent">
          <div className="LoginLeftPart">
            <div className="LoginleftHeading">Login</div>
            <div className="LoginleftBody">
              <form onSubmit={LoginHandler} className="LoginFormDiv">
                <div className="Loginpair">
                  <label htmlFor="emailAdd" className="LoginLabel">
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="+91-XXXXX-XXXXX"
                    autoComplete="off"
                    className="LoginInputArea"
                    name="phoneNumber"
                    onKeyUpCapture={inputHandler}
                  />
                </div>
                <div className="Loginpair">
                  <label htmlFor="pass" className="LoginLabel">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Your password here"
                    className="LoginInputArea"
                    name="password"
                    onKeyUpCapture={inputHandler}
                  />
                </div>
                <div className="LoginbuttonCover">
                  <div className="forgotpass" onClick={ExecuteForgotPassword}>
                    Forgot password?
                  </div>
                  <button
                    className="LoginButtonLeft"
                    onMouseEnter={() => {
                      setButtonHover(true);
                    }}
                    onMouseLeave={() => {
                      setButtonHover(false);
                    }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="LoginLeftPart">
            <div className="LoginleftHeading LoginrightHeading">New Here?</div>
            <div className="LoginleftBody">
              <div className="LoginrightPara">
                Welcome to Burning Moon, where the enchanting world of cinema
                awaits you! Are you ready to embark on an exhilarating journey
                through the realms of movies?
                <br />
                <br /> Sign up now to unlock a plethora of captivating films,
                from heart-pounding thrillers to heartwarming dramas. Whether
                you're a fan of action-packed adventures or soul-stirring
                romances, there's something here for everyone.
              </div>
              <div className="LoginbuttonCover">
                <button
                  className="LoginButtonLeft LoginButtonRight"
                  onMouseEnter={() => {
                    setButtonHover(true);
                  }}
                  onMouseLeave={() => {
                    setButtonHover(false);
                  }}
                  onClick={() => {
                    window.location.href = "/signup";
                  }}
                >
                  Sign Up
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
