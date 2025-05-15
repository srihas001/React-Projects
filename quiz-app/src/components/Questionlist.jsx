import React from 'react'
import './Questionlist.css'
const   Questionlist = ({question,option,currentanswer,handleClick}) => {
  return (
    <div className='ques'>
    <h2 className='questions'>{question}</h2>    
    <ul>
        {option.map((optio,index)=>(
            <li className={currentanswer===optio?'selected':''} onClick={()=>{handleClick(optio)}} key={index}>{optio}</li>
        ))}
    </ul>
        </div>
  )
}

export default Questionlist
