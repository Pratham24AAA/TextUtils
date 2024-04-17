import React from 'react'

function Alert(props) {
  return (
      <div style={{height : '50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong> : {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>}
      </div>
  )
}

export default Alert



// here in line 5 this is done because the initial value of type and message in alert is given null and
// type cannot be negative here further in 5 and 6 therefore we used && as it will execute the next part of the statement
// ie the <div> part only if the props.alert value is not null as for it to execute both the conditions must be true
// therefore the control will only go inside the div when the props.alert is not null