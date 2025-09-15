import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import JobListPage from './pages/JobListPage'
import JobDetailPage from './pages/JobDetailPage'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/jobs" replace />} />
            <Route path="/jobs" element={<JobListPage />} />
            <Route path="/jobs/:id" element={<JobDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
