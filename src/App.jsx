
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { BioPage } from './pages/BioPage'
import { CommunityPage } from './pages/CommunityPage'
import { ConnectPage } from './pages/ConnectPage'
import { LogoutPage } from './pages/LogoutPage'
import { LoginPage } from './pages/LoginPage'
import { CreateAccountPage } from './pages/CreateAccountPage'
import { CopePage } from './pages/CopePage'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
            <li><Link to="/bio" className="text-white hover:text-gray-300">Bio</Link></li>
            <li><Link to="/community" className="text-white hover:text-gray-300">Community</Link></li>
            <li><Link to="/connect" className="text-white hover:text-gray-300">Connect</Link></li>
            <li><Link to="/cope" className="text-white hover:text-gray-300">Cope</Link></li>
            <li><Link to="/login" className="text-white hover:text-gray-300">Login</Link></li>
            <li><Link to="/create-account" className="text-white hover:text-gray-300">Create Account</Link></li>
            <li><Link to="/logout" className="text-white hover:text-gray-300">Logout</Link></li>
          </ul>
        </nav>

        <div className="p-4">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/bio" element={<BioPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/cope" element={<CopePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
