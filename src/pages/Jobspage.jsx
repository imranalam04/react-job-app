import React from 'react'
import Navbar from '../components/Navbar'
import JobListings from '../components/JobListings'

const Jobspage = () => {
  return (
    <div>
    <section className='bg-blue-50 px-4 py-6'>
    <JobListings />
    </section>
    </div>
  )
}

export default Jobspage