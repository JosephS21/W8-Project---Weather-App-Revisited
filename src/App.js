import './App.css';
import { useContext } from 'react'
import { BrowserRouter, 
  Routes, 
  Route, 
  Link 
} from 'react-router-dom'
import Home from './Views/Home'
import About from './Views/About'
import WeatherSingle from './Views/WeatherSingle';
import { AuthContext } from './Contexts/AuthProvider';



function App() {
  const { login, user, logout } = useContext(AuthContext)
  console.log(user)
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div>
        {
          (user.loggedIn) ?
          <>
            <button onClick={logout}>Logout</button>
            <p>Current User: {user.displayName}</p>
          </> :
          <button onClick={login}>Login</button>
        }
      </div>
      <Routes>
        <Route path="/weather/:uid/:id" element={<WeatherSingle />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App