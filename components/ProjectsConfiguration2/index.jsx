import React from "react";
import Header from "../CommonFiles/Header/Header";
import Sidebar from "../CommonFiles/Sidebar/Sidebar";
import "./ProjectsConfiguration2.css";
import {useHistory,useLocation} from "react-router-dom";

function ProjectsConfiguration2(props) {
  const history=useHistory();
  const location=useLocation();
  console.log(location)
  const {
    dashboard,
    projects,
    integration,
    settings,
    logOut,
    availableFunds,
    price1,
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
    arabicSentimentalAnalysis,
    taskTitle,
    nameOfTheTaskShownForPerformers1,
    taskDescription,
    instructionOfTheTaskForPerformers,
    defineYourCategories,
    xButton1,
    categorySuccessfullyRemoved,
    happy1,
    positive,
    insertAnExampleOfPositiveTest,
    neutral11,
    natural,
    insertAnExampleOfNaturalTest,
    addCategory,
    options,
    nameOfTheTaskShownForPerformers2,
    nameOfTheTaskShownForPerformers3,
    applyValidationProcess,
    price2,
    text3,
    text4,
    place,
    next,
  } = props;

  return (
    <div className="container-center-horizontal" style={{width:"100%"}}>
      <div className="projects-configuration screen">
        <Sidebar/>
        <Header/>
        <div className="flex" style={{width:"75%",marginLeft:"-37%",marginRight:"4%",paddingBottom:"4%"}}>
          <div className="flex" style={{marginTop:"9%"}}>
           
            <div className="create-new-project-6 valign-text-middle graphik-bold-mine-shaft-32px">
              {createNewProject}
            </div>
          </div>
          <div className="group-container-14">
            <div className="overlap-group7-6">
              <img className="noun-office-3622982-1-5" src="/img/noun-office-3622982-1-5@2x.svg" />
            </div>
            <img className="group-34" src="/img/group-21@2x.svg" />
            <div className="overlap-group10-6">
              <img className="start-up-2-5" src="/img/start-up-2-5@2x.svg" />
            </div>
            <img className="group-35" src="/img/group-21@2x.svg" />
            <div className="overlap-group9-5">
              <img className="noun-configuration-2118962-1-5" src="/img/noun-configuration-2118962-1-5@2x.svg" />
            </div>
            <img className="group-36" src="/img/group-21@2x.svg" />
            <div className="overlap-group8-6 border-2px-mountain-mist">
              <img className="noun-user-setting-2931823-1-5" src="/img/noun-user-setting-2931823-1-3@2x.svg" />
            </div>
            <img className="group-37" src="/img/group-24@2x.svg" />
            <div className="overlap-group6-6 border-2px-mountain-mist">
              <img className="noun-upload-1920885-1-4" src="/img/noun-upload-1920885-1-3@2x.svg" />
            </div>
            <img className="group-38" src="/img/group-24@2x.svg" />
            <div className="overlap-group11-5 border-2px-mountain-mist">
              <img className="noun-tick-162332-2-4" src="/img/noun-tick-162332-2-3@2x.svg" />
            </div>
          </div>
          <div className="flex-col-32">
            <div className="flex-row-50 graphik-medium-mine-shaft-14px">
              <div className="data-type-7 valign-text-middle">{dataType}</div>
              <div className="project-type-8 valign-text-middle">{projectType}</div>
              <div className="project-configuration-5 valign-text-middle">{projectConfiguration}</div>
              <div className="performers-configuration-5 valign-text-middle">{performersConfiguration}</div>
              <div className="upload-your-data-5 valign-text-middle">{uploadYourData}</div>
              <div className="confirm-choices-6 valign-text-middle">{confirmChoices}</div>
            </div>
            <div className="flex-col-33 border-1px-black-3">
              <div className="flex-col-34">
                <div className="arabic-sentimental-analysis-3 valign-text-middle graphik-bold-mine-shaft-18px">
                  {arabicSentimentalAnalysis}
                </div>
                <div className="task-title-1 valign-text-middle graphik-medium-mine-shaft-15px">{taskTitle}</div>
                <input type="text" placeholder="Name of the task shown for performers:" className="overlap-group13-5 border-1px-black-2"/>
                 
                <div className="task-description-1 valign-text-middle graphik-medium-mine-shaft-15px">
                  {taskDescription}
                </div>
                <input type="text" placeholder="Instruction of the task for performers" className="overlap-group18-4 border-1px-black-2" />
                
                <div className="overlap-group19-4">
                  <div className="define-your-categories-1 valign-text-middle graphik-bold-mine-shaft-18px">
                    {defineYourCategories}
                  </div>
                  <div className="overlap-group2-6">
                    <img className="icon-close" src={xButton1} />
                    <div className="category-successfully-removed valign-text-middle">
                      {categorySuccessfullyRemoved}
                    </div>
                  </div>
                </div>
                <div className="overlap-group-container-7">
                  <div className="overlap-group15-6">
                    <img className="noun-cross-1707162-1" src="/img/noun-cross-1707162-1@2x.svg" style={{cursor:"pointer"}} />
                    <img className="happy-1-1" src={happy1} />
                    <div className="positive-1 valign-text-middle graphik-bold-mine-shaft-20px">{positive}</div>
                    <input type="text" placeholder="Insert an example of positive test" className="overlap-group21-1 border-1px-black-2" />
                     
                  </div>
                  <div className="overlap-group14-5">
                    <img className="noun-cross-1707162-1" src="/img/noun-cross-1707162-1@2x.svg" style={{cursor:"pointer"}} />
                    <img className="neutral-1-1-1" src={neutral11} />
                    <div className="natural-1 valign-text-middle graphik-bold-mine-shaft-20px">{natural}</div>
                    <input type="text" placeholder="Insert an example of natural test" className="overlap-group22-3 border-1px-black-2"/>
                     
                  </div>
                  <div className="overlap-group14-5" style={{height:"20%",paddingTop:"4%"}}>
                    <img className="noun-add-2419031-1" src="/img/noun-add-2419031-1@2x.svg" style={{cursor:"pointer"}} />
                    <div className="add-category valign-text-middle">Add Category</div>
                  </div>
                </div>
              </div>
              <div className="flex-row-51">
                <div className="flex-col-35">
                  <div className="tion-container-1">
                    <div className="options-1 valign-text-middle graphik-bold-mine-shaft-18px">{options}</div>
                    <img className="interrogation-5-4" src="/img/interrogation-5-4@2x.svg" />
                  </div>
                  <div className="flex-row-52">
                    <div className="ellipse-6-1 border-1px-black"></div>
                    <div className="name-of-the-task-shown-for-performers-4 valign-text-middle graphik-medium-star-dust-17px">
                      {nameOfTheTaskShownForPerformers2}
                    </div>
                  </div>
                  <div className="flex-row-53">
                    <div className="ellipse-6-1 border-1px-black"></div>
                    <div className="name-of-the-task-shown-for-performers-5 valign-text-middle graphik-medium-star-dust-17px">
                      {nameOfTheTaskShownForPerformers3}
                    </div>
                  </div>
                </div>
                <img className="line-768-1" src="/img/line-768@2x.svg" />
                <div className="flex-col-36">
                  <div className="ation-container-3">
                    <div className="apply-validation-process-1 valign-text-middle graphik-bold-mine-shaft-18px">
                      {applyValidationProcess}
                    </div>
                    <img className="interrogation-6-3" src="/img/interrogation-5-4@2x.svg" />
                  </div>
                  <div className="overlap-group12-5">
                    <div className="rectangle-22589-1"></div>
                    <div className="rectangle-22590-1"></div>
                    <div className="rectangle-22729-1"></div>
                    <div className="rectangle-22730-1"></div>
                    <div className="rectangle-22731-1"></div>
                  </div>
                  <div className="flex-row-54 graphik-medium-mine-shaft-12px">
                    <div className="price-10 valign-text-middle">{price2}</div>
                    <div className="text-3 valign-text-middle">{text3}</div>
                    <div className="text-4 valign-text-middle">{text4}</div>
                  </div>
                  <div className="group-21284-2">
                    <button onClick={()=>{
                      history.push('/project-type')
                    }} className="overlap-group-19 border-1px-tradewind" style={{cursor:"pointer",backgroundColor:"transparent"}}>
                      <div className="place-5 valign-text-middle graphik-bold-tradewind-18px">{place}</div>
                    </button>
                    <button onClick={()=>{
                      history.push('/perfomers-configuration')
                    }} className="overlap-group1-9" style={{cursor:"pointer",border:"none"}}>
                      <div className="next-5 valign-text-middle graphik-bold-white-18px">{next}</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsConfiguration2;
