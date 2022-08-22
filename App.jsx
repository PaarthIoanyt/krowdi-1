import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Main from "./components/Main";
import DataType from "./components/DataType";
import ProfileSetting from "./components/ProfileSetting";
import ProjectType from "./components/ProjectType";
import ProjectType2 from "./components/ProjectType2";
import ProjectsConfiguration from "./components/ProjectsConfiguration";
import ConfirmChoices from "./components/ConfirmChoices";
import ProjectsConfiguration2 from "./components/ProjectsConfiguration2";
import UploadData from "./components/UploadData";
import PerfomersConfiguration from "./components/PerfomersConfiguration";
import CreateAccount from "./components/CreateAccount";
import ReactSlider from "./components/DataType/ReactSlider";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";


function App() {
  return (

     <div className="App" style={{marginLeft:"2%",marginRight:"auto"}}>
         <Router>
      <Switch>
        <Route path="/:path(|sign-in)">
          <SignIn
            signIn1="Sign in"
            fullName="Full Name"
            workEmail="Work Email"
            rememberMe="Remember me"
            forgotPassword="Forgot Password"
            signIn2="Sign in"
            youDontHaveAnAccountYet="You dont have an account yet?"
          />
        </Route>
        <Route path="/forgetPassword">
          <ForgetPassword/>
        </Route>
        <Route path="/resetPassword">
            <ResetPassword/>
        </Route>
        <Route path="/create-account">
          <CreateAccount
            title="Create Account"
            fullName="Full Name"
            workEmail="Work Email"
            password="Password"
            confirmPassword="Confirm Password"
            create="Create"
          />
        </Route>
        <Route path="/main">
          <Main {...mainData} />
        </Route>
        <Route path="/reactSlider">
          <ReactSlider/>
        </Route>
        <Route path="/data-type">
          <DataType {...dataTypeData} />
        </Route>
        <Route path="/profile-setting">
          <ProfileSetting {...profileSettingData} />
        </Route>
        <Route path="/project-type-1">
          <ProjectType {...projectTypeData} />
        </Route>
        <Route path="/project-type">
          <ProjectType2 {...projectType2Data} />
        </Route>
        <Route path="/projects-configuration-1">
          <ProjectsConfiguration {...projectsConfigurationData} />
        </Route>
        <Route path="/confirm-choices">
          <ConfirmChoices {...confirmChoicesData} />
        </Route>
        <Route path="/projects-configuration">
          <ProjectsConfiguration2 {...projectsConfiguration2Data} />
        </Route>
        <Route path="/upload-data">
          <UploadData {...uploadDataData} />
        </Route>
        <Route path="/perfomers-configuration">
          <PerfomersConfiguration {...perfomersConfigurationData} />
        </Route>
       
      </Switch>
    </Router>
     </div>
  );
}

export default App;
const group210932Data = {
    className: "group-21-1",
};

const group210942Data = {
    className: "group-21-4",
};

const group210933Data = {
    className: "group-21098",
};

const group210943Data = {
    className: "group-21099",
};

const group210934Data = {
    className: "group-21101",
};

const group210944Data = {
    className: "group-21102",
};

const group210935Data = {
    className: "group-21104",
};

const group210945Data = {
    className: "group-21105",
};

const group210936Data = {
    className: "group-21-1",
};

const group210946Data = {
    className: "group-21-4",
};

