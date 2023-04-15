import React from "react"; 
import {jsPDF} from 'jspdf' ;
import html2canvas from  'html2canvas'


const Download = ({rootElementId, downloadFileName}) => {
   const downloadFileDocument = () => { 
     const input= document.getElementById(rootElementId); 
      html2canvas(input).then((canvas)=> { 
        const imgData=canvas.toDataURL('image/png')
        const pdf =new jsPDF("p", "pt", "a4"); 
         pdf.save(`${downloadFileName}`)
      })
      console.log(rootElementId)
    }
    return(
      <div>
        <button onClick={downloadFileDocument}>Download page</button>
      </div>
    );
}
    export default Download;



 