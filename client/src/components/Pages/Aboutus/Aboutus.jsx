import React from 'react'
import TeamPage from '../Team_Page/TeamPage.jsx'
import Abouthero from './Abouthero.jsx'
import './Aboutus.css'
import Persons from './Persons.jsx'
export default function Aboutus() {
  return (
    <div className='abc'>
      <br />
      <div className='aboutherosection container-fluid'>
        <Abouthero />
      </div>

      <div className=" row " style={{ margin: "0px", justifyContent: "center" }} >
        <div className='col-12 col-md-6 ' >
          <img src="https://www.dialeducation.com/assets/images/gallery/gallery_1625127758.jpg" alt="university's image" style={{ height: "80%", width: "100%" }} />
        </div>
        <div className="col-10 col-md-6 ">

          <div className="text-center my-4">
            <h1 style={{ color: '#07D685' }} > Medi-Caps University</h1>
          </div>
          <h5 className="text-center" style={{ color: "#56ffc7" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis velit labore placeat reprehenderit quidem omnis aliquam porro praesentium earum enim. Sapiente, quam. Doloribus sit est cupiditate, doloremque ut harum quisquam perferendis. Repellat, eum vero. Omnis accusamus sed odio, sequi facilis minus sint reiciendis nihil deserunt dolor exercitationem, quasi numquam et soluta modi vel impedit consectetur. Vitae at illo eveniet nihil modi consequatur laudantium? At perspiciatis unde nulla voluptate placeat corrupti non, asperiores facere ipsam distinctio error obcaecati nemo voluptates ipsum fugit omnis. Tempora recusandae .</h5>
        </div>
      </div>
      <div className='row m-2'>
        <div className='d-flex flex-wrap align-items-center justify-content-center '>
          <div className='md-col col-3 m-3 text-center'><img src="/images/ranked1st.png" style={{ width: "auto",height:"50%" }} /></div>
          <div className='md-col col-3 m-3 text-center'><img src="/images/mhrd-nirf.png" style={{ width: "auto",height:"50%"}} /></div>
          <div className='md-col col-3 m-3 text-center'><img src="/images/placements.png" style={{ width: "auto",height:"50%",  }} /></div>
          {/* <div className='md-col col-3 m-3 text-center'><img src="/images/25year.png" style={{height:"50%", }} /></div> */}
        </div>
      </div>
      <div className="text-center my-4">
        <h1 style={{ color: '#07D685' }}  >Officials</h1>
      </div>
      <div className='container '>
        <Persons />
      </div>
      <h1 className='text-center my-4'>Team</h1>
      <div className="team">
        <TeamPage />

      </div>
    </div>
  )
}
