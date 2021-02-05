import React from 'react';
import Notification  from './Notification'

const Stat = ({good, neutral, bad, total, positiveFeedback}) => {
  return (
    <>
      {total ? 
        (<ul className="Statistic">
          <li>Good {good}</li>  
          <li>Neutral {neutral}</li>  
          <li>Bad {bad}</li>  
          <li>Total {total}</li>  
          <li>Positive {positiveFeedback}%</li>  
        </ul>)
       : <Notification/> 
      }   
    </>
  )
}
;

export default Stat;