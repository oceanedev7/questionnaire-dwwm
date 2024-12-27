import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";


export default function Identification () {

  
    const [prenom, setPrenom] = useState ("")
    const [nom, setNom] = useState ("") 
    

    const prenomChange = (e) => {
        setPrenom(e.target.value);
      };
    
      const nomChange = (e) => {
        setNom(e.target.value);
    };
      
    
    const handleSubmit = (e) => {
      e.preventDefault();
      
      }
   
    return (
                   
        <div className="main2"> 
          
            <h5 className="titre2">Veuillez renseigner les informations ci-dessous pour accéder au questionnaire</h5>

            <form action="submit" onSubmit={handleSubmit}> 
                <input className="inputP" type="text"  placeholder="Prénom" value ={prenom} onChange={prenomChange} /> 
                <input className="inputN" type="text" placeholder="Nom" value ={nom} onChange={nomChange} /> 
  
                <Link to={`/evaluation?prenom=${prenom}&nom=${nom}`}> 
                  <button className="bt2"> Commencer le questionnaire </button>
                </Link>   
            </form> 

                
            
           
        </div>   


    )
    }