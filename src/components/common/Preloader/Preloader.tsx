import React from 'react';
import preloader from '../../../assets/images/loadingTS.gif'

const Preloader = () => {
  return (
    <div style={{backgroundColor: 'green'}}>
      <img src={preloader}/>
    </div>
  )
}

export default Preloader