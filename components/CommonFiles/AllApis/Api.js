import axios from "axios";
import { useHistory } from "react-router-dom";
export const  handleData=async(email,password)=>{
    console.log(email,password)
    var config = {
      method: 'get',
      url: 'https://teqh2iqnkg.execute-api.us-east-1.amazonaws.com/Krowdy-UAT/account/login',
      params:{email:email,password:password},
      headers: { }
    };
    
   await axios(config)
    .then(function (response) {
      console.log(response)
      console.log(JSON.stringify(response.data));
      if(response.status==200 && response.data!=false)
      {
        localStorage.setItem("email",response.data.email)
        localStorage.setItem("name",response.data.full_name)

        setAlertAdded(true)
      setTimeout(()=>{
        setAlertAdded(false)
      },2000)
      setTimeout(()=>{
        history.push('/main')
      },2000)
      }
      else
     {
      setAlertInvalid(true);
      setTimeout(()=>{
        setAlertInvalid(false)
      },2000)
     }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  export const Alldata=async()=>
  {
    var config = {
        method: 'get',
        url: 'https://teqh2iqnkg.execute-api.us-east-1.amazonaws.com/Krowdy-UAT/krowdy_data/datatypes'
      };
      
     await axios(config)
      .then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error);
      });
  }