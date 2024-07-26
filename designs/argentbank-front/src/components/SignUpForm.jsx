import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

const SignUpForm = () => {
  const [firstname, setFirstname] = useState('')  
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !email || !password || !firstname || !lastname) {
      setError('All fields are required')
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/signup', {
        firstname,
        lastname,
        username,
        email,
        password
      })

      if (response.status === 200) {
        console.log('Sign up successful:', response.data);
        navigate('/login');
      }

      console.log('Sign up successful:', response.data)
    } catch (error) {
      console.error('Error signing up:', error)
      setError('Failed to sign up. Please try again.')
    }
  };

  return (
    <section className="sign-in-content">
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="input-wrapper">
        <label htmlFor="username">Firstname:</label>
        <input
          type="text"
          id="fisrtname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="username">Lastname:</label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="sign-in-button" type="submit">Sign Up</button>
    </form>
    </section>
  );
};

export default SignUpForm;