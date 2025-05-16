import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import History from './components/History'
import Transaction from './components/Transaction'
function App() {
 const [transactions, settransactions] = useState(() => {
  const saved = localStorage.getItem('transactions');
  return saved ? JSON.parse(saved) : [];
});
useEffect(() => {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}, [transactions])
  const addTranc= (newtxn)=>{
    settransactions([newtxn,...transactions])

  }
  const delTranc=(id)=>{
    settransactions(transactions.filter(tx=>tx.id!==id))
  }
 

  return (
    <>
    <div className="container">
      <div className='head'><Header/></div>
      <div className='bal'><Balance transactions={transactions}/>
      <div className='tracker'><Income transactions={transactions}/></div>
      <div className="history"><History transactions={transactions} delTranc={delTranc}/></div>
      <div className="transactions"><Transaction addTranc={addTranc}/></div>
      
</div>
    
    </div>
    </>
  )
}

export default App
