import React from "react";
import Header from "../CommonFiles/Header/Header";
import Sidebar from "../CommonFiles/Sidebar/Sidebar";
import "./PerfomersConfiguration.css";
import {useHistory} from "react-router-dom";

function PerfomersConfiguration(props) {
  const history=useHistory();
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
    quickSetup,
    costOptimization,
    highestAccuracyInArabicFusha,
    regulatoryComplianceIn,
    country,
    specificInterestIn,
    interest,
    basis,
    age,
    sex,
    nationality,
    residency,
    details,
    sedUtPerspiciatis,
    somethingElse,
    insertYourFeedback,
    submit,
    place,
    next,
  } = props;

  return (
    <div className="container-center-horizontal" style={{width:"100%"}}>
      <div className="perfomers-configuration screen">
       <Sidebar/>
       <Header/>
        <div className="flex" style={{width:"75%",marginLeft:"-38%",marginRight:"4%",paddingBottom:"4%"}}>
          <div className="flex" style={{marginTop:"9%"}}>
            <div className="create-new-project-8 valign-text-middle graphik-bold-mine-shaft-32px">
              {createNewProject}
            </div>
          </div>
          <div className="group-container-18">
            <div className="overlap-group13-7">
              <img className="noun-office-3622982-1-7" src="/img/noun-office-3622982-1-5@2x.svg" />
            </div>
            <img className="group-46" src="/img/group-21@2x.svg" />
            <div className="overlap-group11-7">
              <img className="start-up-2-7" src="/img/start-up-2-7@2x.svg" />
            </div>
            <img className="group-47" src="/img/group-21@2x.svg" />
            <div className="overlap-group6-8">
              <img className="noun-configuration-2118962-1-7" src="/img/noun-configuration-2118962-1-7@2x.svg" />
            </div>
            <img className="group-48" src="/img/group-21@2x.svg" />
            <div className="overlap-group9-7">
              <img className="noun-user-setting-2931823-1-7" src="/img/noun-user-setting-2931823-1-4@2x.svg" />
            </div>
            <img className="group-49" src="/img/group-21@2x.svg" />
            <div className="overlap-group15-7 border-2px-mountain-mist">
              <img className="noun-upload-1920885-1-5" src="/img/noun-upload-1920885-1-3@2x.svg" />
            </div>
            <img className="group-50" src="/img/group-24@2x.svg" />
            <div className="overlap-group14-7 border-2px-mountain-mist">
              <img className="noun-tick-162332-2-6" src="/img/noun-tick-162332-2-3@2x.svg" />
            </div>
          </div>
          <div className="flex-col-39">
            <div className="flex-row-60 graphik-medium-mine-shaft-14px">
              <div className="data-type-9 valign-text-middle">{dataType}</div>
              <div className="project-type-10 valign-text-middle">{projectType}</div>
              <div className="project-configuration-7 valign-text-middle">{projectConfiguration}</div>
              <div className="performers-configuration-7 valign-text-middle">{performersConfiguration}</div>
              <div className="upload-your-data-7 valign-text-middle">{uploadYourData}</div>
              <div className="confirm-choices-8 valign-text-middle">{confirmChoices}</div>
            </div>
            <div className="flex-col-40 border-1px-black-3">
              <div className="flex-col-41">
                <div className="overlap-group1-11">
                  <div className="quick-setup valign-text-middle graphik-bold-mine-shaft-18px">{quickSetup}</div>
                  <img className="interrogation-7-2" src="/img/interrogation-7-2@2x.svg" />
                </div>
                <div className="flex-row-61 graphik-medium-star-dust-17px">
                  <div className="ellipse-689-1 border-1px-black"></div>
                  <div className="cost-optimization valign-text-middle">{costOptimization}</div>
                  <div className="ellipse-702 border-1px-black"></div>
                  <div className="highest-accuracy-in-arabic-fusha valign-text-middle">
                    {highestAccuracyInArabicFusha}
                  </div>
                </div>
              </div>
              <div className="flex-row-62">
                <div className="ellipse-690 border-1px-black"></div>
                <div className="regulatory-compliance-in valign-text-middle graphik-medium-star-dust-17px">
                  {regulatoryComplianceIn}
                </div>
                <div className="overlap-group-24 border-1px-black-5">
                  <div className="country-2 valign-text-middle graphik-regular-normal-star-dust-15px">{country}</div>
                  <img className="noun-down-arrow-3523502-1" src="/img/noun-down-arrow-3523502-1@2x.svg" />
                </div>
                <div className="ellipse-703 border-1px-black"></div>
                <div className="specific-interest-in valign-text-middle graphik-medium-star-dust-17px">
                  {specificInterestIn}
                </div>
                <div className="overlap-group2-8 border-1px-black-5">
                  <div className="interest valign-text-middle graphik-regular-normal-star-dust-15px">{interest}</div>
                  <img className="noun-down-arrow-3523502-1" src="/img/noun-down-arrow-3523502-1@2x.svg" />
                </div>
              </div>
            </div>
            <div className="overlap-group10-8 graphik-medium-storm-dust-14px">
              <div className="flex-col-42">
                <div className="basis valign-text-middle graphik-bold-mine-shaft-18px">{basis}</div>
                <input type="number" placeholder="Age" className="overlap-group19-5 border-1px-black-2"/>
                  
              </div>
              <input type="text" placeholder="Sex" className="overlap-group-22 border-1px-black-2"/>
              <input type="text" placeholder="Nationality" className="overlap-group17-5 border-1px-black-2"/>
              <input type="text" placeholder="Residency" className="overlap-group-22 border-1px-black-2"/>
               
            </div>
            <div className="group-container-19 border-1px-black-3">
              <div className="group-21288">
                <div className="details valign-text-middle graphik-bold-mine-shaft-18px">{details}</div>
                <p className="sed-ut-perspiciatis-9 valign-text-middle">{sedUtPerspiciatis}</p>
              </div>
              <div className="overlap-group3-7 border-1px-black-5">
                <div className="flex-row-63">
                  <div className="something-else-4 valign-text-middle graphik-normal-mine-shaft-18px">
                    {somethingElse}
                  </div>
                  <img className="interrogation-5-7" src="/img/interrogation-5-7@2x.svg" />
                </div>
                <input type="text" placeHolder="Insert your Feedback" className="overlap-group1-12 border-1px-black-2" />
                <div className="overlap-group-25" style={{cursor:"pointer"}}>
                  <div className="submit-5 valign-text-middle graphik-bold-white-14px" >{submit}</div>
                </div>
              </div>
            </div>
            <div className="group-21284-4">
              <button type="submit" className="overlap-group4-6 border-1px-tradewind" style={{cursor:"pointer"}} onClick={()=>{
                  history.push('/projects-configuration')
              }}>
                <div className="place-7 valign-text-middle graphik-bold-tradewind-18px" >{place}</div>
              </button>
              <button type="submit" className="overlap-group5-5" style={{cursor:"pointer",border:"none"}} onClick={()=>{
                history.push('/upload-data')
              }}>
                <div className="next-7 valign-text-middle graphik-bold-white-18px" >{next}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfomersConfiguration;
