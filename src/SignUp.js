import { Button, Toast } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction, signUpInitAction } from "./store/action.js/auth";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.signUpReducer.error);
  const successMessage = useSelector((state) => state.signUpReducer.successMessage);
  const openProfile = useSelector((state) => state.signUpReducer.openProfile)
  const loading = useSelector((state) => state.signUpReducer.loading)
  let navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repeatPass: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.repeatPass){
      dispatch(
        signUpAction({ username:formData.username, password: formData.repeatPass})
        );
      }
  };
  useEffect(()=>{
    if(openProfile) {
      navigate("/profile")
    }
  }, [openProfile]);
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  return (
    <section className="vh-100">
              <Toast bg="danger"  onClose={() => dispatch(signUpInitAction)}  show={error === null ? false : true} delay={3000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        </Toast.Header>
        <Toast.Body>{error}</Toast.Body>

      </Toast>
      <Toast bg="success"  onClose={() => dispatch(signUpInitAction)}  show={successMessage === null ? false : true} delay={3000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>{successMessage}</Toast.Body>
      </Toast>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form 
                      className="mx-1 mx-md-4"
                      onSubmit={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            value={formData.username}
                            onChange={(ev) =>
                              handleChange("username", ev.target.value)
                            }
                            required
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            placeholder="User name"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            value={formData.password}
                            onChange={(ev) =>
                              handleChange("password", ev.target.value)
                            }
                            required
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            value={formData.repeatPass}
                            onChange={(ev) =>
                              handleChange("repeatPass", ev.target.value)
                            }
                            required
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            placeholder="Repeat password"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <Button type="submit" variant="warning" disabled={loading}>
                          Register
                        </Button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
