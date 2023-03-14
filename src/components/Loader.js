import React from "react";

function Loader(props) {
  const loaderClassName = (`loader__overlay ${props.isLoader && 'loader__overlay_active'}`)  
  return (
    <div className= {loaderClassName}>
        <div className="loader rotation"></div>
    </div>
  )
}

export default Loader