const mainData = {
    dashboard: "Dashboard",
    projects: "Projects",
    integration: "Integration",
    settings: "Settings",
    logOut: "Log Out",
    availableFunds: "Available Funds:",
    price: "$500.56",
    kisspngComputerIconsAvatarBusinessC: "/img/kisspng-computer-icons-avatar-business-computer-software-user-av@2x.png",
    hamdi: "Hamdi",
    hamdi459GmailCom: "hamdi459@gmail.com",
    helloHamdi: "Hello , Hamdi",
    createNewProject: "Create New Project",
    sedUtPerspiciatis: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque",
    search: "Search",
    navbarLinkProjectTitle: "Project Title",
    navbarLinkType: "Type",
    navbarLinkStatus: "Status",
    navbarLinkCreatedDate: "Created Date",
    navbarLinkCloseDate: "Close  Date",
    navbarLinkCompleation: "Compleation %",
    holoData1: "Holo Data",
    imageToText1: "Image To Text",
    activeProject1: "Active Project",
    percent1: "80%",
    pendingProject1: "Pending Project",
    holoData2: "Holo Data",
    imageToText2: "Image To Text",
    percent2: "60%",
    holoData3: "Holo Data",
    imageToText3: "Image To Text",
    rejectedProject1: "Rejected Project",
    percent3: "90%",
    holoData4: "Holo Data",
    imageToText4: "Image To Text",
    percent4: "90%",
    activeProject2: "Active Project",
    holoData5: "Holo Data",
    imageToText5: "Image To Text",
    activeProject3: "Active Project",
    percent5: "40%",
    pendingProject2: "Pending Project",
    holoData6: "Holo Data",
    imageToText6: "Image To Text",
    percent6: "60%",
    holoData7: "Holo Data",
    imageToText7: "Image To Text",
    rejectedProject2: "Rejected Project",
    percent7: "40%",
    previcous: "Previcous",
    number1: "1",
    number2: "2",
    number3: "3",
    number4: "4",
    number5: "5",
    next: "Next",
    group210931Props: group210932Data,
    group210941Props: group210942Data,
    group210932Props: group210933Data,
    group210942Props: group210943Data,
    group210933Props: group210934Data,
    group210943Props: group210944Data,
    group210934Props: group210935Data,
    group210944Props: group210945Data,
    group210935Props: group210936Data,
    group210945Props: group210946Data,
};

const profileSettingData = {
    dashboard: "Dashboard",
    projects1: "Projects",
    integration: "Integration",
    settings: "Settings",
    logOut: "Log Out",
    availableFunds: "Available Funds:",
    price: "$500.56",
    kisspngComputerIconsAvatarBusinessC1: "/img/kisspng-computer-icons-avatar-business-computer-software-user-av-2@2x.png",
    hamdi: "Hamdi",
    hamdi459GmailCom: "hamdi459@gmail.com",
    myProfile: "My Profile",
    profile: "Profile",
    billing: "Billing",
    kisspngComputerIconsAvatarBusinessC2: "/img/kisspng-computer-icons-avatar-business-computer-software-user-av-3@2x.png",
    showMyPersonalNameToLabelers: "Show my personal name to labelers",
    showMyCompanyNameToLabelers: "Show my Company name to labelers",
    hideMyInformation: "Hide my information",
    pictureSetting: "Picture Setting",
    personalInformation: "Personal Information",
    fullName: "Full Name",
    workEmail: "Work Email",
    phoneNumber: "Phone Number",
    companyInformation: "Company Information",
    companyName: "Company Name",
    companySize: "Company Size",
    country1: "Country",
    country2: "Country",
    jobTitle: "Job Title",
    seniorityLevel: "Seniority Level",
    changePassword1: "Change Password",
    oldPassword: "Old Password",
    newPassword: "New Password",
    confirmPassword: "Confirm Password",
    city: "City",
    howManyAllProjectsYouWorkOn: "How many all projects you work on?",
    theAverageTimelienOfEachWork: "The Average timelien of each work:",
    usageOfThisWebsite: "Usage Of This Website",
    save1: "Save",
    save2: "Save",
    changePassword2: "Change Password",
    projects2: "Projects",
    notification: "Notification",
    team: "Team",
};

const group212912Data = {
    className: "group-21291-1",
};

const uploadDataData = {
    dashboard: "Dashboard",
    projects: "Projects",
    integration: "Integration",
    settings: "Settings",
    logOut: "Log Out",
    availableFunds: "Available Funds:",
    price: "$500.56",
    seeInstructionsAndUploadYourData: "See instructions and upload your data:",
    hamdi: "Hamdi",
    hamdi459GmailCom: "hamdi459@gmail.com",
    kisspngComputerIconsAvatarBusinessC: "/img/kisspng-computer-icons-avatar-business-computer-software-user-av-2@2x.png",
    projectConfiguration: "Project Configuration",
    performersConfiguration: "Performers Configuration",
    integrationSettings: "Integration settings:",
    somethingElse: "Something else?",
    insertYourFeedback: "Insert your Feedback",
    submit: "Submit",
    awsS31: "AWS S3",
    awsS32: "AWS S3",
    awsS33: "AWS S3",
    createNewProject: "Create new project",
    dataType: "Data Type",
    projectType: "Project Type",
    uploadYourData: "Upload Your Data",
    confirmChoices: "Confirm Choices",
    place: "Back",
    next: "Next",
    group21291Props: group212912Data,
};

