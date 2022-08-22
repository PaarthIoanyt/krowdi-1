import React,{useState} from 'react';
import {useHistory,useLocation} from "react-router-dom";
import axios from "axios";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { openAlertCorrect,closeAlertCorrect,openAlertWrong,closeAlertWrong } from '../../features/modal/alertSlice';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AlertItem from '../AlertBox/Alert';

function ResetPassword() {
  const { isOpen } = useSelector((store) => store.alert);
  const {isOpen1}=useSelector((store)=>store.alert);
  const dispatch = useDispatch();
    const history=useHistory();
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const[alertPassword,setAlertPassword]=useState(false);
    const[alertConfirmPassword,setAlertConfirmPassword]=useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const[passwordShown1,setPasswordShown1]=useState(false)
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };
    const togglePassword1=()=>{
      setPasswordShown1(!passwordShown1)
    }
    const location=useLocation();
    console.log(location);
    console.log(location?.state?.email);
    console.log(location?.state?.token)
    const data={
      password:password,
      confirmPassword:confirmPassword
    }
    const handleLogin=async(password)=>{
      var config = {
        method : 'post',
        url: 'https://teqh2iqnkg.execute-api.us-east-1.amazonaws.com/Krowdy-UAT/account/confirm_password',
        headers: {
            'Content-Type':'application/json'
        },
        data: {
          email:location?.state?.email,
          token:location?.state?.token,
          new_password:password
        }
      }
      console.log(config.data)
      await axios(config).then(function (response){
        console.log("clicked");
        console.log(response)
        console.log(response.data)
        console.log(response.status)
        if(response.status==200)

        {
          console.log("two")
          
          dispatch(openAlertCorrect())
          setTimeout(()=>{
            dispatch(closeAlertCorrect())
          },2000)
          setTimeout(()=>{
            history.push('/sign-in')
          },4000)

          
        }
        else
        {
          dispatch(openAlertWrong())
          setTimeout(()=>{
           dispatch(closeAlertWrong())
          },2000)
        }
       
       
      }).catch( function(error){
        console.log(error)
      })
    }
    const handleSubmit=()=>{
      if(password!='' && confirmPassword!='' && password==confirmPassword)
              {
                handleLogin(password)
              }
              else if(password=='' && confirmPassword=='')
              {
                setAlertPassword(true)
                setAlertConfirmPassword(true)
                
                setTimeout(()=>{
                  
                setAlertPassword(false)
                setAlertConfirmPassword(false)
                },4000)
                history.push('/resetPassword')
              }
              else if(password=='' && confirmPassword!='')
              {
                setAlertPassword(true)
                
                setTimeout(()=>{
                  
                setAlertPassword(false)
                },4000)
                history.push('/resetPassword')
              }
              else if(password!='' && confirmPassword=='')
              {
                setAlertConfirmPassword(true)
                
                setTimeout(()=>{
                  
                setAlertConfirmPassword(false)
                },4000)
                history.push('/resetPassword')
              }
              else
              { 
                console.log("Field Required")
                history.push('/resetPassword')
               
              }
    }
  return (
    <div className="container-center-horizontal">
      <div className="create-account screen">
        <img className="logo-ltr-1-11" src="/img/logo-ltr-1-1@2x.svg" />
        <div className="group-21202">
          <div className="overlap-group1-13 border-1px-black-3" style={{minHeight:"400px"}}>
          {
            isOpen && <AlertItem title="Password Update Successfully" message="success"/>
          }
          {
              isOpen1 && <AlertItem title="Invalid Credentials" message="error"/>
          }
            <div className="create-account-1 valign-text-middle graphik-bold-tradewind-24px">Reset Password</div>
            <div className="password valign-text-middle graphik-medium-mine-shaft-16px">Password</div>
            <input type={passwordShown ? "text" : "password"} placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)} className="rectangle-22-1 border-1px-black-3"/>
            <VisibilityIcon sx={{color:"black",marginTop:"-2.5rem",marginLeft:"26rem",cursor:"pointer"}} onClick={togglePassword}/>
            {
              alertPassword
              ?
              <span style={{color:"red",marginTop:"2%",marginRight:"67%"}}>Password Required</span>:<></>
            }
            <div className="overlap-group1-item valign-text-middle graphik-medium-mine-shaft-16px">
              Confirm Password
            </div>
            <input type={passwordShown1 ? "text" : "password"} placeholder="Confirm Password" value={confirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)} className="rectangle-22-1 border-1px-black-3"/>
            <VisibilityIcon sx={{color:"black",marginTop:"-2.5rem",marginLeft:"26rem",cursor:"pointer"}} onClick={togglePassword1}/>
            {
              alertConfirmPassword
              ?
              <span style={{color:"red",marginTop:"2%",marginRight:"67%",width:"100%"}}>Confirm Password Required</span>:<></>
            }
            <button type="submit" className="overlap-group-26" onClick={handleSubmit} style={{cursor:"pointer",border:"none"}}>
              <div className="create valign-text-middle graphik-bold-white-18px">Submit</div>
            </button>
           
           {/* {
              alertData
              ?
              <Alert severity="error">Credentials Required</Alert>
              :
              <></>
           } */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword