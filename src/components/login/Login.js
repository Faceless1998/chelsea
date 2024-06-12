import React, { useState } from "react";
import "./login.css";
import { FaCircleCheck } from "react-icons/fa6";
import { FaSkullCrossbones } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = formData;

    if(!password){
        setMessage("შეიყვანეთ პაროლი");
        setSuccess(false);
        showMessageTemporary();
    }

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

    if(!gmailRegex.test(email)){
        setMessage("შეიყვანეთ სწორი ელ.ფოსტა");
        setSuccess(false);
        showMessageTemporary();
    }
    setMessage("თქვენ წარმატებით გაიარეთ ავტორიზაცია");
    setSuccess(true);
    showMessageTemporary();


  };

  const showMessageTemporary = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

  };
  return (
    <div className="login-form">
      <h2>შესვლა</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="მეილი"
            value={formData.email}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="პაროლი"
            value={formData.password}
          />
        </div>
        <button type="submit">შემდეგ</button>
      </form>
      <Link to="/register">გსურთ შექმნათ ანგარიში?</Link>
      {message &&
        (success ? (
          <div className={`message ${!showMessage ? "hidden" : ""}`}>
            <FaCircleCheck className="check" />
            {message}
          </div>
        ) : (
          <div className={`message ${!showMessage ? "hidden" : ""}`}>
            <FaSkullCrossbones className="uncheck" />
            {message}
          </div>
        ))}
    </div>
  );
};

export default Login;
