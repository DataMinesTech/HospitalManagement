import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { clearErrors, login } from "../../actions/userActions";

const Login = ({ history }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  console.log("loginEmail", loginEmail);

  useEffect(() => {
    if (error) {
      console.log(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push("/home");
    }
  }, [dispatch, error, isAuthenticated]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("login form submitted");

    dispatch(login(loginEmail, loginPassword));
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
              <div class="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  class="img-fluid"
                  alt="Phone image"
                />
              </div>
              <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form onSubmit={submitHandler}>
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form1Example13"
                      class="form-control form-control-lg"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <label class="form-label" for="form1Example13">
                      Email address
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form1Example23"
                      class="form-control form-control-lg"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <label class="form-label" for="form1Example23">
                      Password
                    </label>
                  </div>

                  <div class="d-flex justify-content-around align-items-center mb-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="0"
                        id="form1Example3"
                      />
                      <label class="form-check-label" for="form1Example3">
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                    <a href="#!">Forgot password?</a>
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                  >
                    Sign in
                  </button>

                  {/* <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div>

            <a
              class="btn btn-primary btn-lg btn-block"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
            </a>
            <a
              class="btn btn-primary btn-lg btn-block"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter me-2"></i>Continue with Twitter
            </a> */}
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
