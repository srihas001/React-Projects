import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import refreshimg from './assets/refresh-page-option.png'
import twitterimg from './assets/logos.png'
import { useRef} from 'react'
function App() {
  const quoteref=useRef()

  const loadData=async ()=>{
 
   const a= await fetch('https://dummyjson.com/quotes?limit=100&skip=0')
    const data=await a.json()
    quoteref.current=data.quotes
  }
  useEffect(() => {
    loadData();
    
  }, [])
 const twitterfn = () => {
  const tweetText = `${quoteData.quote} - ${quoteData.author}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  window.open(tweetUrl, "_blank");
};
 
 const [quoteData, setquoteData] = useState({
  quote:"The Soul Never Thinks Without A Picture.",
  author:"Aristotle"
 })
 const random= ()=>{
  const quotes=quoteref.current
  setquoteData(quotes[Math.floor(Math.random()*quotes.length)])
 }
 

  return (

    <>
    <div className='container'>
      <div className='overall'>
      <div className='quote'>{quoteData.quote}</div>
      
      <div className='line'></div>
        <div className="bottom">
          <div className='authorname'>-{quoteData.author}</div>
          <div className='icons'>
            <div onClick={()=>{random()}} className="refresh"><img src={refreshimg} alt="" /></div>
            <div onClick={()=>{twitterfn()}} className="twitter"><img src={twitterimg} alt="" /></div>
          </div>

        </div>
     
      </div>

    </div>
     
   
      
    </>
  )
}

export default App
