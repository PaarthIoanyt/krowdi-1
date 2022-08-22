import React,{useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";
import AlertItem from '../AlertBox/Alert';
import {useSelector,useDispatch} from "react-redux";
import {closeAlertCorrect,openAlertCorrect,openAlertWrong,closeAlertWrong} from "../../features/modal/alertSlice";
function ForgetPassword() {
  const { isOpen } = useSelector((store) => store.alert);
  const {isOpen1}=useSelector((store)=>store.alert);
  const dispatch = useDispatch();
    const history = useHistory();
    const[email,setEmail]=useState('');
    const[alertEmail,setAlertEmail]=useState(false);
    const data={
      email:email
    }
    const handleData=async(email)=>{
      console.log(email)
      var config = {
        method: 'get',
        url: 'https://teqh2iqnkg.execute-api.us-east-1.amazonaws.com/Krowdy-UAT/account/forgetpassword',
        params:{email:email},
        headers: { }
      };
      await axios(config)
      .then(function (response) {
        console.log(response)
        console.log(JSON.stringify(response.data));
        console.log(response.data.token)
        if(response.status==200 && response.data!="Email id is not Registererd")

        {
          console.log("two")
          dispatch(openAlertCorrect())
          setTimeout(()=>{
            dispatch(closeAlertCorrect())
          },2000)
          setTimeout(()=>{
            history.push({pathname:'/resetPassword',state:{token:response.data.token,email:response.data.email}})
          },4000)

          
        }
        else
        {
          dispatch(openAlertWrong())
          setTimeout(()=>{
           dispatch(closeAlertWrong())
          },2000)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    const handleSubmit=()=>{
      handleData(email)
      console.log(data)
      if(email=='')
      {
          setAlertEmail(true);
          setTimeout(()=>{
              setAlertEmail(false)
          },4000)
      }
      else
      {

          //history.push('/resetPassword')
      }
    }
  return (
    <div className="container-center-horizontal">
    <div className="sign-in screen">
      <img className="logo-ltr-1" src="/img/logo-ltr-1@2x.svg" />
      <div className="group-21201">
        <div className="overlap-group1 border-1px-black-3" style={{minHeight:"400px"}}>

            {
            isOpen && <AlertItem title="Heading Towards Password Rest" message="success"/>
          }
          {
              isOpen1 && <AlertItem title="Invalid Email" message="error"/>
          }
          <div className="sign-in-1 valign-text-middle graphik-bold-tradewind-24px">Forget Password</div>
          <div className="full-name valign-text-middle graphik-medium-mine-shaft-16px">Email</div>
          <input type="text" placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)} className="rectangle-22 border-1px-black-3"/>
          {
              alertEmail
              ?
              <span style={{color:"red",marginTop:"2%",marginRight:"67%"}}>Email Required</span>:<></>
            }
          <div className="flex-row">
            {/* <div className="rectangle-22655 border-1px-black-5"></div> */}
            {/* <div onClick={()=>{
                  console.log("Clicked")
            }} className="forgot-password valign-text-middle" style={{cursor:"pointer"}}>Forget Password</div> */}
          </div>
          <button type="submit" className="overlap-group" style={{cursor:"pointer",border:"none",paddingRight:"50%"}} onClick={handleSubmit}>
            <div className="sign-in-2 valign-text-middle graphik-bold-white-18px" style={{}}>Reset Password</div>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ForgetPassword;