const dataTypeData = {
    dashboard: "Dashboard",
    projects: "Projects",
    integration: "Integration",
    settings: "Settings",
    logOut: "Log Out",
    availableFunds: "Available Funds:",
    price: "$500.56",
    kisspngComputerIconsAvatarBusinessC: "/img/kisspng-computer-icons-avatar-business-computer-software-user-av@2x.png",
    hamdi: "Hamdi",
    hamdi459GmailCom: "hamdi459@gmail.com",
    createNewProject: "Create new project",
    dataType: "Data Type",
    projectType: "Project Type",
    projectConfiguration: "Project Configuration",
    performersConfiguration: "Performers Configuration",
    uploadYourData: "Upload Your Data",
    confirmChoices: "Confirm Choices",
    typeOfDataToBeLabeled: "Type Of Data To Be Labeled:",
    arabicText: "Arabic Text",
    sedUtPerspiciatis1: "Sed ut perspiciatis unde omnisiste natu.",
    image: "Image",
    sedUtPerspiciatis2: "Sed ut perspiciatis unde omnisiste natu.",
    arabicAudio: "Arabic Audio",
    sedUtPerspiciatis3: "Sed ut perspiciatis unde omnisiste natu.",
    youNeedData: "You Need Data",
    sedUtPerspiciatis4: "Sed ut perspiciatis unde omnisiste natu.",
    somethingElse: "Something else?",
    insertYourFeedback: "Insert your Feedback",
    submit: "Submit",
    cancel: "Cancel",
    next: "Next",
};

const projectTypeData = {
    dashboard: "Dashboard",
    projects: "Projects",
    integration: "Integration",
    settings: "Settings",
    logOut: "Log Out",
    availableFunds: "Available Funds:",
    price: "$500.56",
    kisspngComputerIconsAvatarBusinessC: "/img/kisspng-computer-icons-avatar-business-computer-software-user-av@2x.png",
    hamdi: "Hamdi",
    hamdi459GmailCom: "hamdi459@gmail.com",
    createNewProject: "Create new project",
    dataType: "Data Type",
    projectType: "Project Type",
    projectConfiguration: "Project Configuration",
    performersConfiguration: "Performers Configuration",
    uploadYourData: "Upload Your Data",
    confirmChoices: "Confirm Choices",
    dataCollectionsProjects: "Data collections projects:",
    arabicSentimentalAnalysis: "Arabic Sentimental Analysis",
    limitations1: "Limitations:",
    sedUtPerspiciatis1: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    sedUtPerspiciatisUnde1: "Sed ut perspiciatis unde",
    dolorSitAmetConsectetur1: "dolor sit amet, consectetur",
    loremIpsumDolorSitAmetConsectetur1: "Lorem ipsum dolor sit amet, consectetur",
    asLowAs04PerWord1: "As low as 0.4 per word",
    intentionRecognition: "Intention Recognition",
    sedUtPerspiciatis2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    limitations2: "Limitations:",
    sedUtPerspiciatisUnde2: "Sed ut perspiciatis unde",
    loremIpsumDolorSitAmetConsectetur2: "Lorem ipsum dolor sit amet, consectetur",
    dolorSitAmetConsectetur2: "dolor sit amet, consectetur",
    namedEntityRecognitior: "Named-Entity Recognitior",
    sedUtPerspiciatis3: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    limitations3: "Limitations:",
    sedUtPerspiciatisUnde3: "Sed ut perspiciatis unde",
    loremIpsumDolorSitAmetConsectetur3: "Lorem ipsum dolor sit amet, consectetur",
    dolorSitAmetConsectetur3: "dolor sit amet, consectetur",
    asLowAs04PerWord2: "As low as 0.4 per word",
    asLowAs04PerWord3: "As low as 0.4 per word",
    iAmInterested1: "I am interested",
    iAmInterested2: "I am interested",
    somethingElse: "Something else?",
    insertYourFeedback: "Insert your Feedback",
    submit: "Submit",
    place: "Back",
    next: "Next",
};

