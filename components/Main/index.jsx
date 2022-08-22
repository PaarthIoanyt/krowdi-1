import React from "react";
import Header from "../CommonFiles/Header/Header";
import Sidebar from "../CommonFiles/Sidebar/Sidebar";
import Group21093 from "../Group21093";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Group21094 from "../Group21094";
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import "./Main.css";
import FormControl from '@mui/material/FormControl';
import {useHistory} from "react-router-dom";
function Main(props) {
  const history=useHistory();
  var name=localStorage.getItem('name');
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
    helloHamdi,
    createNewProject,
    sedUtPerspiciatis,
    search,
    navbarLinkProjectTitle,
    navbarLinkType,
    navbarLinkStatus,
    navbarLinkCreatedDate,
    navbarLinkCloseDate,
    navbarLinkCompleation,
    holoData1,
    imageToText1,
    activeProject1,
    percent1,
    pendingProject1,
    holoData2,
    imageToText2,
    percent2,
    holoData3,
    imageToText3,
    rejectedProject1,
    percent3,
    holoData4,
    imageToText4,
    percent4,
    activeProject2,
    holoData5,
    imageToText5,
    activeProject3,
    percent5,
    pendingProject2,
    holoData6,
    imageToText6,
    percent6,
    holoData7,
    imageToText7,
    rejectedProject2,
    percent7,
    previcous,
    number1,
    number2,
    number3,
    number4,
    number5,
    next,
    group210931Props,
    group210941Props,
    group210932Props,
    group210942Props,
    group210933Props,
    group210943Props,
    group210934Props,
    group210944Props,
    group210935Props,
    group210945Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="main screen" >
        <Sidebar/>
        <Header/>
        <div className="flex" style={{width:"75%",marginLeft:"-39%",marginRight:"6%",paddingBottom:"4%"}}>
          <div className="flex-row-4" style={{marginTop:"10%"}}>
            <div className="hello-hamdi valign-text-middle graphik-bold-mine-shaft-32px">Hello {name. split(" ")[0]}</div>
            <img className="smiling-face-1" src="/img/smiling-face-1@2x.svg"  />
           <div style={{display:"flex",justifyContent:"space-evenly",marginLeft:"auto",alignSelf:"self-end"}}>
           <button className="overlap-group23" style={{cursor:"pointer",border:"none"}}>
           <div  onClick={()=>{
            history.push('/data-type')
           }} className="create-new-project valign-text-middle graphik-bold-white-18px" style={{cursor:"pointer"}}>{createNewProject}</div>
         </button>
         <div className="overlap-group19" style={{width:"10%"}}>
           <img className="option-1-1" src="/img/option--1--1@2x.svg" />
         </div>
           </div>
          </div>
          <div className="flex-row-5" style={{marginTop:"5%"}}>
            <p className="sed-ut-perspiciatis valign-text-middle graphik-regular-normal-star-dust-15px">
              
              {sedUtPerspiciatis}
            </p>
              <div>
                <Box className="search-container" sx={{ display: 'flex', alignItems: 'flex-end',paddingTop:"8%" }}>
                  <SearchIcon sx={{color:"var(--tradewind)"}}/>
                  <TextField id="input-with-sx" variant="standard" label="Search" sx={{paddingLeft:"3%"}} />
                </Box>
            
              </div>
            </div>
          <div className="flex-col-1 border-1px-black-5">
            <div className="flex-col-2">
              <div className="navbar-link-container graphik-normal-tradewind-16px">
                <div className="navbar-link-project-title valign-text-middle">{navbarLinkProjectTitle}</div>
                <div className="navbar-link-type valign-text-middle">{navbarLinkType}</div>
                <div className="navbar-link-status valign-text-middle">{navbarLinkStatus}</div>
                <div className="navbar-link-created-date valign-text-middle">{navbarLinkCreatedDate}</div>
                <div className="navbar-link-close-date valign-text-middle">{navbarLinkCloseDate}</div>
                <div className="navbar-link-compleation valign-text-middle">{navbarLinkCompleation}</div>
              </div>
                <img className="line-670" src="/img/line-670@1x.svg" />
                {/* <div class="flex-row-5 graphik-medium-star-dust-14px">
                <div class="holo-data-1 valign-text-middle">Holo Data</div>
                <div class="image-to-text valign-text-middle">Image To Text</div>
                <div class="overlap-group">
                  <div class="active-project valign-text-middle graphik-medium-tradewind-10px">Active Project</div>
                </div>
                <div class="group-21">
                  <div class="date valign-text-middle graphik-medium-star-dust-14px">3/5/2022</div>
                  <img class="calendar-4-1" src="img/calendar--4--1@2x.svg" />
                </div>
                <div class="group-21-1">
                  <div class="date valign-text-middle graphik-medium-star-dust-14px">3/5/2022</div>
                  <img class="calendar-4-1-1" src="img/calendar--4--1@2x.svg" />
                </div>
                <div class="overlap-group10">
                  <div class="percent valign-text-middle graphik-medium-star-dust-14px">80%</div>
                  <div class="group-21112-1">
                    <div class="rectangle-22445-3"></div>
                  </div>
                </div>
              </div> */}
              <div className="overlap-group2 graphik-medium-star-dust-14px">
                <div className="overlap-group-2">
                  <div className="pending-project valign-text-middle graphik-medium-carrot-orange-10px">
                    {pendingProject1}
                  </div>
                </div>
                <img className="line-67" src="/img/line-670@1x.svg" />
                <img className="line-67-1" src="/img/line-674@1x.svg" />
                <div className="holo-data-2 valign-text-middle">{holoData2}</div>
                <div className="image-to-text-2 valign-text-middle">{imageToText2}</div>
                <Group21093 className={group210931Props.className} />
                <Group21094 className={group210941Props.className} />
                <div className="rectangle-2243" style={{backgroundColor:"transparent"}}></div>
                <div className="overlap-group1-1">
                  <div className="percent valign-text-middle graphik-medium-star-dust-14px">{percent2}</div>
                  <div className="group-21112">
                    <div className="rectangle-22445"></div>
                  </div>
                </div>
              </div>
             
              <div className="overlap-group2 graphik-medium-star-dust-14px">
                <img className="line-677" src="/img/line-678@1x.svg" />
                <img className="line-67-1" src="/img/line-676@1x.svg" />
                <div className="rectangle-22438"></div>
                <div className="holo-data valign-text-middle">{holoData4}</div>
                <div className="image-to-text-1 valign-text-middle">{imageToText4}</div>
                <Group21093 className={group210933Props.className} />
                <Group21094 className={group210943Props.className} />
                <div className="overlap-group16">
                  <div className="percent valign-text-middle graphik-medium-star-dust-14px">{percent4}</div>
                  <div className="group-21112">
                    <div className="rectangle-22445-1"></div>
                  </div>
                </div>
                <div className="overlap-group17">
                  <div className="active-project valign-text-middle graphik-medium-tradewind-10px">
                    {activeProject2}
                  </div>
                </div>
              </div>
            
              <div className="overlap-group28 graphik-medium-star-dust-14px">
                <div className="overlap-group-2">
                  <div className="pending-project valign-text-middle graphik-medium-carrot-orange-10px">
                    {pendingProject2}
                  </div>
                </div>
                <img className="line-67" src="/img/line-670@1x.svg" />
                <img className="line-678" src="/img/line-678@1x.svg" />
                <div className="rectangle-2243" style={{backgroundColor:"transparent"}}></div>
                <div className="holo-data valign-text-middle">{holoData6}</div>
                <div className="image-to-text-1 valign-text-middle">{imageToText6}</div>
                <Group21093 className={group210935Props.className} />
                <Group21094 className={group210945Props.className} />
                <div className="overlap-group1-1">
                  <div className="percent valign-text-middle graphik-medium-star-dust-14px">{percent6}</div>
                  <div className="group-21112">
                    <div className="rectangle-22445"></div>
                  </div>
                </div>
              </div>
              <div className="overlap-group2 graphik-medium-star-dust-14px">
                <div className="overlap-group-2">
                  <div className="pending-project valign-text-middle graphik-medium-carrot-orange-10px">
                    {pendingProject1}
                  </div>
                </div>
                <img className="line-67" src="/img/line-670@1x.svg" />
                <img className="line-67-1" src="/img/line-674@1x.svg" />
                <div className="holo-data-2 valign-text-middle">{holoData2}</div>
                <div className="image-to-text-2 valign-text-middle">{imageToText2}</div>
                <Group21093 className={group210931Props.className} />
                <Group21094 className={group210941Props.className} />
                <div className="rectangle-2243"></div>
                <div className="overlap-group1-1">
                  <div className="percent valign-text-middle graphik-medium-star-dust-14px">{percent2}</div>
                  <div className="group-21112">
                    <div className="rectangle-22445"></div>
                  </div>
                </div>
              </div>
             
              <div className="overlap-group2 graphik-medium-star-dust-14px">
                <img className="line-677" src="/img/line-678@1x.svg" />
                <img className="line-67-1" src="/img/line-676@1x.svg" />
                <div className="rectangle-22438" style={{backgroundColor:"transparent"}}></div>
                <div className="holo-data valign-text-middle">{holoData4}</div>
                <div className="image-to-text-1 valign-text-middle">{imageToText4}</div>
                <Group21093 className={group210933Props.className} />
                <Group21094 className={group210943Props.className} />
                <div className="overlap-group16">
                  <div className="percent valign-text-middle graphik-medium-star-dust-14px">{percent4}</div>
                  <div className="group-21112">
                    <div className="rectangle-22445-1"></div>
                  </div>
                </div>
                <div className="overlap-group17">
                  <div className="active-project valign-text-middle graphik-medium-tradewind-10px">
                    {activeProject2}
                  </div>
                </div>
              </div>
            
              <div className="overlap-group28 graphik-medium-star-dust-14px">
                <div className="overlap-group-2">
                  <div className="pending-project valign-text-middle graphik-medium-carrot-orange-10px">
                    {pendingProject2}
                  </div>
                </div>
                <img className="line-67" src="/img/line-670@1x.svg" />
                <img className="line-678" src="/img/line-678@1x.svg" />
                <div className="rectangle-2243"></div>
                <div className="holo-data valign-text-middle">{holoData6}</div>
                <div className="image-to-text-1 valign-text-middle">{imageToText6}</div>
                <Group21093 className={group210935Props.className} />
                <Group21094 className={group210945Props.className} />
                <div className="overlap-group1-1">
                  <div className="percent valign-text-middle graphik-medium-star-dust-14px">{percent6}</div>
                  <div className="group-21112">
                    <div className="rectangle-22445"></div>
                  </div>
                </div>
              </div>

            </div>
            
          </div>
         <div style={{marginTop:"4%",marginLeft:"30%"}}>
          <Pagination  count={10} sx={{
            ".MuiPaginationItem-root.Mui-selected":{
              backgroundColor:"#4daaa7"
            }
          }} />
         </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
