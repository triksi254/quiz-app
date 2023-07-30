import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Game from './components/Game';
import Home from './components/Home';
import './App.css';

enum GameStatus {
  NotStarted,
  InProgress,
}

const App: React.FC = () => {
  const [gameStatus, setGameStatus] = useState(GameStatus.NotStarted);

  const handleStartGame = () => {
    setGameStatus(GameStatus.InProgress);
  };

  return (
    <Router>
      <Switch>
        <Route path="/game">
          {gameStatus === GameStatus.InProgress ? <Game /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          <Home onStartGame={handleStartGame} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
