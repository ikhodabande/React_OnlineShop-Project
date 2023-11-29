import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const Welcome=()=> {
  const [showWelcome , setShowWelcome] = useState(true)
  const onHideWelcome=()=>{
    setShowWelcome(false)
  }

  return (
    <>


    {showWelcome && (
    <div className="container">
      <div className=" bg-primary text-white my-3 ">
         <FontAwesomeIcon
         icon={faClose}
         style={{float:"right", margin:"5px"}}
         onClick={onHideWelcome}
          />
          <div className="p-4">Welcome</div>
      </div>
    </div>

    )}

    </>
  )
}

export default Welcome