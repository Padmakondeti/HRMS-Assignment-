import React from 'react'
import Image from '../../public/Home.png'

const Home = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-cyan-500 via-cyan-600 to-pink-500'>
      <div className='container flex flex-col items-center justify-center mx-auto md:flex-row'>
        <div className='md:w-1/2'>
          <h1 className='p-6 text-4xl font-bold text-center md:p-24 md:text-5xl md:text-left'>
            Meet the masterminds who make our HRMS so efficient. Learn more
            about the team's commitment to excellence on HROne...
          </h1>
          <p className='p-6 text-lg font-medium text-center md:pl-24 md:pr-2 md:text-left'>
            A Human Resource Management System (HRMS) integrates various HR
            functions into a single, unified platform to improve operational
            efficiency, ensure data accuracy, and support strategic
            decision-making. It is a software solution that automates and
            streamlines a company's human resources functions, such as payroll,
            recruitment, performance management, and employee data management.
          </p>
        </div>
        <div className='flex justify-center md:w-1/2'>
          <img src={Image} />
        </div>
      </div>
    </div>
  )
}

export default Home
