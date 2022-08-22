import React from 'react'
import Alert from '@mui/material/Alert';;
function AlertItem(props) {
    console.log(props)
  return (
    <Alert severity={props.message} style={{position:"fixed",bottom:"3rem",transform:"translate(-50%, -50%)",left:"50%"}}>{props.title}</Alert> 
  )
}

export default AlertItem;