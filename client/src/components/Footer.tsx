import React from 'react'

const Footer = () => {
  return (
    <footer className=''>
        <p className='text-center text-orange'>© <span>{new Date().getUTCFullYear()}</span> Smart Study Management System | Developed by Sun Rosa | All rights reserved.</p>
    </footer>
  )
}

export default Footer