import Carousel from 'react-elastic-carousel';
import axios from "axios";
import React,{useState,useEffect} from "react";
import {useLocation} from "react-router-dom";
import Card from '@mui/material/Card';
import CommonCard from './CommonCard';
import "./ReactSlider1.css";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
export default function ReactSlider() {
  const[isArrow1,setIsArrow1]=useState(false);
  const[isArrow2,setIsArrow2]=useState(false);
  const[resultData,setResultData]=useState([]);
  const location=useLocation();
  // console.log(location);
  useEffect(()=>{
      handleData();
  },[])
  const handleData=async()=>{
    console.log("Welcome")
    var config = {
      method: 'get',
      url: 'https://teqh2iqnkg.execute-api.us-east-1.amazonaws.com/Krowdy-UAT/krowdy_data/datatypes',
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
  // console.log(resultData);
  const handleMouseEnter1 = () => {
    setIsArrow1(true);
  };

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
          <div className="type-of-data-to-be-labeled valign-text-middle graphik-normal-mine-shaft-18px">
            Type of Data to be Labelled
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
            resultData.map((i,key)=>
              <CommonCard detail={i} title={i.datatype_name.S} image="/img/noun-text-2169559-1@2x.svg" text={i.datatype_detail.S} key={key} allData={resultData}/>
            )
           }
            {/* <CommonCard
                title="Arabic Text"
                image="/img/noun-text-2169559-1@2x.svg"
                text="Sed ut perspiciatis unde omnisiste natu."
           /> */}
                    



        </Carousel>
    </div>
  );
}
