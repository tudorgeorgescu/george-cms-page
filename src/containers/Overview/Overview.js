import React from 'react';
import {fetchStoreMainData} from '../../utils/api';

export default function Overview() {
  React.useEffect(()=>{
    fetchStoreMainData()
      .then((data)=>console.log(data))
      .catch(({message})=>console.log(message));
  },[]);
  return (
    <div>
      overview
    </div>
  )
}
