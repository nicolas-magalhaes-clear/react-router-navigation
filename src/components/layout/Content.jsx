import { Route, Routes } from 'react-router-dom';
import './Content.css'
import React from "react";

import About from '../../views/examples/About';
import Param from '../../views/examples/Param';
import Home from '../../views/examples/Home';
import NotFound from '../../views/examples/NotFound';

const Content = props =>{

    return(
        <main className="Content">
            
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/param/:id' element={<Param/>}/> 
                <Route path='/' exact element={<Home/>} />
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </main>
    )

}

export default Content