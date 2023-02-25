import React from 'react'
import TeamPage from '../Team_Page/TeamPage.jsx'
import Abouthero from './Abouthero.jsx'
import './Aboutus.css'
import Persons from './Persons.jsx'
export default function Aboutus() {
  return (
    <div className='container abc'>
      <br />
      <div className='aboutherosection'>
        <Abouthero />
      </div>

      <div className="text-center my-4">
        <h1> Medi-Caps University</h1>
      </div>

      <div className="container row text-center" >
        <div className='col-10 col-md-6' >
          <img  src="https://www.dialeducation.com/assets/images/gallery/gallery_1625127758.jpg" alt="" style={{height:"100%",width:"100%"}}  />
        </div>
        <div className="col-10 col-md-6  ">
          <h3 style={{color:"#f2d2a8"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis velit labore placeat reprehenderit quidem omnis aliquam porro praesentium earum enim. Sapiente, quam. Doloribus sit est cupiditate, doloremque ut harum quisquam perferendis. Repellat, eum vero. Omnis accusamus sed odio, sequi facilis minus sint reiciendis nihil deserunt dolor exercitationem, quasi numquam et soluta modi vel impedit consectetur. Vitae at illo eveniet nihil modi consequatur laudantium? At perspiciatis unde nulla voluptate placeat corrupti non, asperiores facere ipsam distinctio error obcaecati nemo voluptates ipsum fugit omnis. Tempora recusandae .</h3>
        </div>
      </div>


      <div className="text-center my-4">
        <h1>Officials</h1>
      </div>
      <div className='container my-4'>
        <Persons />
      </div>
      <h1 className='text-center'>Team</h1>
      <div className="team">
        <TeamPage />
      </div>
    </div>
  )
}
