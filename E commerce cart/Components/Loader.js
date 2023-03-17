import React from 'react';
import {Rings} from 'react-loader-spinner'

function Loader() {
  return (
	<div>
	 <Rings className="loading" height="80" width="80" color="#4fa94d"/>
	</div>
  )
}

export default Loader