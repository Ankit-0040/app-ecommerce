import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { Paper } from '@mui/material';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const handleLogin = () => {
   
    if (username === 'admin' && password === 'admin') {
      setUser({ username: 'admin' });
      history.push('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
    <Paper elevation={20} style={{ padding: '20px', maxWidth: '400px' }}>
    
      <h2 style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px'}} >Login</h2>
      <div style={{ margin: '10px' }}>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div style={{ margin: '10px' }}>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center'}} >
      <button onClick={handleLogin}>Login</button>
      </div>
    </Paper>
    </div>
  );
};

export default LoginPage;
