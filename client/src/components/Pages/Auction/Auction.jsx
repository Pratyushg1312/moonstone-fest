import React from 'react'
import './Auction.css'
export default function Auction() {
    return (
        <div classname="auction1" style={{ color: "#00FFD1" }}>
            <h1 className='text-center'>Auction 2.0</h1>

            <div className='row justify-content-center  ttt' style={{width:"100%"}}>
                <div className='col-12 p-0 col-md-8'>
                    <table class=" table maptable pqr  ">
                        <thead>
                            <tr style={{ color: "#ffbd00", fontSize: "2rem" }}>

                                <th scope="col">Department Name</th>
                                <th scope="col">Faculty Coordinator</th>
                                <th scope="col">Student Coordinator</th>

                            </tr>
                        </thead>
                        <tbody style={{ color: "white", fontSize: "1.5rem" }}>

                            <tr><td>Management</td><td><div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><p>Prof. Sneha Raghuvanshi  </p><p>Prof.Pooja Patidar </p></div></td> <td>
                                <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                    <p>Harsh Singh  </p>
                                    <p>Harsh pandya  </p>
                            </div></td> </tr>
                            <tr><td>Commerce </td><td><div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><p>Prof. Rishika Shukla   </p><p>Prof. Babita Dubey </p></div></td> <td>
                                <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                    <p>Jatin karagwal  </p>
                                    <p>Ambuj Shrivastav  </p>
                            </div></td> </tr>

                            <tr><td>Pharmacy</td><td><div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><p>Prof.Mukul Sharma  </p></div></td> <td>
                                <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                <p>Ambuj Shrivastav  </p>
                                    <p>Shikha Tripathi </p>
                            </div></td> </tr>
                            <tr><td>Agriculture</td><td><div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><p>Prof. Suhana Puri goswami  </p><p>Prof.Upasana Mishra </p></div></td> <td>
                                <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                    <p>Meghawat pawan kumar   </p>
                                    <p>Abizer khadwala  </p>
                            </div></td> </tr>
                            <tr><td>Computer Science Engineering </td><td><div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><p>Prof.Shubhrata Kanungo </p><p>Prof.Priyanka Dhasal </p></div></td> <td>
                                <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                    <p>Shantanu Tiwari </p>
                                    <p>Yash Bajaj </p>
                            </div></td> </tr>
                            <tr><td>Electrical Engineering</td><td><div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><p>Prof.Santosh Singh  </p><p>Prof.Animesh Masih </p></div></td> <td>
                                <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                    <p>Divyansh Yadav </p>
                                    <p>Priyanshu Wadhwani   </p>
                            </div></td> </tr>
                            
                            <tr><td>Forensic Science </td><td><div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><p>Prof.Himani Sharma  </p><p>Prof.Varsha Rani Patel  </p></div></td> <td>
                                <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                    <p>Amit Mundal  </p>
                                    <p>Chaitrakshi    </p>
                            </div></td> </tr>

                            <tr><td>Mechnical Engineering</td><td><div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><p>Prof. Ansuman Purohit </p><p>Prof.Ram Bansal </p></div></td> <td>
                                <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                    <p>Kuljeet singh Jhass </p>
                                    <p>Utkarsh Singh Rana  </p>
                            </div></td> </tr>

                            <tr><td>Computer Science </td><td><div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><p>Prof.Govinda Patil  </p><p>Prof.Chinmay Arondekar </p></div></td> <td>
                                <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                    <p>Pulkit Panday  </p>
                                    <p>Daksha Saine </p>
                            </div></td> </tr>

                            <tr><td>Civil Engineering</td><td><div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><p>Prof.Vinay Joshi  </p><p>Prof.Rohini Kale </p></div></td> <td>
                                <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                    <p>Navin Kumar  </p>
                            </div></td> </tr>
                            
                            <tr><td>Electronics and Communication</td><td><div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><p>Prof.Vaibhav Tiwari  </p><p>Prof.Prasanna Dubey  </p></div></td> <td>
                                <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                    <p>Darshan Soni </p>
                                    <p>Uday Shrivastav  </p>
                            </div></td> </tr>
                            
                            <tr><td>Information Technology</td><td><div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>   <p>Prof.Rahul Singh Pawar</p> <p>Prof.Bharat Pahadiya  </p></div></td> <td>
                                <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                    <p>Sukalp Rathore</p>
                                    <p>Rishabh Thakur </p>
                            </div></td> </tr>
                            
                            <tr><td>Finance Committee</td><td><div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><p>Prof. Sunil Mishra </p>
                                    <p>Prof.Vinita Nair </p>
                                    <p>Prof.Rudresh Shah</p>
                                    <p>Prof.Aniket Sane</p></div></td> <td>
                                <div  style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                                    
                            </div></td> </tr>
                            
                            

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
