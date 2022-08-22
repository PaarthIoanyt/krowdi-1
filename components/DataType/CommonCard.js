import React,{useState} from 'react';
import "./DataType.css";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
function CommonCard(props) {
    const[isActive3,setIsActive3]=useState(false);
    const history=useHistory();
    
    // console.log(props.detail.datatype_id.S);
    // const handleMouseEnter = () => {
    //     setIsActive3(true);
    //   };
    
      // const handleMouseLeave = () => {
      //   setIsActive3(false)
      // };
      const handleClick=(data)=>{
        console.log(data)
        console.log(props)
        if(data==props?.detail.datatype_id.S)
        {
          setIsActive3(!isActive3)
        }
        else{
          setIsActive3(false)
        }
       history.push({
          pathname: '/data-type',
          state: { dataId: data}
      });
      // setIsActive3(!isActive3)
      }
  return (
    <div className="overlap-group4 border-1px-black-3" style={{backgroundColor:isActive3?"#d3ebeb":"var(--white)",cursor:"pointer",marginRight:"10px"}}  onClick={()=>handleClick(props.detail.datatype_id.S)}>
        {
            isActive3
            ?
            <CheckCircleIcon sx={{marginLeft:"75%"}}/>
            :
            <></>
        }
    <img className="noun-mic-2518334-1" src={props.image} />
    <div className="arabic-audio valign-text-middle graphik-normal-mine-shaft-16px">{props.title}</div>
    <p className="sed-ut-perspiciatis-3 valign-text-middle graphik-regular-normal-star-dust-13px" style={{color:isActive3?"#333":"#9a9a9a"}}>
      {props.text}
    </p>
        <HelpOutlineIcon sx={{color:isActive3?"#333":"#9a9a9a",marginLeft:"65%",marginTop:"25%"}}/>
  </div>
  )
}

export default CommonCard;
