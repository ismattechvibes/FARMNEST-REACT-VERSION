import React, { useState } from "react";
import GoogleLogo from "../components/images/gogle-i.png";
import axios from "axios";

const Form = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [Lastname, setLastname] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [active, setActive] = useState("Login In");
  const [Othername, setOthername] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showLoad, setShowLoad] = useState(false);

  const API_BASE_URL = "https://agro-project-uiob.onrender.com";

  // const resetForm = () => {

  // };

  const handleSignUp = async (e) => {
    setShowLoad(true);
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);
    setShowSuccess(false);

    if (
      !password ||
      !email ||
      !Lastname ||
      !Othername ||
      !Phonenumber ||
      !username ||
      !role
    ) {
      setShowError(true);
      setError("All fields are required");
      setIsLoading(false);
      setShowLoad(false);
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, {
        Lastname,
        Othername,
        Phonenumber,
        username,
        email,
        password,
        role,
      });

      if (response.data.success) {
        setShowSuccess(true);
        const notify = setSuccess("Account created successfully!");
        // Clear form
        // resetForm();

        if (notify) {
          setLastname("");
          setOthername("");
          setPhonenumber("");
          setUsername("");
          setRole("");
          setEmail("");
          setPassword("");
        }
      } else {
        setShowError(true);
        setError(response.data.message || "Signup failed");
      }
    } catch (error) {
      setShowError(true);
      setError(
        error.response?.data?.message ||
          "An error occurred during signup. Please try again."
      );
    } finally {
      setIsLoading(false);
      setShowLoad(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setShowLoad(true);
    setIsLoading(true);
    setShowError(false);
    setShowSuccess(false);

    if (!email || !password) {
      setShowError(true);
      setError("Email and password are required");
      setIsLoading(false);
      setShowLoad(false);
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });

      if (response.data.success) {
        setShowSuccess(true);
        setSuccess("Login successful!");
        // Store the token in localStorage or context
        localStorage.setItem("authToken", response.data.token);
        // You can redirect the user here or set user context
        setEmail("");
        setPassword("");
      } else {
        setShowError(true);
        setError(response.data.message || "Login failed");
      }
    } catch (error) {
      setShowError(true);
      setError(
        error.response?.data?.message ||
          "An error occurred during login. Please try again."
      );
    } finally {
      setIsLoading(false);
      setShowLoad(false);
    }
  };

  const toggleForm = () => {
    setActive(active === "Login" ? "Sign Up" : "Login");
    setShowError(false);
    setShowSuccess(false);
    setError("");
    setSuccess("");
  };

  return (
    <div className="login">
      <section className="formInput">
        <div className="login-container">
          <div className="logauth-input">
            <div>
              <div className="header">
                <h3>Welcome!</h3>
                <h1>{active}</h1>
              </div>
              {/* message */}
              <div className="message">
                {showSuccess && (<div className="successMessage">{success}</div>)}
                {showError && (<div className="errorMessage">{error}</div>)}
              </div>
              <div className="form">
                <form
                  onSubmit={active === "Login" ? handleLogin : handleSignUp}
                >
                  {active === "Sign Up" && (
                    <div className="addForm">
                      <div className="f f1">
                        <label htmlFor="name">Last Name</label>
                        <input
                          type="text"
                          placeholder="Surname"
                          onChange={(e) => setLastname(e.target.value)}
                          value={Lastname}
                          required
                        />
                      </div>
                      <div className="f f4">
                        <label htmlFor="otherName">Other Names</label>
                        <input
                          type="text"
                          placeholder="First & Middle Name"
                          onChange={(e) => setOthername(e.target.value)}
                          value={Othername}
                          required
                        />
                      </div>
                      <div className="f f5">
                        <label htmlFor="phoneNum">Contact</label>
                        <input
                          type="text"
                          placeholder="Phone Number"
                          onChange={(e) => setPhonenumber(e.target.value)}
                          value={Phonenumber}
                          required
                        />
                      </div>
                      <div className="f f7">
                        <label htmlFor="username">username</label>
                        <input
                          type="text"
                          placeholder="Username"
                          onChange={(e) => setUsername(e.target.value)}
                          value={username}
                          required
                        />
                      </div>
                      <div className="f f6">
                        <label htmlFor="role">Buyer/Seller</label>
                        <select
                          id="role"
                          onChange={(e) => setRole(e.target.value)}
                          value={role}
                          required
                        >
                          <option value="">Select Role</option>
                          <option value="buyer">Buyer</option>
                          <option value="seller">Seller</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="f f2">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="123@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>

                  <div className="f f3">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter Your Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </div>

                  <div className="btns-lnk">
                    <div className="btn btn1">
                      <button
                        type="submit"
                        className="submit"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="button-content">
                            <div className="spinner"></div>
                            Processing...
                          </div>
                        ) : active === "Login" ? (
                          "Log In"
                        ) : (
                          "Sign Up"
                        )}
                      </button>
                    </div>
                    <div className="btn btn2">
                      <button type="button" disabled={isLoading}>
                        SIGN UP WITH GOOGLE
                        <img
                          src={GoogleLogo}
                          alt="..."
                          width="25px"
                          height="25px"
                        />
                      </button>
                    </div>
                    <div className="lnk">
                      <button
                        type="button"
                        onClick={toggleForm}
                        className="toggle-button"
                        disabled={isLoading}
                      >
                        {active === "Login"
                          ? "DON'T HAVE AN ACCOUNT? SIGN UP"
                          : "ALREADY HAVE AN ACCOUNT? LOG IN"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overlay and spinner */}
      {showLoad && (
        <div className="loading-overlay">
          <div className="spinner-container">
            <div className="spinner"></div>
            <p>Processing your request...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
