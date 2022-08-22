import React,{useState} from "react";
import Header from "../CommonFiles/Header/Header";
import Sidebar from "../CommonFiles/Sidebar/Sidebar";
import "./ProjectType2.css";
import axios from "axios";
import {useHistory,useLocation} from "react-router-dom";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import CommonCard from "./CommonCard";
import ReactSlider1 from "./ReactSlider1";

function ProjectType2(props) {
  const[isArrow1,setIsArrow1]=useState(false);
   const[isArrow2,setIsArrow2]=useState(false);
   const location=useLocation();
   const [resultProjectData,setResultProjectData]=useState([]);
   console.log(location);
const handleData=async()=>{
  console.log("Welcome")
  var config = {
    method: 'post',
    url: "https://teqh2iqnkg.execute-api.us-east-1.amazonaws.com/Krowdy-UAT/krowdy_data/add_process",
    data: {
      user_id:location?.state?.userId,
      project_type_id:location?.state?.dataId
    },
    headers: { }
  };
  console.log(config.data)
 await axios(config)
  .then(function (response) {
    console.log(response)
    setResultProjectData(response.data)
    console.log(response.data)
  }).catch(function (error) {
    console.log(error);
  });

}
console.log(resultProjectData);
const handleArrow1=event=>{
  setIsArrow1(current=>!current)
  setIsArrow2(false)
}
const handleArrow2=event=>{
  setIsArrow2(current=>!current)
  setIsArrow1(false)
}
  const history = useHistory();
  const {
    dashboard,
    projects,
    integration,
    settings,
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
    dataCollectionsProjects,
    arabicSentimentalAnalysis,
    limitations1,
    sedUtPerspiciatis1,
    sedUtPerspiciatisUnde1,
    dolorSitAmetConsectetur1,
    loremIpsumDolorSitAmetConsectetur1,
    asLowAs04PerWord1,
    intentionRecognition,
    sedUtPerspiciatis2,
    limitations2,
    sedUtPerspiciatisUnde2,
    loremIpsumDolorSitAmetConsectetur2,
    dolorSitAmetConsectetur2,
    namedEntityRecognitior,
    sedUtPerspiciatis3,
    limitations3,
    sedUtPerspiciatisUnde3,
    loremIpsumDolorSitAmetConsectetur3,
    dolorSitAmetConsectetur3,
    asLowAs04PerWord2,
    asLowAs04PerWord3,
    seeYouSoon,
    iAmInterested,
    somethingElse,
    insertYourFeedback,
    submit,
    place,
    next,
  } = props;

  return (
    <div className="container-center-horizontal" style={{width:"100%"}}>
    <div className="project-type-3 screen">
    <Sidebar/>
    <Header/>
        <div className="flex" style={{width:"75%",marginLeft:"-39.5%",marginRight:"6.5%",paddingBottom:"4%"}}>
          <div className="flex" style={{marginTop:"9%"}}>
            <div className="create-new-project-3 valign-text-middle graphik-bold-mine-shaft-32px">
              {createNewProject}
            </div>
          </div>
          <div className="group-container-8">
            <div className="overlap-group15-3"  style={{cursor:"pointer"}}>
              <img className="noun-office-3622982-1-2" src="/img/noun-office-3622982-1@2x.svg" />
            </div>
            <img className="group-15" src="/img/group-2@2x.svg" />
            <div className="overlap-group18-2"  style={{cursor:"pointer"}}>
              <img className="start-up-2-2" src="/img/start-up-2-1@2x.svg" />
            </div>
            <img className="group-16" src="/img/group-2@2x.svg" />
            <div className="overlap-group11-3 border-2px-mountain-mist"  style={{cursor:"pointer"}}>
              <img className="noun-configuration-2118962-1-2" src="/img/noun-configuration-2118962-1@2x.svg" />
            </div>
            <img className="group-17" src="/img/group-3@2x.svg" />
            <div className="overlap-group16-3 border-2px-mountain-mist"  style={{cursor:"pointer"}}>
              <img className="noun-user-setting-2931823-1-2" src="/img/noun-user-setting-2931823-1@2x.svg" />
            </div>
            <img className="group-18" src="/img/group-3@2x.svg" />
            <div className="overlap-group20-1 border-2px-mountain-mist"  style={{cursor:"pointer"}}>
              <img className="noun-upload-1920885-1-2" src="/img/noun-upload-1920885-1@2x.svg" />
            </div>
            <img className="group-19" src="/img/group-3@2x.svg" />
            <div className="overlap-group17-2 border-2px-mountain-mist"  style={{cursor:"pointer"}}>
              <img className="noun-tick-162332-2-2" src="/img/noun-tick-162332-2@2x.svg" />
            </div>
          </div>
          <div className="flex" style={{display:"flex",flexDirection:"column"}}>
            <div className="flex-row-29 graphik-medium-mine-shaft-14px">
              <div className="data-type-3 valign-text-middle">{dataType}</div>
              <div className="project-type-4 valign-text-middle">{projectType}</div>
              <div className="project-configuration-2 valign-text-middle">{projectConfiguration}</div>
              <div className="performers-configuration-2 valign-text-middle">{performersConfiguration}</div>
              <div className="upload-your-data-2 valign-text-middle">{uploadYourData}</div>
              <div className="confirm-choices-2 valign-text-middle">{confirmChoices}</div>
            </div>
            <div className="flex" style={{marginTop:"5%",display:"flex",flexDirection:"column",marginLeft:"2%"}}>
              <div className="flex" style={{display:"flex",justifyContent:"space-around",width:"70%"}}>
              
              </div>
              <div className="flex" style={{display:"flex",justifyContent:"space-evenly",marginTop:"1%"}}>
                
                 <ReactSlider1/>
               
              <div className="overlap-group14-2" style={{marginRight:"2%",marginTop:"4%",padding:"2%"}}>
                <div className="flex-row-31">
                  <div className="something-else-2 valign-text-middle graphik-normal-mine-shaft-18px">
                   {somethingElse}
                  </div>
                  <img className="interrogation-5-2" src="/img/interrogation-5-2@2x.svg" />
                </div>
                <input type="text" placeholder="Enter your Feedback" className="overlap-group23-2 border-1px-black-2"/> 
                <div className="overlap-group-13" onClick={()=>console.log("Submitted")} style={{cursor:"pointer"}}>
                  <div className="submit-2 valign-text-middle graphik-bold-white-14px">{submit}</div>
                </div>
              </div>
              </div>
            </div>
            <div className="overlap-group-container-4">
                  <div className="overlap-group19-2">
                    <div className="see-you-soon valign-text-middle graphik-medium-white-11px">{seeYouSoon}</div>
                    <img className="noun-smiley-1646631-1" src="/img/noun-smiley-1646631-1@2x.svg" />
                  </div>
                  <div className="overlap-group12-3">
                    <div className="i-am-interested-1 valign-text-middle graphik-medium-white-11px">
                      {iAmInterested}
                    </div>
                    <img className="noun-thumb-1960234-1-1" src="/img/noun-thumb-1960234-1-1@2x.svg" />
                  </div>
                </div>
            <div className="overlap-group-container-5" style={{marginLeft:"65%"}} >
              <div className="overlap-group6-3 border-1px-tradewind" onClick={()=>history.push('/data-type')} style={{cursor:"pointer"}}>
                <div className="place-1 valign-text-middle graphik-bold-tradewind-18px">{place}</div>
              </div>
              <div className="overlap-group13-2" onClick={()=>{
                handleData()
                //  if(location?.state?.dataId!=undefined)
                //  {
                //   history.push({
                //     pathname: '/project-t',
                //     state: { dataId: location?.state?.dataId}
                // });
                //  }
                if(resultProjectData.length>0)
                {
                  console.log(resultProjectData[1].process_id)
                  {
                      history.push({
                        pathname: '/projects-configuration',
                        state: { processId: resultProjectData[1].process_id}
                    });
                     }
                  console.log("Clicked")
                }
              }} style={{cursor:"pointer",backgroundColor:location?.state?.userId?"#4daaa7":"#7c908f"}} >
                <div className="next-3 valign-text-middle graphik-bold-white-18px">{next}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectType2;
