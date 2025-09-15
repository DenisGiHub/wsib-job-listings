import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const mockJobs = [
  {
    id: '1',
    title: 'Case Manager',
    location: 'Ontario (Remote with travel)',
    summary: 'Responsible for entitlement decisions and overall management of claims through comprehensive case management plans.',
  },
  {
    id: '2',
    title: 'Health and Safety Specialist',
    location: 'Toronto, ON',
    summary: 'Develop and implement health and safety programs to ensure workplace compliance and safety.',
  },
  {
    id: '3',
    title: 'Claims Analyst',
    location: 'Ottawa, ON',
    summary: 'Analyze claims data and assist in the management of insurance claims processes.',
  },
]

const JobListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredJobs = mockJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>WSIB Job Listings</h1>
      <input
        type="text"
        placeholder="Search jobs by title or location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '24px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '1rem',
        }}
        aria-label="Search jobs"
      />
      {filteredJobs.length === 0 ? (
        <p>No jobs found matching your search.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredJobs.map((job) => (
            <li
              key={job.id}
              style={{
                background: 'white',
                padding: '16px',
                marginBottom: '16px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <h2 style={{ marginBottom: '8px' }}>{job.title}</h2>
              <p style={{ marginBottom: '8px', color: '#666' }}>{job.location}</p>
              <p style={{ marginBottom: '12px' }}>{job.summary}</p>
              <Link
                to={`/jobs/${job.id}`}
                style={{
                  color: 'white',
                  backgroundColor: '#0055A4',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default JobListPage
