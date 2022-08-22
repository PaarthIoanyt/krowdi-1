import React,{useState} from "react";
import Header from "../CommonFiles/Header/Header";
import Sidebar from "../CommonFiles/Sidebar/Sidebar";
import Group21291 from "../Group21291";
import "./UploadData.css";
import {useHistory} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {FcViewDetails} from "react-icons/fc";
import {FcSelfServiceKiosk} from "react-icons/fc";
import {AiOutlineDropbox} from "react-icons/ai";
import {AiOutlineAmazon} from "react-icons/ai";

function UploadData(props) {
  const history=useHistory();
  const[isActive,setIsActive]=useState(false);
  const[isActive1,setIsActive1]=useState(false);
  const[isActive2,setIsActive2]=useState(false);
  const[isActive3,setIsActive3]=useState(false);
  const[isActive4,setIsActive4]=useState(false);

  const handleMouseEnter = () => {
      setIsActive(true);
    };
  
    const handleMouseLeave = () => {
      setIsActive(false)
    };
    const handleMouseEnter1 = () => {
      setIsActive1(true);
    };
  
    const handleMouseLeave1 = () => {
      setIsActive1(false)
    };
    const handleMouseEnter2 = () => {
      setIsActive2(true);
    };
  
    const handleMouseLeave2 = () => {
      setIsActive2(false)
    };
    const handleMouseEnter3 = () => {
      setIsActive3(true);
    };
  
    const handleMouseLeave3 = () => {
      setIsActive3(false)
    };
    const handleMouseEnter4 = () => {
      setIsActive4(true);
    };
  
    const handleMouseLeave4 = () => {
      setIsActive4(false)
    };
  const {
    dashboard,
    projects,
    integration,
    settings,
    logOut,
    availableFunds,
    price,
    seeInstructionsAndUploadYourData,
    hamdi,
    hamdi459GmailCom,
    kisspngComputerIconsAvatarBusinessC,
    projectConfiguration,
    performersConfiguration,
    integrationSettings,
    somethingElse,
    insertYourFeedback,
    submit,
    awsS31,
    awsS32,
    awsS33,
    createNewProject,
    dataType,
    projectType,
    uploadYourData,
    confirmChoices,
    place,
    next,
    group21291Props,
  } = props;

  return (
    <div className="container-center-horizontal">
    <div className="upload-data screen">
    <Sidebar/>
    <Header/>
    <div className="group-container-16" style={{width:"75%",marginLeft:"-35%",marginRight:"2%",paddingBottom:"4%"}}>
    <div className="overlap-group16-5">
    <div className="overlap-group9-6">
    <div className="see-instructions-and-upload-your-data valign-text-middle graphik-bold-mine-shaft-18px">
    {seeInstructionsAndUploadYourData}
    </div>
    <div className="project-configuration-6 valign-text-middle graphik-medium-mine-shaft-14px">
    {projectConfiguration}
    </div>
    <div className="performers-configuration-6 valign-text-middle graphik-medium-mine-shaft-14px">
    {performersConfiguration}
    </div>
              <div className="ellipse-698"></div>
              <img className="noun-configuration-2118962-1-6" src="/img/noun-configuration-2118962-1-5@2x.svg" />
              <div className="ellipse-699"></div>
              <img className="noun-user-setting-2931823-1-6" src="/img/noun-user-setting-2931823-1-4@2x.svg" />
              <img className="group-40" src="/img/group-21@2x.svg" />

            <div>
              <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"38%",marginBottom:"7%"}}>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundColor:isActive?"lightblue":"transparent",borderRadius:isActive?"15px":"none",border:isActive?"1px solid blue":"none",padding:isActive?"1%":"0%"}}>
                  <FcGoogle style={{height:"40px",width:"40px"}}/>
                </div>
                <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} style={{backgroundColor:isActive1?"lightblue":"transparent",borderRadius:isActive1?"15px":"none",border:isActive1?"1px solid blue":"none",padding:isActive1?"1%":"0%"}}>
                  <AiOutlineAmazon style={{height:"40px",width:"40px",color:"black"}}/>
                </div>
                <div onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} style={{backgroundColor:isActive2?"lightblue":"transparent",borderRadius:isActive2?"15px":"none",border:isActive2?"1px solid blue":"none",padding:isActive2?"1%":"0%"}}>
                  <AiOutlineDropbox style={{height:"40px",width:"40px",color:"blue"}}/>
                </div>
                <div onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} style={{backgroundColor:isActive3?"lightblue":"transparent",borderRadius:isActive3?"15px":"none",border:isActive3?"1px solid blue":"none",padding:isActive3?"1%":"0%"}}>
                  <FcSelfServiceKiosk style={{height:"40px",width:"40px"}}/>
                </div>
                <div onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} style={{backgroundColor:isActive4?"lightblue":"transparent",borderRadius:isActive4?"15px":"none",border:isActive4?"1px solid blue":"none",padding:isActive4?"1%":"0%"}}>
                  <FcViewDetails style={{height:"40px",width:"40px"}}/>
                </div> 
              </div>
              
                 
                   <div style={{display:"flex",justifyContent:"space-between"}}>
                   <div className="rectangle-22634-1 border-1px-black-2"></div>
                    <Group21291 className={group21291Props.className} />
              <div className="overlap-group1-10 border-1px-black-5">
                <div className="flex-row-57">
                  <div className="something-else-3 valign-text-middle graphik-normal-mine-shaft-18px">
                    {somethingElse}
                  </div>
                  <img className="interrogation-5-5" src="/img/interrogation-5-6@2x.svg" />
                </div>
                <input type="text" placeholder="Insert Your Feedback" className="overlap-group2-7 border-1px-black-2"/>
                <div className="overlap-group-21" style={{cursor:"pointer"}}>
                  <div className="submit-4 valign-text-middle graphik-bold-white-14px">{submit}</div>
                </div>
              </div>
                 </div>
                   </div>
              
              {/* <div className="overlap-group5-4">
                <div className="aws-s3 valign-text-middle graphik-bold-white-18px">{awsS31}</div>
              </div>
              <div className="overlap-group6-7">
                <div className="aws-s3 valign-text-middle graphik-bold-white-18px">{awsS32}</div>
              </div>
              <div className="overlap-group7-7">
                <div className="aws-s3 valign-text-middle graphik-bold-white-18px">{awsS33}</div>
              </div> */}
             
             
              <img className="interrogation-5-6" src="/img/interrogation-5-4@2x.svg" />
            </div>
            <div className="create-new-project-7 valign-text-middle graphik-bold-mine-shaft-32px">
              {createNewProject}
            </div>
            <div className="overlap-group13-6">
              <img className="noun-office-3622982-1-6" src="/img/noun-office-3622982-1-5@2x.svg" />
            </div>
            <div className="data-type-8 valign-text-middle graphik-medium-mine-shaft-14px">{dataType}</div>
            <div className="project-type-9 valign-text-middle graphik-medium-mine-shaft-14px">{projectType}</div>
            <div className="upload-your-data-6 valign-text-middle graphik-medium-mine-shaft-14px">{uploadYourData}</div>
            <div className="overlap-group11-6">
              <img className="start-up-2-6" src="/img/start-up-2-5@2x.svg" />
            </div>
            <div className="overlap-group12-6">
              <img className="icon-signal-1" src="/img/noun-upload-1920885-1-4@2x.svg" />
            </div>
            <div className="overlap-group10-7 border-2px-mountain-mist">
              <img className="noun-tick-162332-2-5" src="/img/noun-tick-162332-2-3@2x.svg" />
            </div>
            <img className="group-41" src="/img/group-21@2x.svg" />
            <img className="group-42" src="/img/group-21@2x.svg" />
            <img className="group-43" src="/img/group-21@2x.svg" />
            <img className="group-44" src="/img/group-21@2x.svg" />
            <div className="confirm-choices-7 valign-text-middle graphik-medium-mine-shaft-14px">{confirmChoices}</div>
          </div>
          <div className="group-21284-3">
            <button className="overlap-group3-6 border-1px-tradewind" style={{cursor:"pointer"}} onClick={()=>{
              history.push('/perfomers-configuration')
            }}>
              <div className="place-6 valign-text-middle graphik-bold-tradewind-18px">{place}</div>
            </button>
            <button className="overlap-group4-5" style={{cursor:"pointer",border:"none"}} onClick={()=>{
              history.push('/confirm-choices')
            }}>
              <div className="next-6 valign-text-middle graphik-bold-white-18px">{next}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadData;