const projectType2Data = {
    dashboard: "Dashboard",
    projects: "Projects",
    integration: "Integration",
    settings: "Settings",
    logOut: "Log Out",
    availableFunds: "Available Funds:",
    price: "$500.56",
    kisspngComputerIconsAvatarBusinessC: "/img/kisspng-computer-icons-avatar-business-computer-software-user-av@2x.png",
    hamdi: "Hamdi",
    hamdi459GmailCom: "hamdi459@gmail.com",
    createNewProject: "Create new project",
    dataType: "Data Type",
    projectType: "Project Type",
    projectConfiguration: "Project Configuration",
    performersConfiguration: "Performers Configuration",
    uploadYourData: "Upload Your Data",
    confirmChoices: "Confirm Choices",
    dataCollectionsProjects: "Data collections projects:",
    arabicSentimentalAnalysis: "Arabic Sentimental Analysis",
    limitations1: "Limitations:",
    sedUtPerspiciatis1: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    sedUtPerspiciatisUnde1: "Sed ut perspiciatis unde",
    dolorSitAmetConsectetur1: "dolor sit amet, consectetur",
    loremIpsumDolorSitAmetConsectetur1: "Lorem ipsum dolor sit amet, consectetur",
    asLowAs04PerWord1: "As low as 0.4 per word",
    intentionRecognition: "Intention Recognition",
    sedUtPerspiciatis2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    limitations2: "Limitations:",
    sedUtPerspiciatisUnde2: "Sed ut perspiciatis unde",
    loremIpsumDolorSitAmetConsectetur2: "Lorem ipsum dolor sit amet, consectetur",
    dolorSitAmetConsectetur2: "dolor sit amet, consectetur",
    namedEntityRecognitior: "Named-Entity Recognitior",
    sedUtPerspiciatis3: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    limitations3: "Limitations:",
    sedUtPerspiciatisUnde3: "Sed ut perspiciatis unde",
    loremIpsumDolorSitAmetConsectetur3: "Lorem ipsum dolor sit amet, consectetur",
    dolorSitAmetConsectetur3: "dolor sit amet, consectetur",
    asLowAs04PerWord2: "As low as 0.4 per word",
    asLowAs04PerWord3: "As low as 0.4 per word",
    seeYouSoon: "See you soon!",
    iAmInterested: "I am interested",
    somethingElse: "Something else?",
    insertYourFeedback: "Insert your Feedback",
    submit: "Submit",
    place: "Back",
    next: "Next",
};

const projectsConfigurationData = {
    dashboard: "Dashboard",
    projects: "Projects",
    integration: "Integration",
    settings: "Settings",
    logOut: "Log Out",
    availableFunds: "Available Funds:",
    price1: "$500.56",
    kisspngComputerIconsAvatarBusinessC: "/img/kisspng-computer-icons-avatar-business-computer-software-user-av-2@2x.png",
    hamdi: "Hamdi",
    hamdi459GmailCom: "hamdi459@gmail.com",
    createNewProject: "Create new project",
    dataType: "Data Type",
    projectType: "Project Type",
    projectConfiguration: "Project Configuration",
    performersConfiguration: "Performers Configuration",
    uploadYourData: "Upload Your Data",
    confirmChoices: "Confirm Choices",
    arabicSentimentalAnalysis: "Arabic sentimental analysis",
    taskTitle: "Task Title",
    nameOfTheTaskShownForPerformers1: "Name of the task shown for performers:",
    taskDescription: "Task Description",
    instructionOfTheTaskForPerformers: "Instruction of the task for performers",
    defineYourCategories: "Define Your Categories:",
    happy1: "/img/happy-1@2x.png",
    positive: "Positive",
    insertAnExampleOfPositiveTest: "Insert an example of positive test",
    neutral11: "/img/neutral--1--1@2x.png",
    natural: "Natural",
    insertAnExampleOfNaturalTest: "Insert an example of natural test",
    sad1: "/img/sad-1@2x.png",
    negative: "Negative",
    insertAnExampleOfNegativeTest: "Insert an example of negative test",
    options: "Options:",
    nameOfTheTaskShownForPerformers2: "Name of the task shown for performers:",
    nameOfTheTaskShownForPerformers3: "Name of the task shown for performers:",
    applyValidationProcess: "Apply validation process:",
    price2: "$",
    text1: "$$",
    text2: "$$$",
    place: "Back",
    next: "Next",
};

