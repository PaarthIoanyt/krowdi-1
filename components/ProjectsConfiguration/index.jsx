import React from "react";
import Header from "../CommonFiles/Header/Header";
import Sidebar from "../CommonFiles/Sidebar/Sidebar";
import "./ProjectsConfiguration.css";
import {useHistory} from "react-router-dom";
function ProjectsConfiguration(props) {
  const history = useHistory();
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
    happy1,
    positive,
    insertAnExampleOfPositiveTest,
    neutral11,
    natural,
    insertAnExampleOfNaturalTest,
    sad1,
    negative,
    insertAnExampleOfNegativeTest,
    options,
    nameOfTheTaskShownForPerformers2,
    nameOfTheTaskShownForPerformers3,
    applyValidationProcess,
    price2,
    text1,
    text2,
    place,
    next,
  } = props;

  return (
    <div className="container-center-horizontal" style={{width:"100%"}}>
      <div className="projects-configuration-1 screen">
      <Sidebar/>
      <Header/>
        <div className="flex" style={{width:"75%",marginLeft:"-37%",marginRight:"4%",paddingBottom:"4%"}}>
          <div className="flex" style={{marginTop:"9%"}}>
            <div className="create-new-project-4 valign-text-middle graphik-bold-mine-shaft-32px">
              {createNewProject}
            </div>
          </div>
          <div className="group-container-10">
            <div className="overlap-group6-4">
              <img className="noun-office-3622982-1-3" src="/img/noun-office-3622982-1-3@2x.svg" />
            </div>
            <img className="group-22" src="/img/group-21@2x.svg" />
            <div className="overlap-group9-3">
              <img className="start-up-2-3" src="/img/start-up-2-3@2x.svg" />
            </div>
            <img className="group-23" src="/img/group-21@2x.svg" />
            <div className="overlap-group7-4">
              <img className="noun-configuration-2118962-1-3" src="/img/noun-configuration-2118962-1-3@2x.svg" />
            </div>
            <img className="group-24" src="/img/group-21@2x.svg" />
            <div className="overlap-group8-4 border-2px-mountain-mist">
              <img className="noun-user-setting-2931823-1-3" src="/img/noun-user-setting-2931823-1-3@2x.svg" />
            </div>
            <img className="group-25" src="/img/group-24@2x.svg" />
            <div className="overlap-group10-4 border-2px-mountain-mist">
              <img className="noun-upload-1920885-1-3" src="/img/noun-upload-1920885-1-3@2x.svg" />
            </div>
            <img className="group-26" src="/img/group-24@2x.svg" />
            <div className="overlap-group3-4 border-2px-mountain-mist">
              <img className="noun-tick-162332-2-3" src="/img/noun-tick-162332-2-3@2x.svg" />
            </div>
          </div>
          <div className="flex-col-21">
            <div className="flex-row-34 graphik-medium-mine-shaft-14px">
              <div className="data-type-4 valign-text-middle">{dataType}</div>
              <div className="project-type-5 valign-text-middle">{projectType}</div>
              <div className="project-configuration-3 valign-text-middle">{projectConfiguration}</div>
              <div className="performers-configuration-3 valign-text-middle">{performersConfiguration}</div>
              <div className="upload-your-data-3 valign-text-middle">{uploadYourData}</div>
              <div className="confirm-choices-3 valign-text-middle">{confirmChoices}</div>
            </div>
            <div className="flex-col-22 border-1px-black-3">
              <div className="flex-col-23">
                <div className="arabic-sentimental-analysis-2 valign-text-middle graphik-bold-mine-shaft-18px">
                  {arabicSentimentalAnalysis}
                </div>
                <div className="task-title valign-text-middle graphik-medium-mine-shaft-15px">{taskTitle}</div>
                <input type="text" placeholder="Name of the task shown for performers:" className="overlap-group15-4 border-1px-black-2"/>
                <div className="task-description valign-text-middle graphik-medium-mine-shaft-15px">
                  {taskDescription}
                </div>
                <input type="text" placeholder="Instruction of the task for performers" className="overlap-group18-3 border-1px-black-2" />
                <div className="define-your-categories valign-text-middle graphik-bold-mine-shaft-18px">
                  {defineYourCategories}
                </div>
                <div className="overlap-group-container-6">
                  <div className="overlap-group14-3">
                    <img className="noun-cross-1707162" src="/img/noun-cross-1707162-1@2x.svg" style={{cursor:"pointer"}} />
                    <img className="happy-1" src={happy1} />
                    <div className="positive valign-text-middle graphik-bold-mine-shaft-20px">{positive}</div>
                    <input type="text" placeholder="Insert an example of positive test" className="overlap-group19-3 border-1px-black-2"/>
                  </div>
                  <div className="overlap-group1-6">
                    <img className="noun-cross-1707162" src="/img/noun-cross-1707162-1@2x.svg" style={{cursor:"pointer"}} />
                    <img className="neutral-1-1" src={neutral11} />
                    <div className="natural valign-text-middle graphik-bold-mine-shaft-20px">{natural}</div>
                    <input type="text" placeholder="Insert an example of natural test" className="overlap-group20-2 border-1px-black-2" />
                  </div>
                  <div className="overlap-group1-6">
                    <img className="noun-cross-1707162" src="/img/noun-cross-1707162-1@2x.svg" style={{cursor:"pointer"}} />
                    <img className="sad-1" src={sad1} />
                    <div className="negative valign-text-middle graphik-bold-mine-shaft-20px">{negative}</div>
                    <input type="text" placeholder="Insert an example of negative test" className="overlap-group21 border-1px-black-2"/>
                      
                    
                  </div>
                </div>
              </div>
              <div className="flex-row-35">
                <div className="flex-col-24">
                  <div className="tion-container">
                    <div className="options valign-text-middle graphik-bold-mine-shaft-18px">{options}</div>
                    <img className="interrogation-5-3" src="/img/interrogation-5-3@2x.svg" />
                  </div>
                  <div className="flex-row-36">
                    <div className="ellipse-6 border-1px-black"></div>
                    <div className="name-of-the-task-shown-for-performers-1 valign-text-middle graphik-medium-star-dust-17px">
                      {nameOfTheTaskShownForPerformers2}
                    </div>
                  </div>
                  <div className="flex-row-37">
                    <div className="ellipse-6 border-1px-black"></div>
                    <div className="name-of-the-task-shown-for-performers-2 valign-text-middle graphik-medium-star-dust-17px">
                      {nameOfTheTaskShownForPerformers3}
                    </div>
                  </div>
                </div>
                <img className="line-768" src="/img/line-768@2x.svg" />
                <div className="flex-col-25">
                  <div className="ation-container-2">
                    <div className="apply-validation-process valign-text-middle graphik-bold-mine-shaft-18px">
                      {applyValidationProcess}
                    </div>
                    <img className="interrogation-6-2" src="/img/interrogation-5-3@2x.svg" />
                  </div>
                  <div className="overlap-group13-3">
                    <div className="rectangle-22589"></div>
                    <div className="rectangle-22590"></div>
                    <div className="rectangle-22729"></div>
                    <div className="rectangle-22730"></div>
                    <div className="rectangle-22731"></div>
                  </div>
                  <div className="flex-row-38 graphik-medium-mine-shaft-12px">
                    <div className="price-6 valign-text-middle">{price2}</div>
                    <div className="text-1 valign-text-middle">{text1}</div>
                    <div className="text-2 valign-text-middle">{text2}</div>
                  </div>
                  <div className="group-21284">
                    <button type="submit" className="overlap-group-15 border-1px-tradewind" onClick={()=>{
                      history.push('/project-type')
                    }}  style={{cursor:"pointer"}}>
                      <div className="place-2 valign-text-middle graphik-bold-tradewind-18px" style={{cursor:"pointer"}}>{place}</div>
                    </button>
                    <button type="submit" className="overlap-group1-7" onClick={()=>{
                      history.push('/perfomers-configuration')
                    }}  style={{cursor:"pointer",border:"none"}}>
                      <div className="next-4 valign-text-middle graphik-bold-white-18px" style={{cursor:"pointer"}}>{next}</div>
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

export default ProjectsConfiguration;
