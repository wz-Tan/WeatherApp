import React from 'react'
import SnowBackground from "../assets/SnowBackground.jpg"
import CloudyBackground from "../assets/CloudyBackground.jpg"
import RainyBackground from "../assets/RainyBackground.jpg"
import ClearBackground from "../assets/ClearBackground.jpg"
import {FaSnowflake } from 'react-icons/fa'
import SideBar from '../components/SideBar'
import { ToastContainer } from 'react-toastify'
import MainContent from '../components/MainContent'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import Spinner from 'react-spinner'

//throw in dynamic information
const MainPage = () => {
  const [locationData,setLocationData]=useState(null) 
  const backgroundImage=()=>{
    switch(locationData.weather[0].main){
    case "Clouds":
      return CloudyBackground
    case "Rain":
      return RainyBackground
    case "Clear":
      return ClearBackground
    default:
      return SnowBackground
    }
  }



  const fetchData= async(cityName)=>{
    if (cityName==""){
        toast.error("Please Fill in a Location!");
        return;
      }    
    const apiKey=import.meta.env.VITE_APIKEY //API KEY FROM ENV
    const res=await fetch(`/weatherapi?q=${cityName}&appid=${apiKey}`)
    const data= await res.json()
    console.log("The data fetched is",data)
    if (data.cod=="404"){
        toast.error("Please Fill in a Valid Location!")
        return;
      }
    setLocationData(data)
  }

  useEffect( ()=>{ //Initialise at Subang
    const initData=async()=>{
      await fetchData("Subang Jaya")
      console.log(backgroundImage)
    }

    try{
      initData()
      
    }
    catch{
      console.log("An error has occured when intialising")
    }
    
  },[])

  if (locationData==null){ //Dont spawn until is initialised
    return <h1 className="text-center text-8xl">Loading...</h1>
  }

  return (
    <>
    {/* background image div, double curly brackets because we are using custom css, className for pre built, style for custom*/}
    <div className="bg-cover h-screen w-screen flex " 
    style={{ backgroundImage:`url(${backgroundImage()})`,
      position: `absolute`
    }}>
      <MainContent locationData={locationData}/>
      <SideBar locationData={locationData} fetchData={fetchData}/>
      </div>
      <ToastContainer/>
    </>
  )
}

export default MainPage