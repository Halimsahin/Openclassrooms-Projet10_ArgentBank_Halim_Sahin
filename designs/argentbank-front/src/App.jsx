import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import SignUp from './pages/SignUp'


export default function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<User />} /> 
          <Route path="*" element={<div>Error404</div>} />
        </Routes>
      </Router>
    </>
  )
}