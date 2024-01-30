import React, { useState } from 'react'

const DarkModeToggle = () => {
  const [state, setState] = useState('true');
  const handleClick = () => setState (!state);

   return (
    <div>
      <button onClick={handleClick}> {state?"ON" :"OFF"}</button> 
      
      
    </div>
  )
}

export default DarkModeToggle;
