import React from 'react'
import TeamPage from '../Team_Page/TeamPage.jsx'
import Abouthero from './Abouthero.jsx'
import './Aboutus.css'
import Persons from './Persons.jsx'
export default function Aboutus() {
  return (
    <div>
      <br/>
      <div className='aboutherosection'>
      <Abouthero/>
      </div>

      <div className="aboutus-container">
        <h1>About MediCaps</h1>
      </div>

      <div className="aboutus-content">
         <div >
          <img className='aboutus-main-img' src="https://www.dialeducation.com/assets/images/gallery/gallery_1625127758.jpg" alt="" />
         </div>
        <div className="aboutus-side-description ">
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis velit labore placeat reprehenderit quidem omnis aliquam porro praesentium earum enim. Sapiente, quam. Doloribus sit est cupiditate, doloremque ut harum quisquam perferendis. Repellat, eum vero. Omnis accusamus sed odio, sequi facilis minus sint reiciendis nihil deserunt dolor exercitationem, quasi numquam et soluta modi vel impedit consectetur. Vitae at illo eveniet nihil modi consequatur laudantium? At perspiciatis unde nulla voluptate placeat corrupti non, asperiores facere ipsam distinctio error obcaecati nemo voluptates ipsum fugit omnis. Tempora recusandae repellendus veritatis corrupti iusto nihil minus, inventore minima cum necessitatibus quae enim iste consectetur nesciunt ab.</h3>
        </div>
      </div>
      <div className="aboutus-container">
      <h1>Offical Persons</h1>
      </div>
      <div className="person">
      <Persons/>
      </div>
      <div className="team">
      <h1>Team</h1>
        <TeamPage/>
      </div>
    </div>
  )
}
