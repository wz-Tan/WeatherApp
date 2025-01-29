import { useState } from "react"
import React from 'react'
import { FaSearch,FaThermometerHalf } from "react-icons/fa"
import { toast } from "react-toastify"
import { IoWater } from "react-icons/io5"
import { GiWindSlap } from "react-icons/gi"
import { FaCloudSunRain } from "react-icons/fa6"
import { TbBeach } from "react-icons/tb"

const SideBar = ({fetchData, locationData}) => {
  // Make an env file for the api key, and a proxy
  const searchLocation = async () =>{
    const searchTextValue=document.getElementById("searchTextArea").value
    await fetchData(searchTextValue)
    document.getElementById("searchTextArea").value=""
  }

  function keyPressed(e){
    const key=e.key
    if (key==="Enter"){
      searchLocation()
    }
  }

  return (
    <>
    
    {/* Page Segment  */}
    <div className="h-screen w-144 backdrop-blur border-r-3 border-l-3 border-white ml-auto pt-13 pl-4"> 

        {/* Search Area */}
      <div className="flex content-center">
        <input type="text" id="searchTextArea" onKeyDown={keyPressed} className="text-white  outline-none resize-none inline w-70" maxLength="26"  placeholder="Search Location..."/>
        <FaSearch onClick={searchLocation} className="inline h-5 text-white ml-15"/>
      </div>
      
      
      <hr className="w-100 text-white mt-1 mb-7"/>

      <div className="flex h-9.5">
        <h1 className="text-white text-3xl inline mr-3">Current Weather</h1>
        <FaCloudSunRain className="text-white text-2xl inline mt-2"/>
      </div>

      <h1 className="text-white text-2xl font-thin mb-7">{locationData.weather[0].main}</h1>

      <div className="flex h-9.5">
        <h1 className="text-white text-3xl inline mr-3">Temperature</h1>
        <FaThermometerHalf className="text-white text-2xl inline mt-2"/>
      </div>
      
      <h1 className="text-white text-2xl font-thin mb-7">{Math.round((locationData.main.feels_like-273.15)*100)/100} °C</h1>
      
      <div className="flex h-9.5">
        <h1 className="text-white text-3xl inline mr-3">Humidity</h1>
        <IoWater className="text-white text-2xl inline mt-2"/>
      </div>

      <h1 className="text-white text-2xl font-thin mb-7">{locationData.main.humidity}%</h1>
      
      <div className="flex h-9.5">
        <h1 className="text-white text-3xl inline mr-3">Wind Speed</h1>
        <GiWindSlap className="text-white text-2xl inline mt-2"/>
      </div>

      <h1 className="text-white text-2xl font-thin mb-7">{locationData.wind.speed} km/h</h1>
    
      <div className="flex h-9.5">
        <h1 className="text-white text-3xl inline mr-3">Sea Level</h1>
        <TbBeach className="text-white text-2xl inline mt-2"/>
      </div>

      <h1 className="text-white text-2xl font-thin mb-7">{locationData.main.sea_level} m</h1>
    
    </div>
    </>
  )
}

export default SideBar