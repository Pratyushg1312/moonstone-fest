import React from 'react'
import './persons.css'
import Singleperon from './Singleperon'
export default function Persons() {
  return (
    <div   className='d-flex col justify-content-center flex-wrap ' >
        <Singleperon img={"https://www.medicaps.ac.in/upload/universitystaff/360782249442.png"} name={"DR. PRAMOD S.NAIR"} designation={"Dean of Enginering"}/>
        <Singleperon img={"https://media.licdn.com/dms/image/C4D03AQFDObx71nNGhg/profile-displayphoto-shrink_200_200/0/1661584363071?e=1681948800&v=beta&t=HZzkNDA9GlFIzu_8E44p0OwMOThr-JWYBRtWYDJsLqg"} name={"Dr. Ratnesh Litoriya"} designation={"HOD (CSE)"}/>
    </div>
  )
}
