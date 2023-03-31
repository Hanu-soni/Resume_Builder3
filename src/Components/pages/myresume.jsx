import React from 'react';
import SingleCards from '../SingleCards'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { useDispatch } from 'react-redux';
const Myresume = () => {
  const Skilldata = useSelector((state) => state.rootreducer.Skill.data);
  const Workdata = useSelector((state) => state.rootreducer.Work.data);
  const image = useSelector((state) => state.rootreducer.Image.data);
  const Formdata = useSelector((state) => state.rootreducer.Form.data);
const navigate=useNavigate()





  return (
   <>
   {Formdata.length>0 ? (
    <div className='dflex container my-3'>
        {Formdata.map((obj, index) => {
          return <SingleCards index={index} image={image[index]} Workdata={Workdata[index]} Formdata={Formdata[index]} Skilldata={Skilldata[index]} key={index} ></SingleCards>
        })}
      </div>
   ):(
    <div className='d-flex justify-content-center my-5'>
    <h1 className='text-primary'>Nothing to Show <span type="button" className='text-danger' style={{textDecoration:"underline"}} onClick={(()=>{navigate('/')})}>Create New</span> </h1>
    </div>
   )}
     
    </>

  )
}



// <div >
//     {Skilldata.map((Skilldata,index)=>{
//         return <SingleCards Skilldata={Skilldata} key={index}  Workdata={Workdata}  ></SingleCards>
//     })}
//     {Workdata.map((Workdata,index)=>{
//         return <SingleCard2 Workdata={Workdata} key={index} ></SingleCard2>
//     })}
// </div>

export default Myresume;