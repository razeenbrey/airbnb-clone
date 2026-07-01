// Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

// Assets
import logoLight from '../../assets/LogoLight.svg';

// Components
import Button from '../../components/buttons/Button';
import { loginUser, setToken, setUser } from '../../api/api';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Please enter username and password');
      return;
    }

    try {
      const data = await loginUser(username, password);
      setToken(data.token);
      setUser(data.user);

      if (data.user.isHost) {
        navigate('/admin/viewlistings');
      } else {
        navigate('/user');
      }
    } catch (err) {
      setError(err.message || 'Login failed');
      // console.log('Login attempted with:', { username, password });
    }
  };

  return (
    <div id='login-page'>
        <div id='logo-div'>
        <img src={logoLight} alt="Logo" />
        </div>

        <div id='login-group'>
            <div id='login'>
                <div id='login-title'>Login</div>

                {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
                
                <form onSubmit={handleSubmit}>

                    <div id='fields'>
                        <div className='field'>
                            <div className='field-name'>Username</div>
                            <input className='input-field'
                                id="username"
                                type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                            />
                        </div>

                        <div className='field'>
                            <div className='field-name'>Password</div>
                            <input className='input-field'
                                id="password"
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div id='login-lower'>
                        <div id='forgot' className='field-name'>Forgot Password?</div>

                        <div id='login-butt'>
                            <Button type="submit" text="Login" fg='white' bg='#4153F5' width='277px' height='55px' />
                        </div>
                    </div>

                </form>
                </div>
            </div>

    </div>
  );
}

export default Login;
