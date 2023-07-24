import { Link, Navigate, useNavigate } from 'react-router-dom';
import { TokenCantext } from '../stete';
import { useContext } from 'react';
import './style.scss';

export default function Navbar() {
  const { token, setToken } = useContext(TokenCantext);
  const nav = useNavigate();

  return(
    <>
      <div className="navbar">
        <Link><h1><i>Nav</i></h1></Link>
        <ul>
          <li> <Link to="/"><h2>About</h2></Link></li>
          <li> <Link ><h2>Single</h2></Link></li>
          <li> <Link to="/register"><h2>Register</h2></Link> </li>
          <li> 
            <button className="btnn" onClick={() => setToken(!token)}>
            {token ? <button onClick={()=> nav("/")}>
              logout 
             </button> : <button  onClick={()=>nav("/login")}>
                login
              </button> }
            </button> 
          </li>
        </ul>
      </div>
    </>
  )
};