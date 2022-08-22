import React from 'react';
import "./Header.css";
import { useHistory } from 'react-router-dom';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
function Header() {
  var name=localStorage.getItem('name');
  var email=localStorage.getItem('email');
  const history=useHistory();
 
  // console.log(name,email)
  return (
    <div className='container'>
    <div className="overlap-group3-1" style={{}}>
    <img className="kisspng-computer-ico-2" src="/img/kisspng-computer-icons-avatar-business-computer-software-user-av-2@2x.png" />
    <div className="hamdi-container-2" style={{marginRight:"10%"}}>
      <div className="hamdi-2 valign-text-middle graphik-normal-black-16px">{name}</div>
      <div className="hamdi459gmailcom-2 valign-text-middle graphik-regular-normal-abbey-12px" style={{marginTop:"7%",color:"grey"}}>
        {email}
      </div>
    </div>
  </div>
    </div>
  )
}

export default Header