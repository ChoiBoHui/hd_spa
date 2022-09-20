import React from "react";
import { Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Main from './pages/Main'
import Sub01 from './pages/Sub01'
import Sub02 from './pages/Sub02'
import NotFound from './pages/NotFound'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sub01' element={<Sub01 />} />
        <Route path='/sub02' element={<Sub02 />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;