import React from 'react'
import './History.css'

const History = ({transactions, delTranc}) => {
  return (
    <div>
        <div className="total">
        <div className='name'>History</div>
        <div className='border'></div>
        <div className="cardlist">
            
         {transactions.map((tx) =>(
           <div key={tx.id} className={`card ${tx.amount > 0 ? 'green-border' : 'red-border'}`}>
            <div className={tx.amount>0?"green":"red"}></div>
          
        <button onClick={()=>{delTranc(tx.id)}} className='delbtn'>X</button>
        <div className='wrap'>
        <div className='cardname'>{tx.text}</div>
        <div className="price">{tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount)}</div>
        </div>
        </div>

         ))}
       
       
       
       
        </div>
      
    </div>
    </div>
  )
}

export default History
