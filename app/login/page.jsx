"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PrimaryButton from "@/components/ui/button";
import styles from "./style.module.scss";

const Login = () => {
  const [isShowLogin, setLogin] = useState(true);
  const [isShowThankYou, setThankYou] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickSubmit = () => {
    setThankYou(true);
    setLogin(false);
  };

  const backLogin = () => {
    setThankYou(false);
    setLogin(true);
  };

  function SubmitButton() {
    if (email && password) {
      return (
        <PrimaryButton type="button" onClick={clickSubmit} title="Submit" />
      );
    } else {
      return <PrimaryButton type="button" title="Submit" disabled />;
    }
  }

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      {isShowLogin && (
        <div className={styles.loginMain}>
          <div className="d-flex align-items-center justify-content-end">
            <div className={styles.loginForm}>
              <form action="">
                <div className={styles.formGroup}>
                  <label htmlFor="" className="mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="" className="mb-1">
                    Password
                  </label>
                  <input
                    type={values.showPassword ? "text" : "password"}
                    //onChange={handlePasswordChange("password")}
                    //type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name=""
                    id=""
                    className="form-control"
                    required
                  />
                  <span
                    className={styles.viewPass}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <div className="form-group text-center">
                  <SubmitButton />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {isShowThankYou && (
        <div className={styles.thankYou}>
          <h1>Thank You</h1>
          <PrimaryButton title="Back to Login Page" onClick={backLogin} />
        </div>
      )}
    </section>
  );
};

export default Login;
