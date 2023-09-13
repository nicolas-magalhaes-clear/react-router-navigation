import { Route, Routes } from 'react-router-dom';
import './Content.css'
import React from "react";

import About from '../../views/examples/About';

const Content = props =>{

    return(
        <main className="Content">
            
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/param:id' element={<Param/>}/> 
            </Routes>
        </main>
    )

}

export default Content