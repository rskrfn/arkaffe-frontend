import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../login/Login.css";
import InputForm from "../../../components/inputform/InputForm";
// import { connect } from "react-redux";
// import { signupHandler, logoutHandler } from "../../../redux/actions/Auth";
// import Toaster, { notify } from "react-notify-toast";

export class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      repeatpassword: "",
    };
    this.timer = null;
  }
  //   componentDidUpdate(prevProps) {
  //     const { isRejected, error, isFulfilled } = this.props.signupReducer;
  //     if (prevProps !== this.props) {
  //       if (isRejected) {
  //         const errmessage =
  //           error?.response?.data?.message ||
  //           error.message ||
  //           "Internal Server Error";
  //         return notify.show(errmessage, "error");
  //       }
  //     }
  //     if (isFulfilled) {
  //       notify.show("Register Success, Redirecting to Login Page", "success", 4000)
  //       this.timer = setTimeout(()=> {
  //         this.props.history.push("/login")
  //       }, 5000)
  //     }
  //   }

  //   submitHandler = (e) => {
  //     e.preventDefault();
  //     const signup = {
  //       email: this.state.email,
  //       password: this.state.password,
  //       phone: this.state.phone,
  //     };
  //     if (!signup.email || !signup.password || !signup.phone) {
  //       notify.show("Please Fill Out All Form", "warning")
  //     }
  //     this.props.onSignupHandler(signup)
  //   };

  //   logoutHandler = (e) => {
  //     this.props.onLogoutHandler()
  //   }

  render() {
    console.log(this.state);
    return (
      <>
        <main className="container-fluid container-main">
          {/* <Toaster /> */}
          <div className="row no-gutter">
            <div
              className="col-6 img-container"
              style={{ backgroundImage: `url("/assets/images/img_auth.png")` }}
            ></div>
            <div className="login-container">
              <div className="upper-section">
                <span className="upper-content">
                  <Link className="text-arkaffe" to="/">
                    <img
                      alt="logo"
                      src="/assets/icons/icon_arkaffe.png"
                      style={{ width: "30px" }}
                    />
                    Arkaffe
                  </Link>
                  <Link to="/login" className="btn btn-signup">
                    Login
                  </Link>
                </span>
              </div>
              <form
                className="middle-section"
                //   onSubmit={this.submitHandler}
              >
                <h2 className="title">Reset Password</h2>
                <InputForm
                  id={"password"}
                  type={"password"}
                  name={"password"}
                  placeHolder={"Enter your password"}
                  label={"Password :"}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <InputForm
                  id={"password"}
                  type={"password"}
                  name={"password"}
                  placeHolder={"Enter your password"}
                  label={"Password :"}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <div className="button-group">
                  <button type="submit" className="btn btn-login">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="popup">
            <span className="popup-content">
              <div className="text-popup">
                <h3>Get your member card now!</h3>
                <p>Let's join with our member and enjoy the deals.</p>
              </div>
              <div className="button-popup">
                <button type="button" className="btn btn-member">
                  Create Now
                </button>
              </div>
            </span>
          </div>
        </main>
      </>
    );
  }
}

// const mapStatetoProps = (state) => {
//   const { signupReducer } = state;
//   return { signupReducer };
// };

// const mapDispatchtoProps = (dispatch) => {
//   return {
//     onSignupHandler: (data) => {
//       dispatch(signupHandler(data));
//     },
//     onLogoutHandler: () => {
//       dispatch(logoutHandler())
//     }
//   };
// };

// const connectedResetPassword = connect(
//   mapStatetoProps,
//   mapDispatchtoProps
// )(ResetPassword);

export default ResetPassword;
