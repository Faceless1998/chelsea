import React, { useState } from "react";
import "./register.css";
import { FaCircleCheck } from "react-icons/fa6";
import { FaSkullCrossbones } from "react-icons/fa";

const Register = () => {
  const [formDate, setFormData] = useState({
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
      ...formDate,
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
      strength = "Medium";
    } else {
      strength = "Strong";
    }
    setPasswordStrength(strength);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formDate;

    if (!username || !email || !password || !confirmPassword) {
      setMessage("შეიტანეთ ყველა მონაცემი");
      setSuccess(false);
      showMessageTemporary();
      return;
    }

    if (!isPasswordValid(password)) {
      setMessage("შეიყვანეთ ძლიერი პაროლი");
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

    if (passwordStrength === "Weak") {
      setMessage("სუსტი პაროლი");
      setSuccess(false);
      showMessageTemporary();
      return;
    }

    setMessage("წარმატებით დარეგისტრირდით");
    showMessageTemporary();

    setSuccess(true);
  };

  const isPasswordValid = (password) => {
    const passwordRegEx =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return passwordRegEx.test(password);
  };

  const showMessageTemporary = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <section>
      <h2>რეგისტრაცია</h2>

      <div className="registration-form">
        <form className="form-elements" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>
          <button type="submit">რეგისტრაცია</button>
        </form>
        {message && (
          <div className={`message ${!showMessage ? "hidden" : ""}`}>
            {success ? (
              <div className="successful">
                <FaCircleCheck /> {message}{" "}
              </div>
            ) : (
              <div className="not_successful">
                <FaSkullCrossbones /> {message}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Register;
