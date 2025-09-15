import React from 'react'
import { useParams, Link } from 'react-router-dom'

const mockJobs = [
  {
    id: '1',
    title: 'Case Manager',
    location: 'Ontario (Remote with travel)',
    summary: 'Responsible for entitlement decisions and overall management of claims through comprehensive case management plans.',
    fullDescription: \`This job may require travel to WSIB locations across Ontario for in office days, training, or events. In office days are typically held monthly. Travel reimbursement will be provided in accordance with WSIB policies. The locations listed in this posting represent general hiring areas and may not reflect the exact worksite for in office days.

About the Workplace Safety and Insurance Board (WSIB)
We’re here to help. When an injury or illness happens on the job, we move quickly to provide wage-loss benefits, medical coverage and support to help people get back to work. Funded by businesses, we also provide no-fault collective liability insurance and access to industry-specific health and safety information. We are one of the largest insurance organizations in North America covering over five million people in more than 300,000 workplaces across Ontario. For more information, visit wsib.ca.

At the WSIB, you’ll have the opportunity to:
- explore many career paths and follow your passion
- continuously learn and grow professionally
- be recognized for the great work you do
- participate in programs that support your health and wellbeing

You’ll also receive a competitive salary, along with a comprehensive benefit package and defined benefit pension plan.
Bilingual designated roles - You may be eligible to receive a language bonus payment.

Job Summary:
Responsible for the entitlement decision and overall management of claims through the development, implementation, communication and monitoring of comprehensive and integrated case management plans for all case activities.

Major Duties and Responsibilities:
1. Make entitlement decisions based upon legislation, policy, and best practices and communicate these decisions verbally and in writing to applicable parties by:
- Proactively collecting information from workplace parties and healthcare providers required for eligibility decisions and responding to inquiries;
- Providing education on WSIB benefits, policies, and processes while informing parties of their rights and obligations under the Act, and of the consequences of non-compliance;
- Ensure appropriate earnings information is on file to determine the appropriate duration and level of benefits;
- Monitoring employer and worker compliance;
- Determining if a breach of obligations has occurred, levying penalties and fines, and adjusting benefits as appropriate; referring to and /or working collaboratively with internal resources for appropriate action, when required.
2. Develop, implement, and monitor comprehensive and integrated case management plans for all activity in the case required to achieve recovery, community integration, and where possible, return to work (RTW) by:
- Collecting information to progress the case; assessing and positioning each case along its appropriate recovery path; setting goals and making decisions based on legislation, policy, and best practices;
- Planning activities in collaboration with workplace parties and team members; participating in case conferences and team meetings with the service delivery team and management, and providing consultative advice (mentoring) to team members;
- Coordinating and taking action on planned activities; reviewing and monitoring new information as received; closing plan activities when active case management is no longer required; following up and evaluating close cases to ensure case management plan continues to be effective.
3. Provide targeted activities focused on identifying RTW factors, removing obstacles, and leveraging opportunities to facilitate a safe return to suitable work by:
- Coordinating and facilitating RTW cooperation between the workplace parties;
- Supporting workplace parties in their return-to-work efforts by sharing any available information about the workers’ capabilities and/or precautions;
- Arranging, assessing, and adjusting the delivery of return-to-work assessments and plans where needed;
- Promoting prevention, disability management, RTW, and related programs to workplace parties; sharing best practices; connecting workplace parties with expert resources when they would benefit from increased capability to prevent and/or manage injuries and illness;
- Keeping clients and employers informed of the status and progress of the case, ensuring they are fully engaged in removing barriers to, and planning RTW.
4. Identify and co-ordinate intervention by internal and external specialty resources and ensure timely and appropriate completion of these interventions and services by:
- Referring requests for health care entitlement to the appropriate resource and liaising as required;
- Referring requests for equipment, personal care allowance, home/vehicle modifications, and hobbies to Health Services and liaising as required.
5. Attempt to prevent or resolve disputes. Handle requests for reconsideration and, if appealed, arrange access, and process the objection.
6. Utilize knowledge of the case management framework and understanding of the application of WSIB policies and WSIB Acts to conduct case and telephone quality reviews.
7. Perform other related duties as assigned or required.\`
  },
  {
    id: '2',
    title: 'Health and Safety Specialist',
    location: 'Toronto, ON',
    summary: 'Develop and implement health and safety programs to ensure workplace compliance and safety.',
    fullDescription: 'Full description for Health and Safety Specialist.'
  },
  {
    id: '3',
    title: 'Claims Analyst',
    location: 'Ottawa, ON',
    summary: 'Analyze claims data and assist in the management of insurance claims processes.',
    fullDescription: 'Full description for Claims Analyst.'
  }
]

const JobDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const job = mockJobs.find((job) => job.id === id)

  if (!job) {
    return (
      <div>
        <h1>Job Not Found</h1>
        <p>The job you are looking for does not exist.</p>
        <Link to="/jobs">Back to Job Listings</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>{job.title}</h1>
      <p style={{ fontStyle: 'italic', color: '#666' }}>{job.location}</p>
      <p>{job.summary}</p>
      <section style={{ whiteSpace: 'pre-wrap', marginTop: '24px' }}>
        {job.fullDescription}
      </section>
      <Link
        to="/jobs"
        style={{
          display: 'inline-block',
          marginTop: '24px',
          color: '#0055A4',
          textDecoration: 'underline'
        }}
      >
        &larr; Back to Job Listings
      </Link>
    </div>
  )
}

export default JobDetailPage
