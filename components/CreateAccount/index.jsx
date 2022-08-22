import React,{useState} from "react";
import "./CreateAccount.css";
import {useHistory} from "react-router-dom";
import axios from "axios";
import AlertItem from "../AlertBox/Alert";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useSelector,useDispatch} from "react-redux";
import {closeAlertCorrect,openAlertCorrect,openAlertWrong,closeAlertWrong} from "../../features/modal/alertSlice";

function CreateAccount(props) {
  const { isOpen } = useSelector((store) => store.alert);
  const {isOpen1}=useSelector((store)=>store.alert);
  const dispatch = useDispatch();
  const history=useHistory();
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[alertDataName,setAlertDataName]=useState(false);
  const[alertDataEmail,setAlertDataEmail]=useState(false);
  const[alertDataPassword,setAlertDataPassword]=useState(false);
  const[alertDataConfirmPass,setAlertDataConfirmPass]=useState(false);
  const[confirmPassword,setConfirmPassword]=useState('');

  const [passwordShown, setPasswordShown] = useState(false);
  const[passwordShown1,setPasswordShown1]=useState(false)
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePassword1=()=>{
    setPasswordShown1(!passwordShown1)
  }
  const data={
    name:name,
    email:email,
    password:password,
    confirmPassword:confirmPassword
  }
  const handleLogin=async(name,email,password)=>{
    var config = {
      method : 'post',
      url: 'https://teqh2iqnkg.execute-api.us-east-1.amazonaws.com/Krowdy-UAT/account/register',
      headers: {
          'Content-Type':'application/json'
      },
      data: {
        full_name:name,
        email:email,
        password:password
      }
    }
    await axios(config).then(function (response){
      console.log("clicked");
      console.log(response)
      console.log(response.data)
      console.log(response.status)
     if(response.status==200)
     {  
      dispatch(openAlertCorrect())
      setTimeout(()=>{
        dispatch(closeAlertCorrect())
      },2000)
      setTimeout(()=>{
        history.push('/sign-in')
      },2000)
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
  if(name!='' && email!='' && password!='' && confirmPassword!='')
  {
    console.log(name,email,password);
    handleLogin(name,email,password)
    //history.push('/')
  }
  else if(name=='' && password=='' && email=='' && confirmPassword=='')
  {
    setAlertDataName(true)
    setAlertDataEmail(true)
    setAlertDataPassword(true)
    setAlertDataConfirmPass(true)
    setTimeout(()=>{
      setAlertDataName(false)
      setAlertDataEmail(false)
      setAlertDataPassword(false)
      setAlertDataConfirmPass(false)
    },4000)
  }
    // else if(name=='' || (password!='' && email!='' && confirmPassword!=''))
    // {
    //   setAlertDataName(true)
    //   setTimeout(()=>{
    //     setAlertDataName(false)
    //   },4000)
    // }
    // else if(email=='' || (name!='' && password!='' && confirmPassword!=''))
    // {
    //   setAlertDataEmail(true)
    //   setTimeout(()=>{
    //     setAlertDataEmail(false)
    //   },4000)
    // }
    // else if(password=='' || (email=='' && name!='' && confirmPassword!=''))
    // {
    //   setAlertDataPassword(true)
    //   setTimeout(()=>{
    //     setAlertDataPassword(false)
    //   },4000)
    // }
  
    // else if(confirmPassword=='' || (password!='' && email=='' && name!=''))
    // {
    //   setAlertDataConfirmPass(true)
    //   setTimeout(()=>{
    //     setAlertDataConfirmPass(false)
    //   },4000)
    // }            
  else
  { 
    console.log(name,email,password);
    handleLogin(email,name,password)

  }
}
  return (
    <div className="container-center-horizontal">
      <div className="create-account screen">
        <img className="logo-ltr-1-11" src="/img/logo-ltr-1-1@2x.svg" />
        <div className="group-21202">
          <div className="overlap-group1-13 border-1px-black-3">
            {
              isOpen && <AlertItem title="Created Successfully" message="success"/>
            }
            {
                isOpen1 && <AlertItem title="Invalid Credentials" message="error"/>
            }
            <div className="create-account-1 valign-text-middle graphik-bold-tradewind-24px">Create Account</div>
            <div className="full-name-2 valign-text-middle graphik-medium-mine-shaft-16px">Name</div>
            <input type="text" placeholder="Name" value={name} onChange={(event)=>setName(event.target.value)} className="rectangle-22-1 border-1px-black-3"/>
            {
              alertDataName
              ?
              <span style={{color:"red",marginLeft:"5%",marginTop:"2%"}}>Name Required</span>:<></>
            }
            <div className="overlap-group1-item valign-text-middle graphik-medium-mine-shaft-16px">Email</div>
            <input type="text" placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)} className="rectangle-22-1 border-1px-black-3"/>
            {
              alertDataEmail 
              ?
              <span style={{color:"red",marginLeft:"5%",marginTop:"2%"}}>Email Required</span>:<></>
            }
            <div className="password valign-text-middle graphik-medium-mine-shaft-16px">Password</div>
            <input type={passwordShown ? "text" : "password"} placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)} className="rectangle-22-1 border-1px-black-3"/>
            <VisibilityIcon sx={{color:"black",marginTop:"-2.5rem",marginLeft:"26rem",cursor:"pointer"}} onClick={togglePassword}/>
            {
              alertDataPassword
              ?
              <span style={{color:"red",marginLeft:"5%",marginTop:"2%"}}>Password Required</span>:<></>
            }
            <div className="overlap-group1-item valign-text-middle graphik-medium-mine-shaft-16px">
              Confirm Password
            </div>
            <input type={passwordShown1 ? "text" : "password"} placeholder="Confirm Password" value={confirmPassword} onChange={(event)=>setConfirmPassword(event.target.value)} className="rectangle-22-1 border-1px-black-3"/>
            <VisibilityIcon sx={{color:"black",marginTop:"-2.5rem",marginLeft:"26rem",cursor:"pointer"}} onClick={togglePassword1}/>
            {
              alertDataConfirmPass 
              ?
              <span style={{color:"red",marginLeft:"5%",marginTop:"2%"}}>Confirm Password Required</span>:<></>
            }
            <button type="submit" className="overlap-group-26" onClick={handleSubmit} style={{cursor:"pointer",border:"none"}}>
              <div className="create valign-text-middle graphik-bold-white-18px">Create</div>
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
  );
}

export default CreateAccount;
