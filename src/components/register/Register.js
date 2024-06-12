import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaSkullCrossbones } from "react-icons/fa6";
import "./register.css";
import { Link } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordStrength, setPasswordStrength] = useState("");

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = "";
    if (password.length < 8) {
      strength = "Weak";
    } else if (password.length < 12) {
      strength = "Avarage";
    } else {
      strength = "Strong";
    }
    setPasswordStrength(strength);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      setMessage("ყველა ველი უნდა შეავსოთ!!!");
      setSuccess(false);
      showMessageTemporary();
      return;
    }

    if (!isPasswordValid(password)) {
      setMessage("შეიყვანეთ სწორი პაროლი");
      setSuccess(false);
      showMessageTemporary();
      return;
    }

    if (password !== confirmPassword) {
      setMessage("პაროლები არ ემთხვევა");
      setSuccess(false);
      showMessageTemporary();
      return;
    }

    setMessage("რეგისტრაცია წარმატებით დასრულდა");
    setSuccess(true);
    showMessageTemporary();
  };

  const isPasswordValid = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const showMessageTemporary = () =>{
    setShowMessage(true);
    setTimeout(() =>{
      setShowMessage(false);
    },3000)
  }

  return (
    <div className="registration-form">
      <h2>რეგისტრაცია</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="ზედმეტსახელი"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="მეილი"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="პაროლი"
          />
        </div>

        <div>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="გაიმეორეთ პაროლი"
          />
        </div>
        <button type="submit">რეგისტრაცია</button>
      </form>
      
      <Link to="/login">გაქვთ ანგარიში?</Link>

      {message &&
        (success ? (
          <div className={`message ${!showMessage ? 'hidden' : ''}`}>
            <FaCircleCheck className="check" />
            {message}
          </div>
        ) : (
          <div className={`message ${!showMessage ? 'hidden' : ''}`}>
            <FaSkullCrossbones className="uncheck" />
            {message}
          </div>
        ))}
    </div>
  );
};

export default Register;
