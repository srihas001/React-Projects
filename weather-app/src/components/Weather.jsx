import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import mountainsimg from '../assets/beautiful-mountains.jpg'
import search from '../assets/search.png'
const Weather = () => {
    const inputref=useRef()
    const [weatherData,setweatherData]=useState(false)
const search1= async (city)=>{
    if(city===""){
        alert('Enter City Name')
        return;
    }
    try {
        const a=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${VITE_WEATHER_ID}`
        const res=await fetch(a)
        let response=await res.json()
        if(!res.ok){
            alert(response.message)
            return;
        }
        console.log(response)
        setweatherData({
            humidity:response.main.humidity,
            temperature:Math.floor(response.main.temp),
            speed:response.wind.speed,
            location:response.name
        })
        
    } catch (error) {
        
    }

}
   useEffect(() => {
     search1("New York")
   }, [])
   
  return (
    <div className='container'>
      <h1 className='weathername'>WEATHER</h1>
      <div className='search'>
        <div className='searchholder'>
      <input ref={inputref} className='searchbar' type="text" placeholder='Enter Your City'/>
      </div>
      <img className='searchicon' src={search} alt="" onClick={()=>{search1(inputref.current.value)}} />
      </div>
      <div className="main">
      <div className='temp'>{weatherData.temperature}°C</div>
      <div className="location">{weatherData.location}</div>
      </div>
      <div className='lastset'>
      <div className='totalhum'>
         <div className='humidityvalue'>{weatherData.humidity}%</div>
        <div className='humidity'>Humidity</div>
      </div>
      <div className='totalspeed'>
         <div className='speedvalue'>{weatherData.speed}Km/h</div>
        <div className='Windspeed'>Wind Speed</div>
      </div>
      </div>

    </div>
  )
}

export default Weather
