import React,{useState,useContext,useEffect} from "react";
import Header from "../CommonFiles/Header/Header";
import Sidebar from "../CommonFiles/Sidebar/Sidebar";
import { Carousel } from 'react-elastic-carousel';
import "./DataType.css";
import axios from "axios";
import {useHistory,useLocation} from "react-router-dom";
import {Typography } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ReactSlider from "./ReactSlider";
function DataType(props) {
   const history = useHistory();
   const location=useLocation();
  //  console.log(location);
   const [isActive1, setIsActive1] = useState(false);
   const[isActive2,setIsActive2]=useState(false);
   const[isActive3,setIsActive3]=useState(false);
   const[isActive4,setIsActive4]=useState(false);
   const[isArrow1,setIsArrow1]=useState(false);
   const[isArrow2,setIsArrow2]=useState(false);   
  const {
    dashboard,
    projects,
    integration,
    logOut,
    availableFunds,
    price,
    kisspngComputerIconsAvatarBusinessC,
    hamdi,
    hamdi459GmailCom,
    createNewProject,
    dataType,
    projectType,
    projectConfiguration,
    performersConfiguration,
    uploadYourData,
    confirmChoices,
    typeOfDataToBeLabeled,
    arabicText,
    sedUtPerspiciatis1,
    image,
    sedUtPerspiciatis2,
    arabicAudio,
    sedUtPerspiciatis3,
    youNeedData,
    sedUtPerspiciatis4,
    somethingElse,
    insertYourFeedback,
    submit,
    cancel,
    next,
  } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const leftArrow=()=>{
  const {scrollPrev}=useContext(VisibilityContext);
  return (
    <Typography onClick={()=>{
      setIsArrow1(!isArrow1)
      setIsArrow2(false)
      scrollPrev()
    }} style={{cursor:"pointer"}} className="left-arrow">
      <ArrowCircleLeftOutlinedIcon sx={{color:isArrow1?"var(--tradewind)":"lightgrey",cursor:"pointer"}}/>
  </Typography>
  )
}
const rightArrow=()=>{
  const {scrollNext}=useContext(VisibilityContext);
  return (
    <Typography onClick={()=>{
      setIsArrow2(!isArrow2)
      setIsArrow1(false)
      scrollNext()
    }}  style={{cursor:"pointer"}}className="left-arrow">
    <ArrowCircleRightOutlinedIcon sx={{color:isArrow2?"var(--tradewind)":"lightgrey",cursor:"pointer"}}/>
  </Typography>
  )
}
  return (
    <div className="container-center-horizontal" style={{width:"100%"}}>
      <div className="data-type screen">
      <Sidebar/>
      <Header/>
        <div className="flex" style={{width:"75%",marginLeft:"-39.5%",marginRight:"6.5%",paddingBottom:"4%"}}>
          <div className="flex" style={{marginTop:"9.5%"}}>
            <div className="create-new-project-1  graphik-bold-mine-shaft-32px">
              {createNewProject}
            </div>
          </div>
          <div className="group-container-2">
            <div className="overlap-group6">
              <img className="noun-office-3622982-1" src="/img/noun-office-3622982-1@2x.svg" />
            </div>
              <img className="group-2" src="/img/group-2@2x.svg" />
            <div className="overlap-group12-1">
              <img className="start-up-2" src="/img/start-up-2@2x.svg" />
              <div className="ellipse-697 border-2px-mountain-mist"></div>
            </div>
            <img className="group-3" src="/img/group-3@2x.svg" />
            <div className="overlap-group7-1 border-2px-mountain-mist">
              <img className="noun-configuration-2118962-1" src="/img/noun-configuration-2118962-1@2x.svg" />
            </div>
            <img className="group-4" src="/img/group-3@2x.svg" />
            <div className="overlap-group15-1 border-2px-mountain-mist">
              <img className="noun-user-setting-2931823-1" src="/img/noun-user-setting-2931823-1@2x.svg" />
            </div>
            <img className="group-5" src="/img/group-3@2x.svg" />
            <div className="overlap-group9 border-2px-mountain-mist">
              <img className="noun-upload-1920885-1" src="/img/noun-upload-1920885-1@2x.svg" />
            </div>
            <img className="group-6" src="/img/group-3@2x.svg" />
            <div className="overlap-group13 border-2px-mountain-mist">
              <img className="noun-tick-162332-2" src="/img/noun-tick-162332-2@2x.svg" />
            </div>
          </div>
          <div className="flex-col-5">
            <div className="flex-row-10 graphik-medium-mine-shaft-14px">
              <div className="data-type-1 valign-text-middle">{dataType}</div>
              <div className="project-type valign-text-middle">{projectType}</div>
              <div className="project-configuration valign-text-middle">{projectConfiguration}</div>
              <div className="performers-configuration valign-text-middle">{performersConfiguration}</div>
              <div className="upload-your-data valign-text-middle">{uploadYourData}</div>
              <div className="confirm-choices valign-text-middle">{confirmChoices}</div>
            </div>
            <div className="flex">
              <div className="flex" style={{marginTop:"4%",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
               <div className="flex" style={{display:"flex",justifyContent:"space-around",width:"70%"}}>
                 {/* <div style={{display:"flex",justifyContent:"space-evenly",marginLeft:"45%"}}>
                    
                     <ArrowCircleRightOutlinedIcon sx={{color:isArrow2?"var(--tradewind)":"lightgrey",cursor:"pointer"}} onClick={handleArrow2}/>
                  </div> */}
               </div>
                <div  style={{display:"flex",marginLeft:"10%",marginRight:"15%",marginTop:"1%"}}>
                
                  <ReactSlider/>
                
                   <div className="overlap-group1-2 border-1px-black-5" style={{height:"220px"}}>
                    <div className="flex-row-13">
                      <div className="something-else valign-text-middle graphik-normal-mine-shaft-18px">
                        {somethingElse}
                      </div>
                      <img className="interrogation-5" src="/img/interrogation-5@2x.svg" />
                    </div>
                    <input type="text" placeholder="Enter your Feedback" className="overlap-group2-1 border-1px-black-2"/>
                    <button type="submit" style={{cursor:"pointer",border:"none"}} className="overlap-group-6">
                      <div className="submit valign-text-middle graphik-bold-white-14px">{submit}</div>
                    </button>
                  </div>
                </div>
                <div className="overlap-group-container-1" style={{marginLeft:"60%"}}>
                  <button type="submit" className="overlap-group16-1 border-1px-tradewind" style={{cursor:"pointer"}}>
                    <div className="cancel valign-text-middle graphik-bold-tradewind-18px">{cancel}</div>
                  </button>
                  <button type="submit" className={`overlap-group14`} style={{cursor:"pointer",border:"none",backgroundColor:location?.state?.dataId!=undefined?"#4daaa7":"#7c908f"}} onClick={()=>{
                     if(location?.state?.dataId!=undefined)
                     {
                      history.push({
                        pathname: '/project-type',
                        state: { dataId: location?.state?.dataId}
                    });
                     }
                  }}>
                    <div className="next-1 valign-text-middle graphik-bold-white-18px">{next}</div>
                  </button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataType;
