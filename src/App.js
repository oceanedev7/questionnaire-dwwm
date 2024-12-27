import React from "react";
import Identification from "./Composants/Identification";
import Evaluation from "./Composants/Evaluation";
import Start from "./Composants/Start";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App () {

//State (état)





//Comportements




//Affichage

return (

<div> 

<Router>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/identification" element={<Identification/>} />
        <Route path="/evaluation" element={<Evaluation/>} />
        
      </Routes>
</Router>



</div>   
 )
}
 
 
 export default App; 