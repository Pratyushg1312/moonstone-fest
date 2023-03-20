import React from 'react'
import './SingleEvent.css'
// import temp from '/public/Videos/temp.mp4'
export default function SingleEvent() {
    return (
        <div>
            <div className='main'>
                <div className='overlay'></div>
                <video autoPlay loop muted >
                    <source src="/Videos/temp.mp4" type="video/mp4" /></video>
                <div className='content'>
                    <h1 >Event Name</h1>
                </div>
            </div>
            <div className='About container mt-4'>
                <h1 className='text-center' style={{ color: "white" }}>About </h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                </p>
            </div>
            <div className='Schedule container mt-4'>
                <h1 className='text-center  mb-3' style={{ color: "white" }}>Schedule </h1>
                <div className='row'>
                    <div className='col-md-8 col-12 justify-content-center d-flex flex-wrap'>
                        <div className=' slot m-2'>
                            <h1 className='text-center m-1' style={{ fontSize: "25px" }}>Event part 1</h1>

                        </div>
                    </div>
                    <div className='col-md-4 col-12 d-flex align-items-center justify-content-evenly'>
                        <div className='m-2 text-center dir' >

                            <img src="/images/location.png" style={{ width: "40px", height: "40px", margin: "10px" }} />
                            <p>Major Auditorium</p>
                        </div>
                        <div className='m-2 text-center navi' >

                            <a href="https://goo.gl/maps/zQmHkt6ha2dh6G7f6" target={'_blank'}><img src="/images/navigation.jpg" style={{ width: "40px", height: "40px", margin: "10px" }} /></a>
                            <p>Directions</p>

                        </div>

                    </div>
                </div>
            </div>
            <h1 className='text-center text-white'>Event Registration</h1>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <button className="btn-events">Registeration</button>
            </div>
           
            {/* Coordinators Card Section */}
            <h1 className='text-center text-white'>Coordinators</h1>
            <div className='container d-flex flex-wrap justify-content-center'>

                <div class=" profile-card my-2">
                    <img src="https://i.imgur.com/S4GNFIW.jpg" alt="image2" class="profile-icon" />
                    <div class="profile-name text-danger">Name </div>
                    <div class="profile-position mb-1" >Designation </div>
                    <div class="  contact1">
                        <div className='mx-2'><a href="https://wa.me/+919617450917" target="_blank"><img src="/images/whatsapp_image.png" style={{ width: "20px", height: "20px" }} /></a></div>
                        <div className='mx-2'><a href="tel:+919617450917" target="_blank"><img src="/images/contactimage.png" style={{ width: "20px", height: "20px" }} /></a></div>
                        <div className='mx-2'><a href="https://www.instagram.com/the.kalashjain/" target="_blank"><img src="/images/insta.png" style={{ width: "20px", height: "20px" }} /></a></div>
                    </div>
                </div>
                <div class=" profile-card my-2">
                    <img src="https://i.imgur.com/S4GNFIW.jpg" alt="image2" class="profile-icon" />
                    <div class="profile-name text-danger">Name </div>
                    <div class="profile-position mb-1" >Designation </div>
                    <div class="  contact1">
                        <div className='mx-2'><a href="https://wa.me/+919617450917" target="_blank"><img src="/images/whatsapp_image.png" style={{ width: "20px", height: "20px" }} /></a></div>
                        <div className='mx-2'><a href="tel:+919617450917" target="_blank"><img src="/images/contactimage.png" style={{ width: "20px", height: "20px" }} /></a></div>
                        <div className='mx-2'><a href="https://www.instagram.com/the.kalashjain/" target="_blank"><img src="/images/insta.png" style={{ width: "20px", height: "20px" }} /></a></div>
                    </div>
                </div>



            </div>
        </div>
    )
}
