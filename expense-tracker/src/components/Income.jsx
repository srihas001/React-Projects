import React from 'react'
import './Income.css'

const Income = ({transactions}) => {
 const income=transactions.filter(tx=>tx.amount>0).reduce((acc,tx)=>acc+tx.amount,0).toFixed(2)
 const expense=transactions.filter(tx=>tx.amount<0).reduce((acc,tx)=>acc+tx.amount,0).toFixed(2)

  return (
    <div className='box'>
        <div className="income">
            <div>Income</div>
            <div className='incomeamt'>${income}</div>
        </div>
        <div className="line"></div>
        <div className="expense">
             <div>Expense</div>
            <div className='expenseamt'>${Math.abs(expense)}</div>
        </div>

      
    </div>
  )
}

export default Income
