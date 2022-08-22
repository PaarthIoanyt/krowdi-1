import React from "react";
import Header from "../CommonFiles/Header/Header";
import Sidebar from "../CommonFiles/Sidebar/Sidebar";
import "./ConfirmChoices.css";
import {useHistory} from "react-router-dom";
function ConfirmChoices(props) {
  const history=useHistory();
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
    dataType1,
    projectType1,
    projectConfiguration,
    performersConfiguration,
    uploadYourData,
    confirmChoices,
    reviewProject,
    basicInfo,
    dataType2,
    audioUpload,
    projectType2,
    loremIpsumDolarSit,
    fileName,
    rajaWaleed,
    performersConfig,
    age,
    address,
    nationality,
    pakistani,
    sex,
    male,
    residency,
    place1,
    projectInfo,
    projectName,
    notes,
    totalCost,
    price2,
    youStillCanCancel,
    place2,
    submit,
  } = props;

  return (
    <div className="container-center-horizontal" style={{width:"100%"}}>
      <div className="confirm-choices-4 screen">
       <Sidebar/>
       <Header/>
        <div className="flex" style={{width:"75%",marginLeft:"-37%",marginRight:"4%",paddingBottom:"4%"}}>
          <div className="flex" style={{marginTop:"9%"}}>
            <div className="create-new-project-5 valign-text-middle graphik-bold-mine-shaft-32px">
              {createNewProject}
            </div>
          </div>
          <div className="group-container-12">
            <div className="overlap-group8-5">
              <img className="noun-office-3622982-1-4" src="/img/noun-office-3622982-1-3@2x.svg" />
            </div>
            <img className="group-28" src="/img/group-21@2x.svg" />
            <div className="overlap-group10-5">
              <img className="start-up-2-4" src="/img/start-up-2-3@2x.svg" />
            </div>
            <img className="group-29" src="/img/group-21@2x.svg" />
            <div className="overlap-group2-5">
              <img className="noun-configuration-2118962-1-4" src="/img/noun-configuration-2118962-1-3@2x.svg" />
            </div>
            <img className="group-30" src="/img/group-21@2x.svg" />
            <div className="overlap-group9-4">
              <img className="noun-user-setting-2931823-1-4" src="/img/noun-user-setting-2931823-1-4@2x.svg" />
            </div>
            <img className="group-31" src="/img/group-21@2x.svg" />
            <div className="overlap-group5-2">
              <img className="icon-signal" src="/img/noun-upload-1920885-1-4@2x.svg" />
            </div>
            <img className="group-32" src="/img/group-21@2x.svg" />
            <div className="overlap-group7-5">
              <img className="icon-check_mark" src="/img/noun-tick-162332-2-4@2x.svg" />
            </div>
          </div>
          <div className="flex-col-28">
            <div className="flex-row-43 graphik-medium-mine-shaft-14px">
              <div className="data-type-5 valign-text-middle">{dataType1}</div>
              <div className="project-type-6 valign-text-middle">{projectType1}</div>
              <div className="project-configuration-4 valign-text-middle">{projectConfiguration}</div>
              <div className="performers-configuration-4 valign-text-middle">{performersConfiguration}</div>
              <div className="upload-your-data-4 valign-text-middle">{uploadYourData}</div>
              <div className="confirm-choices-5 valign-text-middle">{confirmChoices}</div>
            </div>
            <div className="overlap-group4-3 border-1px-black-3">
              <div className="flex-row-44">
                <div className="flex-col-29">
                  <div className="review-project valign-text-middle graphik-bold-mine-shaft-18px">{reviewProject}</div>
                  <div className="overlap-group12-4">
                    <div className="basic-info valign-text-middle graphik-normal-tradewind-14px">{basicInfo}</div>
                  </div>
                  <div className="flex-row-45">
                    <div className="data-type-6 valign-text-middle graphik-medium-mine-shaft-15px">{dataType2}</div>
                    <div className="audio-upload valign-text-middle graphik-regular-normal-storm-dust-14px">
                      {audioUpload}
                    </div>
                  </div>
                  <div className="flex-row-39">
                    <div className="project-type-7 valign-text-middle graphik-medium-mine-shaft-15px">
                      {projectType2}
                    </div>
                    <div className="lorem-ipsum-dolar-sit valign-text-middle graphik-regular-normal-storm-dust-14px">
                      {loremIpsumDolarSit}
                    </div>
                  </div>
                  <div className="flex-row-46">
                    <div className="file-name valign-text-middle graphik-medium-mine-shaft-15px">{fileName}</div>
                    <div className="raja-waleed valign-text-middle graphik-regular-normal-storm-dust-14px">
                      {rajaWaleed}
                    </div>
                  </div>
                  <div className="overlap-group13-4">
                    <div className="performers-config valign-text-middle graphik-normal-tradewind-14px">
                      {performersConfig}
                    </div>
                  </div>
                  <div className="flex-row-47">
                    <div className="age valign-text-middle graphik-medium-mine-shaft-15px">{age}</div>
                    <div className="address valign-text-middle graphik-regular-normal-storm-dust-14px">{address}</div>
                  </div>
                  <div className="flex-row-39">
                    <div className="nationality valign-text-middle graphik-medium-mine-shaft-15px">{nationality}</div>
                    <div className="pakistani valign-text-middle graphik-regular-normal-storm-dust-14px">
                      {pakistani}
                    </div>
                  </div>
                  <div className="flex-row-40">
                    <div className="sex valign-text-middle graphik-medium-mine-shaft-15px">{sex}</div>
                    <div className="male valign-text-middle graphik-regular-normal-storm-dust-14px">{male}</div>
                  </div>
                  <div className="flex-row-40">
                    <div className="residency valign-text-middle graphik-medium-mine-shaft-15px">{residency}</div>
                    <div className="place-3 valign-text-middle graphik-regular-normal-storm-dust-14px">{place1}</div>
                  </div>
                </div>
                <div className="overlap-group11-4 border-1px-black-5">
                  <div className="project-info valign-text-middle graphik-bold-mine-shaft-18px">{projectInfo}</div>
                  <input type="text" placeholder="Project Name" className="overlap-group16-4 border-1px-black-2" />
                  <input type="text" placeholder="Notes" className="overlap-group15-5 border-1px-black-2" />
                    
                  <div className="group-21285">
                    <div className="total-cost valign-text-middle graphik-medium-mine-shaft-15px">{totalCost}</div>
                    <div className="price-8 valign-text-middle graphik-bold-tradewind-36px">{price2}</div>
                  </div>
                  <div className="overlap-group14-4 border-1px-tradewind">
                    <img className="icon-information" src="/img/noun-information-405516-1@2x.svg" />
                    <p className="you-still-can-cancel valign-text-middle">{youStillCanCancel}</p>
                  </div>
                </div>
              </div>
              <div className="group-21284-1">
                <button className="overlap-group-17 border-1px-tradewind" style={{cursor:"pointer"}} onClick={()=>{
                  history.push('/upload-data')
                }}>
                  <div className="place-4 valign-text-middle graphik-bold-tradewind-18px">{place2}</div>
                </button>
                <button className="overlap-group1-8" style={{cursor:"pointer",border:"none"}} >
                  <div className="submit-3 valign-text-middle graphik-bold-white-18px">{submit}</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmChoices;
