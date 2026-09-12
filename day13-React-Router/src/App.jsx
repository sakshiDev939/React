import React, { useState } from 'react'

import AppRoutes from './Routes/AppRoutes'
import Navbar from './components/Navbar'


const App = () => {

 

  return (
    <div className="h-screen p-2">


      
     <Navbar />
       <AppRoutes />

    </div>
  )
}

export default App

