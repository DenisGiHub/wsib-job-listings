import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: '#0055A4', padding: '16px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Link to="/jobs" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
          WSIB Job Listings
        </Link>
      </div>
    </header>
  )
}

export default Header
