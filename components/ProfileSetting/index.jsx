import React from "react";
import Header from "../CommonFiles/Header/Header";
import Sidebar from "../CommonFiles/Sidebar/Sidebar";
import Group21291 from "../Group21291";
import "./ProfileSetting.css";

function ProfileSetting(props) {
  const {
    dashboard,
    projects1,
    integration,
    settings,
    logOut,
    availableFunds,
    price,
    kisspngComputerIconsAvatarBusinessC1,
    hamdi,
    hamdi459GmailCom,
    myProfile,
    profile,
    billing,
    kisspngComputerIconsAvatarBusinessC2,
    showMyPersonalNameToLabelers,
    showMyCompanyNameToLabelers,
    hideMyInformation,
    pictureSetting,
    personalInformation,
    fullName,
    workEmail,
    phoneNumber,
    companyInformation,
    companyName,
    companySize,
    country1,
    country2,
    jobTitle,
    seniorityLevel,
    changePassword1,
    oldPassword,
    newPassword,
    confirmPassword,
    city,
    howManyAllProjectsYouWorkOn,
    theAverageTimelienOfEachWork,
    usageOfThisWebsite,
    save1,
    save2,
    changePassword2,
    projects2,
    notification,
    team,
  } = props;

  return (
    <div className="container-center-horizontal" style={{width:"100%"}}>
    <div className="profile-setting screen">
    <Sidebar/>
    <Header/>
        <div className="flex" style={{width:"80%",marginTop:"3%",marginLeft:"-38%",paddingRight:"4%"}}>
          <div className="my-profile valign-text-middle graphik-bold-mine-shaft-32px" style={{marginRight:"20%"}}>{myProfile}</div>
          <div className="overlap-group6-1 graphik-medium-mine-shaft-18px">
            <div className="overlap-group2-2" style={{width:"60%"}}>
              <div className="rectangle-22582 border-1px-black-3"></div>
              <div className="rectangle-22631"></div>
              <div className="profile valign-text-middle graphik-bold-white-18px">{profile}</div>
              <div className="billing valign-text-middle graphik-medium-mine-shaft-18px">{billing}</div>
              <img className="kisspng-computer-ico-3" src={kisspngComputerIconsAvatarBusinessC2} />
              <div className="overlap-group-8">
                <img className="noun-upload-2225491-1" src="/img/noun-upload-2225491-1@2x.svg" />
              </div>
              <div className="show-my-personal-name-to-labelers valign-text-middle graphik-regular-normal-star-dust-17px">
                {showMyPersonalNameToLabelers}
              </div>
              <div className="show-my-company-name-to-labelers valign-text-middle graphik-regular-normal-star-dust-17px">
                {showMyCompanyNameToLabelers}
              </div>
              <div className="ellipse-689 border-1px-black"></div>
              <div className="ellipse-693 border-1px-black"></div>
              <div className="ellipse-694 border-1px-black"></div>
              <div className="hide-my-information valign-text-middle graphik-regular-normal-star-dust-17px">
                {hideMyInformation}
              </div>
              <div className="rectangle-22634 border-1px-black-2"></div>
              <Group21291 />
              <div className="picture-setting valign-text-middle graphik-bold-mine-shaft-18px">{pictureSetting}</div>
              <div className="personal-information valign-text-middle graphik-bold-mine-shaft-18px">
                {personalInformation}
              </div>
              <div className="full-name-1 valign-text-middle graphik-medium-mine-shaft-15px">{fullName}</div>
              <input placeholder="Name" type="text" className="rectangle-22583 border-1px-black-2" style={{paddingLeft:"4%"}}/>
              <div className="work-email-1 valign-text-middle graphik-medium-mine-shaft-15px">{workEmail}</div>
              <input type="text" placeholder="Email" className="rectangle-22635 border-1px-black-2" style={{paddingLeft:"4%"}}/>
              <div className="phone-number valign-text-middle graphik-medium-mine-shaft-15px">{phoneNumber}</div>
              <input type="text" placeholder="Number" className="rectangle-22636 border-1px-black-2" style={{paddingLeft:"4%"}}/>
              <div className="company-information valign-text-middle graphik-bold-mine-shaft-18px">
                {companyInformation}
              </div>
              <div className="company-name valign-text-middle graphik-medium-mine-shaft-15px">{companyName}</div>
              <input placeholder="Name" type="text" className="rectangle-22641 border-1px-black-2" style={{paddingLeft:"4%"}}/>
              <div className="company-size valign-text-middle graphik-medium-mine-shaft-15px">{companySize}</div>
              <div className="rectangle-22642 border-1px-black-2"></div>
              <div className="country valign-text-middle graphik-medium-mine-shaft-15px">{country1}</div>
              <div className="rectangle-22643 border-1px-black-2"></div>
              <div className="country-1 valign-text-middle graphik-medium-mine-shaft-15px">{country2}</div>
              <div className="rectangle-22637 border-1px-black-2"></div>
              <img className="noun-down-1920957-1" src="/img/noun-down-1920957-1@2x.svg" />
              <div className="job-title valign-text-middle graphik-medium-mine-shaft-15px">{jobTitle}</div>
              <input type="text" placeholder="Job Title" className="rectangle-22638 border-1px-black-2" style={{paddingLeft:"4%"}}/>
              <div className="seniority-level valign-text-middle graphik-medium-mine-shaft-15px">{seniorityLevel}</div>
              <div className="rectangle-22639 border-1px-black-2"></div>
              <img className="noun-down-1920957-3" src="/img/noun-down-1920957-1@2x.svg" />
              <img className="noun-down-1920957-5" src="/img/noun-down-1920957-5@2x.svg" />
              <img className="noun-down-1920957-6" src="/img/noun-down-1920957-1@2x.svg" />
              <div className="change-password valign-text-middle graphik-bold-mine-shaft-18px">{changePassword1}</div>
              <div className="old-password valign-text-middle graphik-medium-mine-shaft-15px">{oldPassword}</div>
              <input placeholder="Old Password" type="text" className="rectangle-22648 border-1px-black-2" style={{paddingLeft:"3%"}}/>
              <div className="new-password valign-text-middle graphik-medium-mine-shaft-15px">{newPassword}</div>
              <input placeholder="New Password" type="text" className="rectangle-22649 border-1px-black-2" style={{paddingLeft:"3%"}}/>
              <div className="confirm-password valign-text-middle graphik-medium-mine-shaft-15px">
                {confirmPassword}
              </div>
              <input placeholder="Confirm Password" type="text" className="rectangle-22650 border-1px-black-2" style={{paddingLeft:"3%"}}/>
              <div className="city valign-text-middle graphik-medium-mine-shaft-15px">{city}</div>
              <div className="rectangle-22644 border-1px-black-2"></div>
              <p className="how-many-all-projects-you-work-on valign-text-middle graphik-medium-mine-shaft-15px">
                {howManyAllProjectsYouWorkOn}
              </p>
              <div className="rectangle-22645 border-1px-black-2"></div>
              <img className="noun-down-1920957-7" src="/img/noun-down-1920957-1@2x.svg" />
              <img className="noun-down-1920957-8" src="/img/noun-down-1920957-1@2x.svg" />
              <p className="the-average-timelien-of-each-work valign-text-middle graphik-medium-mine-shaft-16px">
                {theAverageTimelienOfEachWork}
              </p>
              <div className="rectangle-22646 border-1px-black-2"></div>
              <img className="noun-down-1920957-9" src="/img/noun-down-1920957-1@2x.svg" />
              <div className="usage-of-this-website valign-text-middle graphik-medium-mine-shaft-15px">
                {usageOfThisWebsite}
              </div>
              <div className="rectangle-22640 border-1px-black-2"></div>
              <img className="noun-down-1920957-4" src="/img/noun-down-1920957-1@2x.svg" />
              <div className="rectangle-22440"></div>
              <div className="save valign-text-middle graphik-bold-white-18px">{save1}</div>
              <img className="line-769" src="/img/line-769@1x.svg" />
              <div className="rectangle-22647"></div>
              <div className="save-1 valign-text-middle graphik-bold-white-18px">{save2}</div>
              <img className="line-770" src="/img/line-769@1x.svg" />
              <div className="rectangle-22651"></div>
              <div className="change-password-1 valign-text-middle graphik-bold-white-18px" style={{cursor:"pointer"}}>Change Password</div>
            </div>
            <div className="projects-3 valign-text-middle">{projects2}</div>
            <div className="notification valign-text-middle">{notification}</div>
            <div className="team valign-text-middle">{team}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetting;
