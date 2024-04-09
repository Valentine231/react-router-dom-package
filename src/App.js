import React from "react";
import { BrowserRouter , Routes, Route}  from "react-router-dom";

import User from './User/pages/users';
import Newplace from './places/pages/NewPlace'
import USerplaces from "./places/pages/userplaces";
import MainNavigation from "./component/shared/Navigation/MainNavigation";
const App = () => { 
  
   return ( 
 <BrowserRouter>
  <MainNavigation/>
  <main>
   <Routes>
   <Route path="/User" element={<User />} exact />
   <Route path="/:userid/places" exact>
      <USerplaces/>
   </Route>
   </Routes> 
   
    <Routes>
    <Route path="/place/new" element={<Newplace />} exact />
   </Routes> 
   </main>
</BrowserRouter>
); 
  

};





export default App;




