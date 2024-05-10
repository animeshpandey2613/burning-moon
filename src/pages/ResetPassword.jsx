import React from "react";
import Form from "../components/ResetPassword/Form";
import { useParams } from "react-router-dom";
function ResetPassword() {
  const params = useParams();
  const token = params.token;
  return (
    <div>
      <Form token = {token}/>
    </div>
  );
}

export default ResetPassword;
