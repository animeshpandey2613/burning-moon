import React from "react";
import "./Form.css";
import FormBackLeft from "./FormBackLeft";
import FormBackRight from "./FormBackRight";
export default function Form() {
  return (
    <div className="FormContainer">
      <div className="Formbackground">
        <FormBackLeft />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <FormBackRight />
        <FormBackLeft />
        <FormBackRight />
        <div className="Formoverlay"></div>
      </div>
      <div className="FormContainer2">
        <div className="Formheading">RESET PASSWORD</div>
        <form className="FormFormArea">
          <div className="Formfield1">
            <label htmlFor="password">Password</label>
            <input type="password" className="FormInputEnhancer" />
          </div>
          <div className="Formfield1">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input type="password" className="FormInputEnhancer" />
          </div>
        </form>
        <div className="Formbutton">Submit</div>
      </div>
    </div>
  );
}
