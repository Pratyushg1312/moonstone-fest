import React from 'react'
import './slip.css'
import {html2canvas} from'html2canvas';
import jsPDF from "jspdf"
export const Recipt = () => {

const exportpdf=()=>{
    const input = document.getElementById("Recipt");
    html2canvas(input,{logging:true,letterRendering: 1,useCORS: true}).then(canvas=>{
        const imgwidth =700;
        const imgheight=canvas.height * imgwidth / canvas.width;
        const imgdata= canvas.toDataURL('img/png');
        const pdf =new jsPDF('p','mm','a4'); pdf.addImage(imgdata,'PNG',0,0,imgwidth,imgheight);
        pdf.save("justdown.pdf")

    })
}

  return (
    <div className="lod">

   
        <button onClick={()=>{exportpdf()}}> generate</button>
    <div className="Recipt" id='Recipt'>
            <h1>Recipt</h1>
            <div className="pt1">
                <p>Recipt No.: </p>
                <p >Serial No.: (invoice)</p>
                <p >Date of Registration:</p>
            </div>
            <div className="pt2">
                <p >Event Name: </p>
                <p >Date of Event :</p>
            </div>
            <div className="pt4">

            <div className="pt3">
                <p> Name of Participant: </p>
                <p>Mobile No.: </p>
                <p>College Name: </p>
            </div>
            <p>Amount:(paid)</p>
            </div>
        
    </div>
    </div>
  )
}
