import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cards from './Components/Cards';
import Carddetail from './Components/Carddetail';
import {useSelector} from 'react-redux'
import Loader from './Components/Loader'

function App() {
   return (
    <>

  <BrowserRouter>
      <Header/>
      <Routes>
        
      <Route path="/" element={<Cards/>}/>
      <Route path='/cart/:id' element={<Carddetail/>}/>

      </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App;