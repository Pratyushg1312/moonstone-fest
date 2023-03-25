import React from 'react'

export default function Sponsorsicon(props) {
    return (
        <>
            <div className=' col-md-4 col-10 ' style={{color:"white"}}>
               <div className='d-flex align-items-center justify-content-center' style={{flexDirection:"column"}}>
                <div><img src='/images/medicaps.png' style={{height:"148px",width:"210px"}}/></div>
                <div><h5>{props.title}sponsor category</h5></div>
                <div><h5>{props.Cname}company name</h5></div>
                <div><h5>{props.descr}description about the company</h5></div>
               </div>
            </div>
        </>
    )
}
