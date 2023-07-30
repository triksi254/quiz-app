import React from 'react';
import { useHistory } from 'react-router-dom';

interface LandingPageProps {
  onStartGame: () => void;
}

const Home: React.FC<LandingPageProps> = ({ onStartGame }) => {
  const history = useHistory();

  const handleStartGame = () => {
    onStartGame();
    history.push('/game');
  };

  return (
    <div className="home">
    <div className="landing-page">
      <h1>Welcome to the Quiz Game</h1>
      <p>Are you ready to start the vetting process?</p>
      <button onClick={handleStartGame}>Start</button>
    </div>
    </div>
  );
};

export default Home;
