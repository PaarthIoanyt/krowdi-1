import React, { useState } from 'react';
import "./ProjectType2.css";
import { useHistory } from 'react-router-dom';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
function CommonCard(props) {
  const [isActive, setIsActive] = useState(false);
  const history=useHistory();
  //console.log(props)
//  console.log(props.limitDetails[0])


console.log(props.userId)
var color=props.bgcolor;
console.log(color);
 const handleClick=(data)=>{
  console.log(data)
  history.push({
    pathname: '/project-type',
    state: { dataId: data.projectId,userId:props.userId}
});
setIsActive(!isActive)
}
console.log("color",color, props);
  
  return (
    <>
      <div className="overlap-group8-3" style={{ cursor: "pointer", alignItems: "center", textAlign: "center", backgroundColor: "white", marginRight: "2%", paddingTop: "4%", borderRadius: "14px", border: isActive ? "1px solid  #c5d9d9" : "none"}} onClick={()=>handleClick(props)}>
        <img className="noun-recognition-4304230-1-1" src={props.image} />
        <div style={{ color: isActive ? "#333" : "grey", fontSize: "22px", fontWeight: "bolder" }}>
          {props.text}
        </div>
        <p style={{ color: isActive ? "#333" : "#9a9a9a", fontSize: "13px" }}>
          {props.dataDetail}
        </p>
        <div className="ation-container-1" style={{ marginLeft: "4%" }}>
          <div className="limitations-5 valign-text-middle graphik-normal-tradewind-14px" style={{ color: isActive ? "#4daaa7" : "grey" }}>
            Limitations:
          </div>
          <HelpOutlineIcon sx={{ color: isActive ? "#333" : "#9a9a9a", marginLeft: "30%" }} />
        </div>
        <div className="flex-row-24" style={{ marginLeft: "4%",wordBreak:"break-all" }}>
          <img className="noun-tick-162332-6" src="/img/noun-tick-162332-3@2x.svg" />
          <div className="sed-ut-perspiciatis-unde-2 valign-text-middle graphik-regular-normal-star-dust-12px" style={{ color: isActive ? "#333" : "#9a9a9a",wordBreak:"break-all" }}>
          { props.limitDetails[0].slice(0,26)}
          </div>
        </div>
        <div className="flex-row-25" style={{ marginLeft: "4%" }}>
          <img className="noun-tick-162332-7" src="/img/noun-tick-162332-3@2x.svg" />
          <div className="dolor-sit-amet-consectetur-2 valign-text-middle graphik-regular-normal-star-dust-12px" style={{ color: isActive ? "#333" : "#9a9a9a" }}>
            {props.limitDetails[1]}
          </div>
        </div>
        <div className="flex-row-26" style={{ marginLeft: "4%" }} >
          <img className="noun-tick-162332-6" src="/img/noun-tick-162332-3@2x.svg" />
          <p className="dolor-sit-amet-consectetur-2 valign-text-middle graphik-regular-normal-star-dust-12px" style={{ color: isActive ? "#333" : "#9a9a9a", }}>
            {props.limitDetails[2]}
          </p>
        </div>
        <div className="flex" style={{ backgroundColor: isActive ? "#e6f1f0" : "#f5fcfc", marginTop: "4%", marginRight: "10%", padding: "6%", paddingRight: "15%", marginLeft: "10%", borderRadius: "14px" }}>
          <p className="as-low-as-04-per-word-2 valign-text-middle graphik-medium-star-dust-12px" style={{ color: isActive ? "#333" : "#9a9a9a" }}>
            As low as 0.4 per word
          </p>
        </div>
      </div>
    </>
  )
}

export default CommonCard;