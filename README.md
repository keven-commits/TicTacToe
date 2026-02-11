# TicTacToe
Truc appris :

    - useState : fonction qui permet de se rappeler des changements (import { useState } from "react";)
    - paramètre d'une fonction entre ({})
    - ".slice()" permet d'extraire une partie de l'array ou la string sans modifier la valeure originale, dans d'autres mots, ça crée     une copie
    - return entre parenthèse
    - les component doivent retourner un seul element JSX on doit donc wrapper dans <></>
    - Syntaxe component JSX "<Square... />"
    - function prioritaire : (export default function ...())
    - pouvoir vérifier en même temps deux conditions :   if (squares[i] || calculateWinner(squares)) 
    - display entre {} : <div className="status">{status}</div>
    - ".map" transforme l'history des déplacement
    - key permet de suivre en ordre chronologique l'history des déplacement
    - téléchargement du React DevTools browser extension
    - npm (node package manager)install pour installer les packages
    - npm start pour afficher en localhost sur le browser avec le link créé dans le terminal
    - pour un serveur, il est important de créer un dossier server et d'y installer les package.json (npm init, npm install express), afin de ne pas avoir de conflit avec le react
    - reset le server sur VSCode lors de changement ou utiliser "nodemon exemple.js" qui va reset le port à chanque changement dans le dossier
    - dir/* n'existe plus dans la version d'express : solution de Chatgpt : "/^\/dir\/(.*)/"
    - NE PAS OUBLIER LE "/" A LA FIN D'UN ADRESSE QUAND ON VEUX ACCÈDER À DES DOSSIERSSSSSSSSSSSSS 
    

Difficultées :

    - const [squares, setSquares] = useState(Array(9).fill(null)); "useState"
    - const [xIsNext, setXIsNext]
    - [...history.slice(0, currentMove + 1), nextSquares]
    - création d'un projet React initial avec node modules, index, package.json etc.

MUI :

    - Losrqu'on ajoute un MUI, il faut installer les packages reliés dans le cas de l'accordeon : "npm install @mui/material @mui/icons-material @emotion/react @emotion/styled"
    - En téléchargeant les packages, plusieur component de MUI sont présente comme "container" qui permer de mettre une marge, tout comme stack spacing... etc