import React from 'react'
import './Balance.css'

const Balance = ({transactions}) => {
  const total=transactions.reduce((acc,tx)=>acc+tx.amount,0).toFixed(2)
  return (
    <div>
        <h3 className='balance'>YOUR BALANCE</h3>
        <h2 className='money'>${total}</h2>
      
    </div>
  )
}

export default Balance
