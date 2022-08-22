import React,{useState} from 'react';
import {useHistory} from "react-router-dom";

function CommonSidebarComponent(props) {
    const history=useHistory();
    const[isActive3,setIsActive3]=useState(false);
    const handleClick=()=>{
        setIsActive3(true)
        console.log("1");
    }
    const handleMouseEnter = () => {
        setIsActive3(true);
      };
    
      const handleMouseLeave = () => {
        setIsActive3(false)
      };
      const handleClickData=()=>{
        if(props.title=="Logout")
        {
          console.log("Log Off")
          localStorage.removeItem('name');
          localStorage.removeItem('email');
          localStorage.removeItem('user_id')
          history.push('/sign-in')
        }
      }
  return (
    <div className="dashboard-container-2" style={{marginBottom:"10px",cursor:'pointer',alignItems:"center",marginLeft:isActive3?"15%":"0%",marginTop:props.mt}}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={()=>{
        handleClick()
        history.push(props.history)
      }}>
        <img className="dashboard-2-2" src={props.image} style={{marginLeft:isActive3?"15px":"0%"}} />
        <div className={isActive3?"dashboard-3 valign-text-middle graphik-bold-mine-shaft-15px":"dashboard-3 valign-text-middle graphik-regular-normal-quick-silver-15px"} onClick={handleClickData}>{props.title}</div>
        {
          isActive3
          ?
          <div class="rectangle-22424" style={{marginLeft:"50px"}}></div>
          :
          <></>
        }
      </div>
  )
}

export default CommonSidebarComponent