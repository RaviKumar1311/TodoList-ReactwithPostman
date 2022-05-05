import React from 'react'

export default function DarkMode(props) {
    const { mode,toggleMode } = props;
  return (
    
    <div className=" mt-5" style={{position:'absolute',top:'50px',right:'20px'}}>
        {/* <div className="align-self-end ml-auto">
            <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode </label>

             </div>
          
        </div> */}
         <div className={`custom-control custom-switch text-${mode==='light'?'dark':'light'}`}>
            <input type="checkbox" onClick={toggleMode} className="custom-control-input" id="customSwitches"/>
            <label className="custom-control-label" htmlFor="customSwitches">Dark Mode</label>
          </div>
    </div>
   
  )
}


// <div class="custom-control custom-switch">
//   <input type="checkbox" class="custom-control-input" id="customSwitches">
//   <label class="custom-control-label" for="customSwitches">Toggle this switch element</label>
// </div>

{/* <div className="ml-5">
<div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
<input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode </label>

</div>
</div> */}