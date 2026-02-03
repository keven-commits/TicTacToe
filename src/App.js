import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';



function Square({ value, onSquareClick }) {
  1
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

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

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

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

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function BasicSwitches() {
  const [showDiv, setShowDiv] = useState(true);
  const handleToggle = (event) => { setShowDiv(event.target.checked) }
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked checked={showDiv} onChange={handleToggle} />}
          label="Show/Hide Div"
        />
      </FormGroup>
      {showDiv && (
        <div>La div s'affiche</div>
      )}
    </>
  );
}

function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
      <Avatar alt="Travis Howard" src="data:image/jpeg;base64,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" />
      <Avatar alt="Cindy Baker" src="data:image/jpeg;base64,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" />
    </Stack>
  );
}

function BasicBreadcrumbs() {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" a href="https://www.google.com/?hl=fr">
          Google
        </Link>
        <Link underline="hover" color="inherit" a href="https://mui.com"
        >
          MUI
        </Link>
        <Link underline="hover" color="inherit" a href="https://mui.com/material-ui/react-breadcrumbs/"
        >
          Breadcrumbs
        </Link>
      </Breadcrumbs>
    </div>
  );
}

const fileTree = {
  label: "C:", children: [{ label: "Users", children: [{ label: "Keven", children: [{ label: "Desktop", children: [{ label: "GitKraken", children: [{label: "TicTacToe", children: [{label: "src"}]}] }]}]}]}]};

function FolderItem({ item, level = 0 }) {
  const [open, setOpen] = React.useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <>
      <ListItemButton
        onClick={() => hasChildren && setOpen(!open)}
        sx={{ pl: 2 + level * 2 }}
      >
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>

        <ListItemText primary={item.label} />

        {hasChildren &&
          (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>

      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {item.children.map((child, index) => (
              <FolderItem
                key={index}
                item={child}
                level={level + 1}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}

function NestedList() {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      subheader={
        <ListSubheader component="div">
          Files Path to TicTacToe.app
        </ListSubheader>
      }
    >
      <FolderItem item={fileTree} />
    </List>
  );
}

export default function App() {
  return (
    <Container>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Tic Tac Toe</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Game />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Autres MUI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={2}>
            <HoverRating />
            <BasicSwitches />
            <ImageAvatars />
            <LinearProgress variant="determinate" value={50} />
            <BasicBreadcrumbs />
            <NestedList />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
