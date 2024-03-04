import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <input type='text' placeholder='Username' value={username} onChange={(e)=> {setUsername(e.target.value)}} />
        {" "}
        <input type="password" placeholder='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
        <button type = 'submit' onClick={handleOnSubmit}>Submit</button>
        {username}
    </div>
  )
}

export default Login
