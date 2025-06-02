
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
      <div className="bg-black p-4">
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
