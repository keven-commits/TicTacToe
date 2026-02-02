/// useState : fonction qui permet de se rappeler des changements
import { useState } from "react";
/// la fonction "Square" retourne "onSquareClick" lorsqu'on clique
function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

function Board({ xIsNext, squares, onPlay }) {
    /// si "squares[i]" possède déjà un élément, la fonction return, donc on overlap pas avec un "X" ou un "O" sur la même case
    /// on vérifie ici si la partie est terminée (gagnant ou nulle) afin de ne pas pouvoir "handleClick"
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        /// ".slice()" permet d'extraire une partie de l'array ou la string sans modifier la valeure originale, dans d'autres mots, ça crée une copie
        const nextSquares = squares.slice();
        /// constante "xIsNext" en booléan pour véfifier avec la condition if pour changer entre "X" et "O"
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    /// on ajoute ici un calculateur de gagnant qui a gagné ou à qui est le prochain tour
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        /// "xIsNext" est en boolean et sait si X est le prochain à jouer, avec "? "X" : "O"", on retourne si oui alors = X, si non alors = O
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    /// return entre parenthèse
    /// Syntaxe component JSX "<Square... />"
    /// on connecte les fonctions "onSquareClick" et "handleClick" en y ajoutant "() =>" on définie une fonction qui va appliquer la commande suivante. dans ce cas ci : quand "onSquareClick" est cliqué on va run "handleClick()" sans cette fonction, on part dans une loop car il n'attend pas le click
    /// on ajoute ici un component status afin de montrer à qui est le tour ou le gagnant.
    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}
function calculateWinner(squares) {
    /// ici on met en compte les façons de gagner au tictactoe
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        /// on vérifie ici si la valeur ("X" ou "O") de squares en position [a, b, c] est la même pour déclarer un gagnant.
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
/// on met la fonction "Game" en priorité et on appel la fonction Board à l'intérieur en tant que component
export default function Game() {
    /// ajout des constantes "xIsNext" pour voir qui est le prochain et "history" pour suivre les actions des joueurs
    const xIsNext = currentMove % 2 === 0;
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }
    /// création d'une constante move qui égal l'history.map : ".map" transforme l'history des déplacement en éléments React représentant des boutons à l'écran
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

/// function ({}) ligne 12
/// .slice() ligne 20
/// Key ligne 113
/// history, setHistory... ligne 94
/// useState ligne 88
/// ... ligne 94