const confirmChoicesData = {
    dashboard: "Dashboard",
    projects: "Projects",
    integration: "Integration",
    settings: "Settings",
    logOut: "Log Out",
    availableFunds: "Available Funds:",
    price1: "$500.56",
    kisspngComputerIconsAvatarBusinessC: "/img/kisspng-computer-icons-avatar-business-computer-software-user-av-2@2x.png",
    hamdi: "Hamdi",
    hamdi459GmailCom: "hamdi459@gmail.com",
    createNewProject: "Create new project",
    dataType1: "Data Type",
    projectType1: "Project Type",
    projectConfiguration: "Project Configuration",
    performersConfiguration: "Performers Configuration",
    uploadYourData: "Upload Your Data",
    confirmChoices: "Confirm Choices",
    reviewProject: "Review Project",
    basicInfo: "Basic Info",
    dataType2: "Data Type:",
    audioUpload: "Audio Upload",
    projectType2: "Project Type:",
    loremIpsumDolarSit: "Lorem Ipsum Dolar sit",
    fileName: "File Name:",
    rajaWaleed: "Raja Waleed",
    performersConfig: "Performers Config",
    age: "Age:",
    address: "25 Years",
    nationality: "Nationality:",
    pakistani: "Pakistani",
    sex: "Sex:",
    male: "Male",
    residency: "Residency:",
    place1: "Rawalpindi",
    projectInfo: "Project Info",
    projectName: "Project name",
    notes: "Notes",
    totalCost: "Total Cost:",
    price2: "$500",
    youStillCanCancel: <React.Fragment>You still can cancel this project later <br />before it get approved</React.Fragment>,
    place2: "Back",
    submit: "Submit",
};

const projectsConfiguration2Data = {
    dashboard: "Dashboard",
    projects: "Projects",
    integration: "Integration",
    settings: "Settings",
    logOut: "Log Out",
    availableFunds: "Available Funds:",
    price1: "$500.56",
    kisspngComputerIconsAvatarBusinessC: "/img/kisspng-computer-icons-avatar-business-computer-software-user-av-2@2x.png",
    hamdi: "Hamdi",
    hamdi459GmailCom: "hamdi459@gmail.com",
    createNewProject: "Create new project",
    dataType: "Data Type",
    projectType: "Project Type",
    projectConfiguration: "Project Configuration",
    performersConfiguration: "Performers Configuration",
    uploadYourData: "Upload Your Data",
    confirmChoices: "Confirm Choices",
    arabicSentimentalAnalysis: "Arabic sentimental analysis",
    taskTitle: "Task Title",
    nameOfTheTaskShownForPerformers1: "Name of the task shown for performers:",
    taskDescription: "Task Description",
    instructionOfTheTaskForPerformers: "Instruction of the task for performers",
    defineYourCategories: "Define Your Categories:",
    xButton1: "/img/x-button-1@2x.png",
    categorySuccessfullyRemoved: "Category successfully removed.",
    happy1: "/img/happy-1@2x.png",
    positive: "Positive",
    insertAnExampleOfPositiveTest: "Insert an example of positive test",
    neutral11: "/img/neutral--1--1@2x.png",
    natural: "Natural",
    insertAnExampleOfNaturalTest: "Insert an example of natural test",
    addCategory: "Add Category",
    options: "Options:",
    nameOfTheTaskShownForPerformers2: "Name of the task shown for performers:",
    nameOfTheTaskShownForPerformers3: "Name of the task shown for performers:",
    applyValidationProcess: "Apply validation process:",
    price2: "$",
    text3: "$$",
    text4: "$$$",
    place: "Back",
    next: "Next",
};

const perfomersConfigurationData = {
    dashboard: "Dashboard",
    projects: "Projects",
    integration: "Integration",
    settings: "Settings",
    logOut: "Log Out",
    availableFunds: "Available Funds:",
    price: "$500.56",
    kisspngComputerIconsAvatarBusinessC: "/img/kisspng-computer-icons-avatar-business-computer-software-user-av-2@2x.png",
    hamdi: "Hamdi",
    hamdi459GmailCom: "hamdi459@gmail.com",
    createNewProject: "Create new project",
    dataType: "Data Type",
    projectType: "Project Type",
    projectConfiguration: "Project Configuration",
    performersConfiguration: "Performers Configuration",
    uploadYourData: "Upload Your Data",
    confirmChoices: "Confirm Choices",
    quickSetup: "Quick setup:",
    costOptimization: "Cost optimization",
    highestAccuracyInArabicFusha: "Highest accuracy in Arabic (Fusha)",
    regulatoryComplianceIn: "Regulatory compliance in",
    country: "Country",
    specificInterestIn: "Specific interest in",
    interest: "Interest",
    basis: "Basis:",
    age: "Age",
    sex: "Sex",
    nationality: "Nationality",
    residency: "Residency",
    details: "Details:",
    sedUtPerspiciatis: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,",
    somethingElse: "Something else?",
    insertYourFeedback: "Insert your Feedback",
    submit: "Submit",
    place: "Back",
    next: "Next",
};
