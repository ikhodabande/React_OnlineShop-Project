import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Welcome() {
  return (
    <div className="container">
      <div className="bg-primary text-white my-3">
         <FontAwesomeIcon
         icon = {faClose}
         style = {{float:"right", margin:"5pxx"}}
          />
      </div>
    </div>
  )
}

export default Welcome