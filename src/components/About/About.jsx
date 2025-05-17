import React from 'react'
import { Link } from 'react-router'


function About() {
  return (
    <div className='flex justify-center items-center'>
      <div className='h-[500px] w-[700px] bg-green-200 mt-[50px]'>
       <pre>
        We are Here to make simpler life to every Cinfiles.
        This is our one of projects, around movie lovers,
        If you are moviephilic then just use our site and rate the site.
        you can contact us from clicking below,
        <Link to="/Contact" className='hover:text-cyan-200'>
        Contact
        </Link>
       </pre>
      </div>
    </div>
  )
}

export default About
