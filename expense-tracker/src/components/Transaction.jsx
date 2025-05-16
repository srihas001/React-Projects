import React from 'react'
import './Transaction.css'
import { useState } from 'react'

const Transaction = ({addTranc}) => {
  const [text, settext] = useState("")
  const [amount, setamount] = useState("")
  const handlesubmit=(e)=>{
    e.preventDefault()
    if(text.trim()==="" || amount.trim()===" ") return;

  const newTranc={
    id:Date.now(),
    text,
    amount :parseFloat(amount) 
  }
    addTranc(newTranc);
    setamount('')
    settext('')
  }
  
  return (
    <div>
        <div className="tnxname">Add new transaction</div>
        <div className="linee"></div>
        <form onSubmit={handlesubmit}>
        <div className="textholder">
        <div>Text</div>
        <input className='input' type="text" placeholder='Enter text...' value={text} onChange={(e)=>settext(e.target.value)}/>
        </div>
        <div className='amounttaker'>
        <div className="amnt">Amount</div>
        <div className="explain">negative-expense,positive-income</div>
        <input className='input1' type="text" placeholder='Enter amount...' value={amount} onChange={(e)=>setamount(e.target.value)} />
        </div>
        <button onClick={()=>{}} className='button' type='submit'>Add transaction</button>
        </form>
      
    </div>
  )
}

export default Transaction
