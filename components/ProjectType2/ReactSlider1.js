import Carousel from 'react-elastic-carousel';
import Card from '@mui/material/Card';
import CommonCard from './CommonCard';
import React,{useState,useEffect} from "react";
import axios from "axios";
import "../DataType/ReactSlider1.css";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import {useLocation} from "react-router-dom";
import { bgcolor } from '@mui/system';
export default function ReactSlider1() {
  const[isArrow1,setIsArrow1]=useState(false);
  const[isArrow2,setIsArrow2]=useState(false);
  const[onSelect,setOnSelect]=useState({});
  const location=useLocation();
  var userId=localStorage.getItem("user_id");
  console.log(location);
  const[resultData,setResultData]=useState([]);
  const handleMouseEnter1 = () => {
    setIsArrow1(true);
  };
  useEffect(()=>{
    handleData();
},[])
let bgcolorr="red";
const handleData=async()=>{
  console.log("Welcome")
  var config = {
    method: 'get',
    url: "https://teqh2iqnkg.execute-api.us-east-1.amazonaws.com/Krowdy-UAT/krowdy_data/projectypes",
    params:{datatype_id:location?.state?.dataId},
    headers: { }
  };
  
 await axios(config)
  .then(function (response) {
    console.log(response.data)
    setResultData(response.data.Items)
  }).catch(function (error) {
    console.log(error);
  });

}
  const handleMouseLeave1 = () => {
    setIsArrow1(false)
  };   
  const handleMouseEnter2 = () => {
    setIsArrow2(true);
  };

  const handleMouseLeave2 = () => {
    setIsArrow2(false)
  };  
  return (
    <div style={{width:"1000px"}}>
        <div style={{display:'flex',justifyContent:"space-between",marginBottom:"2%"}}>
        <div className="data-collections-projects-1 valign-text-middle graphik-bold-mine-shaft-18px" >
            Data Collections projects
          </div>
        <div>
        <ArrowCircleLeftOutlinedIcon onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} onClick={() => this.carousel.slidePrev()} style={{cursor:"pointer",color:isArrow1?"#4daaa7":"lightgrey"}}/>
        <ArrowCircleRightOutlinedIcon onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} onClick={() => this.carousel.slideNext()} style={{cursor:"pointer",color:isArrow2?"#4daaa7":"lightgrey"}}/>
        </div>

      </div>
        <Carousel 
           showArrows={false}
          ref={ref => (this.carousel = ref)}
          itemsToShow={3} 
          
        
        >
          {
            resultData?.map((i,key)=>
            <CommonCard image="/img/noun-analysis-2521377-1@2x.svg"  limitDetails={i.project_type_limitations.SS} dataDetail={i.project_type_detail.S} text={i.project_type_name.S} projectId={i.project_type_id.S} userId={userId} currentState={{id:"1",state:false}} key={key} />
            // <div 
            // // className={onSelect?"red":"yellow"}
            //  onClick={()=>{
            //   setOnSelect(i);
            //   bgcolorr= i == onSelect? "yellow":"red";
            //   console.log("i",i,"onselect",onSelect,"---------------",i == onSelect? "yellow":"red");
            // }}>
            //   {console.log("bgcolorr",bgcolorr)}
            //   <CommonCard image="/img/noun-analysis-2521377-1@2x.svg"  limitDetails={i.project_type_limitations.SS} dataDetail={i.project_type_detail.S} text={i.project_type_name.S} projectId={i.project_type_id.S} userId={userId} currentState={{id:"1",state:false}} key={key} bgcolor={bgcolorr}/>
            // </div>
            
            )
          }
          
         
          
            {/* <CommonCard image="/img/noun-analysis-2521377-1@2x.svg" text="Arabic Sentimental Analysis"  currentState={{id:"1",state:false}}/>
            <CommonCard image="/img/noun-face-id-2965919-1@2x.svg" text="Intention Recognition"  currentState={{id:"2",state:false}}/>
            <CommonCard image="/img/noun-recognition-4304230-1@2x.svg" text="Named-Entity Recognitior"  currentState={{id:"3",state:false}}/>
            <CommonCard image="/img/noun-analysis-2521377-1@2x.svg" text="Arabic Sentimental Analysis"  currentState={{id:"1",state:false}}/>
            <CommonCard image="/img/noun-face-id-2965919-1@2x.svg" text="Intention Recognition"  currentState={{id:"2",state:false}}/>
            <CommonCard image="/img/noun-recognition-4304230-1@2x.svg" text="Named-Entity Recognitior"  currentState={{id:"3",state:false}}/>
            <CommonCard image="/img/noun-analysis-2521377-1@2x.svg" text="Arabic Sentimental Analysis"  currentState={{id:"1",state:false}}/>
            <CommonCard image="/img/noun-face-id-2965919-1@2x.svg" text="Intention Recognition"  currentState={{id:"2",state:false}}/>
            <CommonCard image="/img/noun-recognition-4304230-1@2x.svg" text="Named-Entity Recognitior"  currentState={{id:"3",state:false}}/>
            */}
                
        </Carousel>
    </div>
  );
}
