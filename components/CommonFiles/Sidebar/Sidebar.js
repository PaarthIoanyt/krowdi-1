import React,{useState} from 'react';
import "./Sidebar.css";
import {useHistory} from "react-router-dom"
import CommonSidebarComponent from './CommonSidebarComponent';
function Sidebar() {
  const[isActive3,setIsActive3]=useState(false);
  const handleMouseEnter = () => {
      setIsActive3(true);
    };
  
    const handleMouseLeave = () => {
      setIsActive3(false)
    };
  const history = useHistory()
  return (
    //<img class="start-up-1" src="/img/start-up-1@2x.svg">
    <div className='container' style={{width:"100%"}}>
    <div className="overlap-group1-3" style={{marginLeft:"22%",paddingLeft:"10%",paddingTop:"4%"}}>
    <img className="logo-ltr-1-3" src="/img/logo-ltr-1-3@2x.svg" style={{marginTop:"6%"}} />
    <CommonSidebarComponent class="dashboard-container-2" history='/main' title="Dashboard" image="img/dashboard-2-2@2x.svg" mt="45%"/>
    <CommonSidebarComponent class="integration-container-2" history="/data-type" title="Projects" image="/img/integration--1--1-2@2x.svg" mt="18%" />
    <CommonSidebarComponent class="integration-container-2" history='/create-account' title="Integration" image="/img/integration--1--1-2@2x.svg" mt="18%"/>
    <CommonSidebarComponent class="flex-row-14" history="/profile-setting" title="Settings" image="/img/layer-2-2@2x.svg" mt="18%"/>
    <CommonSidebarComponent class="flex-row-15" history="/" title="Logout" image="/img/logout--2--1-2@2x.svg" mt="18%"/>
    <div className="group-container-4 border-1px-black-4" style={{width:"90%",paddingLeft:"26%",marginLeft:"-2%",marginRight:"5%",paddingBottom:"15%",marginBottom:"6%"}}>
      <div className="group-21111-2">
        <div className="available-funds-2 valign-text-middle graphik-medium-mine-shaft-15px" style={{marginLeft:"16%",fontSize:"12px"}}>
         121 Available Funds
        </div>
        <div className="price-2 valign-text-middle graphik-bold-tradewind-36px" style={{fontSize:"15px",marginLeft:"8%"}}>$500.56</div>
      </div>
      <img className="group-7" src="/img/group-7@2x.svg" style={{width:"100%"}} />
    </div>
  </div>
    </div>
  )
}

export default Sidebar;