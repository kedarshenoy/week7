import Nav from './navigate';

import React from 'react';
import '../Styles/q2.css'
const Question2 = ({ change }) => {
  return (
    <>
    <Nav></Nav>
    <div style={{display:'flex',justifyContent:'center'}}>
      
        <div style={{ marginTop:"85vh"}} >
        <div style={{display:"flex", backgroundColor:"white", borderRadius:'5px', padding:'5px' , boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' } }>
            <div className='btns' style={{backgroundColor:"red"}} onClick={()=>change("Red")}>Red</div>
            <div className='btns' style={{backgroundColor:"yellow"}} onClick={()=>change("Yellow")}>Yellow</div>
            <div className='btns' style={{backgroundColor:"black",color:'white'}} onClick={()=>change("Black")}>Black</div>
            <div className='btns' style={{backgroundColor:"purple"}} onClick={()=>change("Purple")}>Purple</div>
            <div className='btns' style={{backgroundColor:"green"}} onClick={()=>change("Green")}>Green</div>
            <div className='btns' style={{backgroundColor:"blue",color:'white'}} onClick={()=>change("blue")}>blue</div>
            <div className='btns' style={{backgroundColor:"orange"}} onClick={()=>change("white")}>default</div>
        </div>


    </div>
    </div></>
  );
};

export default Question2;