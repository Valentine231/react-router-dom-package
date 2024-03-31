import React from "react";
import { BrowserRouter , Routes, Route}  from "react-router-dom";

import User from './User/pages/users';
import Newplace from './places/pages/NewPlace'

const App = () => { 
  
 return ( 
 <BrowserRouter>
 <Routes>
    <Route path="/User" element={<User />} exact />
    </Routes> 
    <Routes>
    <Route path="/place/new" element={<Newplace />} exact />
    </Routes> 
    
    
    </BrowserRouter>
 ); 
  
}


export default App;


