import React from 'react'

function AlertDismiss(props) {
  console.log(props);
  return (
   <>
   <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{props.alert.type}</strong> {props.alert.msg}
  {console.log(props.alert.msg)}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>
   </>
  )
}

export default AlertDismiss
