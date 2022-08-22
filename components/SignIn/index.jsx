import React, { useState } from "react";
import "./SignIn.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {closeAlertCorrect,openAlertCorrect,openAlertWrong,closeAlertWrong} from "../../features/modal/alertSlice";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AlertItem from "../AlertBox/Alert";


function SignIn(props) {
  const { isOpen } = useSelector((store) => store.alert);
  const {isOpen1}=useSelector((store)=>store.alert);
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertName, setAlertName] = useState(false);
  const [alertPassword, setAlertPassword] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const data = {
    email: email,
    password: password,
  };
  const {
    signIn1,
    fullName,
    workEmail,
    rememberMe,
    forgotPassword,
    signIn2,
    youDontHaveAnAccountYet,
  } = props;
//   await axios.get(`https://teqh2iqnkg.execute-api.us-east-1.amazonaws.com/Krowdy-UAT/account/login`,{
//     params : {email: email,password:password},
// }).then(function (response)  { 
//       console.log(response.data);
//       let p_data = response.data
//          setResult4(p_data);
// })
// }
  // var config = {
  //   method : 'get',
  //   url: `https://teqh2iqnkg.execute-api.us-east-1.amazonaws.com/Krowdy-UAT/account/login`,
  //   headers: {
  //       'Content-Type':'application/json'
  //   },
  //   data:data
  // }
  // await axios(config).then(function (response){
  //   console.log(response.data)
  // }).catch( function(error){
  //   console.log(error)
  // })
  const handleData=async(email,password)=>{
    console.log(email,password)
    var config = {
      method: 'get',
      url: 'https://teqh2iqnkg.execute-api.us-east-1.amazonaws.com/Krowdy-UAT/account/login',
      params:{email:email,password:password},
      headers: { }
    };
    console.log(config.params)
   await axios(config)
    .then(function (response) {
      console.log(response)
      console.log(JSON.stringify(response.data));
      if(response.status==200  && response.data!="Not a Registered User." && response.data!=false)
      {
        localStorage.setItem("email",response.data.email)
        localStorage.setItem("name",response.data.full_name)
        localStorage.setItem("user_id",response.data.user_id)

        dispatch(openAlertCorrect())
      setTimeout(()=>{
        dispatch(closeAlertCorrect())
      },2000)
      setTimeout(()=>{
        console.log("Push")
        history.push('/main')
      },1000)
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
  const handleSubmit = () => {
    //console.log(data);
    if (email == "" && password == "") {
      setAlertName(true);
      setAlertPassword(true);

      setTimeout(() => {
        setAlertName(false);
        setAlertPassword(false);
      }, 4000);
      history.push("/sign-in");
    } else if (email == "" && password != "") {
      setAlertName(true);
      setTimeout(() => {
        setAlertName(false);
      }, 4000);
      history.push("/sign-in");
    } else if (email != "" && password == "") {
      setAlertPassword(true);

      setTimeout(() => {
        setAlertPassword(false);
      }, 4000);
      history.push("/sign-in");
    } else {
      console.log("welcome")
      console.log(email)
      console.log(password)
    handleData(email,password)
      // var config = {
      //   method : 'get',
      //   url: "https://teqh2iqnkg.execute-api.us-east-1.amazonaws.com/Krowdy-UAT/account/login",
      //   params : {email: email,password:password},
      //    }
      //  axios(config).then(function (response){
      //   console.log(response)
      //   console.log(response.data);

      //  })
      //history.push("/main");
    }
  };

  return (
    <div className="container-center-horizontal">
      <div className="sign-in screen">
        <img className="logo-ltr-1" src="/img/logo-ltr-1@2x.svg" />
        <div className="group-21201">
          <div className="overlap-group1 border-1px-black-3">
          {
            isOpen && <AlertItem title="Login Success" message="success"/>
          }
          {
              isOpen1 && <AlertItem title="Invalid Credentials" message="error"/>
          }
            <div className="sign-in-1 valign-text-middle graphik-bold-tradewind-24px">
              Sign In
            </div>
            <div className="full-name valign-text-middle graphik-medium-mine-shaft-16px">
              Email
            </div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="rectangle-22 border-1px-black-3"
            />
            {alertName ? (
              <span
                style={{ color: "red", marginTop: "2%", marginRight: "69%" }}
              >
                Email Required
              </span>
            ) : (
              <></>
            )}
            <div className="work-email valign-text-middle graphik-medium-mine-shaft-16px">
              Password
            </div>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                value={password}
                className="rectangle-22 border-1px-black-3"
                onChange={(event) => setPassword(event.target.value)}
                id="myInput"
                
                />
                  <VisibilityIcon sx={{color:"black",marginTop:"-2.5rem",marginLeft:"22rem",cursor:"pointer"}} onClick={togglePassword}/>
            {alertPassword ? (
              <span
              style={{ color: "red", marginTop: "2%", marginRight: "67%" }}
              >
                Password Required
              </span>
            ) : (
              <></>
              )}
             
            <div
              className="flex-row"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div
                onClick={() => {
                  console.log("Clicked");
                  history.push("/forgetPassword");
                }}
                className="forgot-password valign-text-middle"
                style={{ cursor: "pointer" }}
              >
                Forget Password
              </div>
            </div>
            <button
              type="submit"
              className="overlap-group"
              style={{ cursor: "pointer", border: "none" }}
              onClick={handleSubmit}
            >
              <div className="sign-in-2 valign-text-middle graphik-bold-white-18px">
                {signIn2}
              </div>
            </button>
            <div style={{ display: "flex" }}>
              <p
                className="you-dont-have-an-account-yet valign-text-middle graphik-regular-normal-star-dust-13px"
                style={{ cursor: "pointer", marginTop: "4%" }}
              >
                {youDontHaveAnAccountYet}
              </p>
              <div
                className="forgot-password valign-text-middle"
                onClick={() => {
                  history.push("/create-account");
                }}
                style={{ cursor: "pointer", marginTop: "4%" }}
              >
                Register Here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
