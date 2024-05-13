import React, { useState } from "react";
import "./Form.css";
import Logo from "../../images/Logo.png";
import BackImage from "../../images/resetPass/movieCollage2.jpg";
import CatchAsyncError from "../../utils/CatchAsyncError";
import axios from "axios";
import Swal from "sweetalert2";
function Form({ token }) {
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });
  const SubmitForm = CatchAsyncError(async (e) => {
    e.preventDefault();
    if (data.password.length < 8 || data.confirmPassword.length < 8) {
      throw new Error("Password must have atleast 8 charactors");
    }
    const res = await axios.patch(
      `https://main--burningmoonapi.netlify.app/api/users/resetpassword/${token}`,
      data
    );
    if (res.data.status === "sucess") {
      //SWAL TEMPLATE
      let timerInterval;
      Swal.fire({
        title: "Password changes sucessfully!",
        html: "You will be redirected to login page in <b></b> milliseconds.",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          window.location.href = "/login";
        }
      });
    }
  });
  const InputHandler = (e) => {
    setData((temp) => {
      return { ...temp, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="Formcontainer">
      <div className="Formcontainer2">
        <div className="FormbackArea">
          <img src={BackImage} alt="backgroundImage" />
          <div className="Formoverlay"></div>
        </div>
        <div className="Formfront">
          <div className="FormheadingArea">
            <img src={Logo} alt="logo" className="FormimageArea" />
            <div className="Formtitle">BURNING MOON</div>
          </div>
          <form className="FormformArea" onSubmit={SubmitForm}>
            <div className="Formpair">
              <label htmlFor="password" className="FormlabelInput">
                New password
              </label>
              <input
                type="text"
                name="password"
                className="ForminputArea"
                onKeyUpCapture={InputHandler}
                autocomplete="off"
              />
            </div>
            <div className="Formpair">
              <label htmlFor="confirmPassword" className="FormlabelInput">
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="ForminputArea"
                onKeyUpCapture={InputHandler}
                autocomplete="off"
              />
            </div>
            <button type="submit" className="FormButton">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
