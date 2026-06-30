// Login.jsx
import { useState } from 'react';
import './Login.css';

// Assets
import logoLight from '../../assets/LogoLight.svg';

// Components
import Button from '../../components/buttons/Button';

function Login() {
  // Add state for form fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { username, password });
    //  login logic
  };

  return (
    <div id='login-page'>
        <div id='logo-div'>
        <img src={logoLight} alt="Logo" />
        </div>

        <div id='login-group'>
            <div id='login'>
                <div id='login-title'>Login</div>
                
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
                            <Button text="Login" fg='white' bg='#4153F5' width='277px' height='55px' />
                        </div>
                    </div>

                </form>
                </div>
            </div>

    </div>
  );
}

export default Login;