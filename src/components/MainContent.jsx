import React from 'react'

const MainContent = ({locationData}) => {
  return (
    <>
    <div className='w-250 h-screen flex flex-col items-center pt-20'>
    <h1 className='text-4xl text-white '>{locationData.name}, {locationData.sys.country}</h1>
    <h1 className="text-white text-2xl mt-2 ">Latitude: {locationData.coord.lat}°, Longitude: {locationData.coord.lon}°</h1>
    </div>
    
    
    </>
  )
}

export default MainContent