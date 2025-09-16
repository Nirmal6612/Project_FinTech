import React, { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  return (
    <div className="Container">
      <div className="form-container">
        {/* Ye line ab sirf tab dikhayega jab forgot password form na ho */}
        {!showForgot && (
          <p className="Headline">Enter Your Crendential to access your account</p>
        )}

        {showForgot ? (
          <div className="form">
            <h2>Reset your password</h2>
            <p className="forgot-msg" style={{ marginBottom: "12px" }}>
              We'll send the link for you to reset your password. Please enter
              your email.
            </p>

            <input
              type="email"
              name="forgotEmail"
              placeholder="Enter your email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              required
            />

            <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
              <button
                type="button"
                onClick={() => {
                  alert(
                    `If ${forgotEmail} exists, we'll send a reset link to the email.`
                  );
                  setShowForgot(false);
                  setForgotEmail("");
                }}
              >
                Send reset link
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowForgot(false);
                }}
              >
                Back to Login
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="form-toggle">
              <button
                className={isLogin ? "active" : ""}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={!isLogin ? "active" : ""}
                onClick={() => setIsLogin(false)}
              >
                SignUp
              </button>
            </div>

            {isLogin ? (
              <div className="form">
                <h2>Login Now</h2>
                <input type="email" placeholder="Email" required></input>
                <input type="password" placeholder="Password" required></input>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowForgot(true);
                  }}>
                  Forgot Password ?</a>
                

                <button>Login</button>
                <p className="NaM">
                  Not a Member ?{" "}
                  <a href="#" onClick={() => setIsLogin(false)}>
                    SignUp Now
                  </a>
                </p>
              </div>
            ) : (
              <div className="form">
                <h2>SignUp Now</h2>
                <input type="text" placeholder="Name" required></input>
                <input type="email" placeholder="Email" required></input>
                <input type="password" placeholder="Password" required></input>
                <input type="password" placeholder="Confirm Password" required></input>
                <input type="number" placeholder="Phone Number" required></input>

                <div className="terms">
                  <input type="checkbox" id="terms" required></input>
                  <label htmlFor="terms">
                    I confirm that I have read and agree with{" "}
                    <a href="#">Terms and conditions</a> and{" "}
                    <a href="#">Privacy Policy</a>
                  </label>
                </div>

                <button className="Register">SignUp</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

