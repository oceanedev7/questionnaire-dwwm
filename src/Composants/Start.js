import React from "react";
import { Link } from 'react-router-dom'


export default function Start () {
   
    return (
        <div className="main1">
            <h3 className="titre1">Questionnaire Développement Web et Web Mobile</h3>
            <Link to="/identification">
                <button className="bt1">S'inscrire</button>
            </Link>
        </div>


    )
};