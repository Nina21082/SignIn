import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { signInAction } from "./store/action.js/auth";
import { useSelector } from "react-redux";
import { Button, Toast } from "react-bootstrap";
import { signInInitAction } from "./store/action.js/auth";

export function LogIn(){
  const dispatch = useDispatch()
  const error = useSelector(state => state.signInReducer.error)
  const loading = useSelector(state => state.signInReducer.loading)
  const openProfile = useSelector(state => state.signInReducer.openProfile)
  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(signInAction(formData))
      setFormData({username: '',
                  password: ''})       
        if(openProfile){
          navigate("/profile")
         }
  }
  const handleChange = (name, value) => {
    setFormData({...formData, [name]: value})
  }
    return(
        <section class="vh-100">
                <Toast bg="danger"  onClose={() => dispatch(signInInitAction)} show={error === null ? false : true} delay={3000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        </Toast.Header>
        <Toast.Body>{error}</Toast.Body>
      </Toast>
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="img" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form  onSubmit={(e) => { 
          handleSubmit(e)
        }}>
          <div className="form-outline mb-4">
            <input value={formData.username} onChange={(ev) => handleChange('username', ev.target.value)} required type="text" id="form3Example3" className="form-control form-control-lg"
              placeholder="User name" />
          </div>
          <div className="form-outline mb-3">
            <input value={formData.password} onChange={(ev) => handleChange('password', ev.target.value)} required type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Password" />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
          </div>
          <div class="text-center text-lg-start mt-4 pt-2">
          <Button variant="primary" disabled={loading} type="submit">Login</Button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?  
            <Link href="#!" className="link-danger" to={'/signup'}>Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
  </div>
</section>
    )
}