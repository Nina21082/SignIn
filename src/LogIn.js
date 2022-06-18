import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link} from "react-router-dom";
import { signIn } from "./store/action.js/auth";
import { useSelector } from "react-redux";

export function LogIn(){
  const dispatch = useDispatch()
  const error = useSelector(state => state.error)

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(signIn(formData))
      setFormData({username: '',
                  password: ''})

  }
  const handleChange = (name, value) => {
    setFormData({...formData, [name]: value})

  }
    return(
        <section class="vh-100">
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
            <button type="submit" className="btn btn-primary btn-lg"
              >Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link href="#!"
                className="link-danger" to={'/signup'}>Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
  </div>
</section>
    )
}