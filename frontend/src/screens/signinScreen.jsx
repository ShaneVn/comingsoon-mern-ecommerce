import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userAction";
import { useLocation, useNavigate  } from "react-router";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";


export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation()
  const dispatch = useDispatch()

  const redirect = location.search? location.search.split('=')[1] : '/'
  const userSignin = useSelector((state)=> state.userSignin)
  const {userInfo, loading, error} = userSignin
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password))
  };

  useEffect(() => {
    if(userInfo){
    navigate(redirect)}
  }, [userInfo, redirect, navigate])

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
          { loading && <LoadingBox></LoadingBox>}
          {error &&  <MessageBox variant = "danger">{error}</MessageBox>}
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer? <Link to="/register">Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}