import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function Evaluation () {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const prenom = searchParams.get("prenom");
    const nom = searchParams.get("nom");
    const [questionActuelle, setQuestionActuelle] = useState (0)
    const [score, setScore] = useState (0)
    const [finQuest, setFinQuest] = useState(false);
    var observ; 
    
    

    const donnees = {
        questions : [ 
                {id: 1, 
                question : "Que signifie HTML ?", 
                reponse :  ["HomeTabulation of Mailing List", "HyperText Markup Language", "Hyperspace TradeMark Language"], 
                breponse : "HyperText Markup Language" },
            
                {id: 2, 
                question :  "À quoi sert HTML ?", 
                reponse :  ["À créer des pages dynamiques", "À mettre en forme des pages web", "À structurer du contenu dans une page web"], 
                breponse : "À structurer du contenu dans une page web" },
                
                {id: 3, 
                question :  "Que signifie CSS ?", 
                reponse :  ["Cascading Style Sheets", "Create Simple Samples", "C'est Super Simple"], 
                breponse : "Cascading Style Sheets" },
            
                {id: 4, 
                question :  "Où est-il conseillé de placer le code CSS ?", 
                reponse :  ["Dans le <body>", "Entre les balises <head>", "Dans un fichier externe utilisable pour plusieurs pages"], 
                breponse : "Dans un fichier externe utilisable pour plusieurs pages" },
                
                {id: 5, 
                question :  "Qu'est-ce qu'une Media Query ?", 
                reponse :  ["Un format de base de données mobiles", "Un jeu gratuit sur mobile", "Une règle CSS permettant de détecter des types de médias"], 
                breponse : "Une règle CSS permettant de détecter des types de médias" },
            
                {id: 6, 
                question :  "Qu'est-ce que Jquery  par rapport à JavaScript ?", 
                reponse :  ["Une bibliothèque JavaScript multiplateforme", "Une base de données", "Un langage de requête"], 
                breponse : "Une bibliothèque JavaScript multiplateforme" },
                
                {id: 7, 
                question :  "A quoi sert l’opérateur  ===  ?", 
                reponse :  ["Cet opérateur n'existe pas en JavaScript", "Comparer le type et la valeur de deux données", "Effectuer une comparaison entre 2 données"], 
                breponse : "Comparer le type et la valeur de deux données" },
            
                {id: 8, 
                question :  "De quelle façon déclare-t-on un tableau T1 de 20 éléments ?", 
                reponse :  ["T1=new Array(20)", "var T1[20]", "var T1=array(20)"], 
                breponse : "T1=new Array(20)" },
            
                {id: 9, 
                question :  "Quelle commande est utilisée pour démarrer le serveur de développement local React ?", 
                reponse :  ["npm run dev", "npm serve", "npm start"], 
                breponse : "npm start" },
            
                {id: 10, 
                question :  "Comment écrire “Bonjour” dans la console du navigateur ?", 
                reponse :  ["alert (“Bonjour”)", "console.log (“Bonjour”)", "print (“Bonjour”)"], 
                breponse : "console.log (“Bonjour”)" },
    ]
    };

   
    const handleClick = (reponse) => {
        const questionActu = donnees.questions[questionActuelle];
        if (reponse === questionActu.breponse) { 
            setScore(score + 1); 
        }
    
        if (questionActuelle + 1 === donnees.questions.length) {
            setFinQuest(true);
        } else {
            setQuestionActuelle(questionActuelle + 1);
        }
    };

if (finQuest) {
    
    if (score >= 0 && score <= 4) {
        observ = "Il faudra réviser davantage";
     } else if (score >= 5 && score <= 7) {
         observ = "Continuez ainsi";
    } else {
        observ = "Excellent";
    }
       
    return (

        <div>
       
       <table className="main4" border="1" cellSpacing={0} cellPadding={10}> 
            <thead>
                <tr>
                    <th>Prénom Nom</th>
                    <th>Note </th>
                    <th>Appréciation</th>
                </tr>
            </thead>
            <tbody>
            <tr>
            <td>{prenom} {nom}</td>
            <td> {score}/{donnees.questions.length}</td>
            <td> {observ}</td>
            </tr>
            </tbody>

            <td colSpan="3" className="no-border">
            <Link to="/">
            <button  className="bt4"> Retour à la page d'accueil </button>
            </Link>
            </td>
        </table>
       
    
        
       </div>

    )}
    
    return (
    
<div className="main3">  
        <div className="titre3">{donnees.questions[questionActuelle].question}</div>

       <div> {donnees.questions [questionActuelle].reponse.map((reponse) => (
        <button className="bt3" key={reponse} onClick={() => handleClick(reponse)}> {reponse} </button>
        ))} 
        </div>

</div>
    )}
