import React from 'react'
import "./about.css"
import Img from "./_MG_0655.png"
const about = () => {
  return (
    <div >
        <div className='AboutImg'>
        <img src={Img} alt="" width={280} height={270}/>
        </div>
        <div className='About'>
      <p>I believe that I can be a good team player with the ability to work under minimum guidance especially when carrying out challenging assignment. I consider myself as a very ambitious, motivated, career oriented person, willing to accept challenges, energetic and results oriented, with excellent leadership abilities,and an active and hardworking person who is patient and diligent, with great adaptability to changing working conditions.</p>
      </div>
      <footer className='Myfooter'>
      <p>Created By @<span>Gursewak Singh</span>|All Rights Reserved!</p>
      </footer>
    </div>
  )
}
export default about
