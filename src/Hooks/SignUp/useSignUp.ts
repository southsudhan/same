import { useEffect, useState } from "react";

export function useSignUp() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ErrorEmail, setErrorEmail] = useState("");
  const [ErrorPassword, setErrorPassword] = useState("");
  const [ErrorPasswordConfirm, setErrorPasswordConfirm] = useState("");
  const [ErrorAll, setErrorAll] = useState("");

  useEffect(() => {
    let RIGHTEMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email);

    if (!RIGHTEMAIL) {
      setErrorEmail("Error, Email is not valid");
    } else {
      setErrorEmail("");
    }
    if (Password.length < 8) {
      setErrorPassword("Password must be at least 8 characters");
    } else {
      setErrorPassword("");
    }
    if (Password === ConfirmPassword) {
      setErrorPasswordConfirm("");
    } else {
      setErrorPasswordConfirm("PassWord is not match");
    }
  });

  const HandleForm = () => {
    if (Email === "" || Password === "" || ConfirmPassword === "") {
      setErrorAll("Please complete the form!");
      return;
    } else if (ErrorEmail || ErrorPassword || ErrorPasswordConfirm) {
      setErrorAll("Please fix the errors before submitting.");
      return;
    } else {
      setErrorAll("");
      window.location.assign("/traderoom");
    }
  };

  return {
    HandleForm,
    setPassword,
    setEmail,
    setConfirmPassword,
    Email,
    ErrorAll,
    Password,
    ErrorEmail,
    ErrorPassword,
    ErrorPasswordConfirm,
    ConfirmPassword,
  };
}
