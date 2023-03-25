import React from 'react'

export default function ContactMap() {
  return (
    <div >       
  <section className="map_sec">
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <div className="map_inner">
            <h2>Find Us on Google Map</h2>
           
            <div className="map_bind">
            
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.878218537085!2d75.80140201496046!3d22.621022385157875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f958dcb7169d%3A0xd877c12078e50f0f!2sMedi-Caps%20University!5e0!3m2!1sen!2sin!4v1679218029752!5m2!1sen!2sin"
                width="100%"
                height={450}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


    </div>
  )
}
