import React, { useState } from 'react';
import "./App.css"

const VotingApp = () => {
  const [votesA, setVotesA] = useState(0);
  const [votesB, setVotesB] = useState(0);

  const voteForA = () => {
    setVotesA(votesA + 1);
  };

  const voteForB = () => {
    setVotesB(votesB + 1);
  };

  const result = () => {
    if (votesA > votesB) {
      alert('Bharatiya janta Party wins');
    } else if (votesB > votesA) {
      alert('Aam Aadmi Party wins');
    } else {
      alert('tie');
    }
  };

  return (
    <div className="container">
      <h2>Voting Application</h2>
      <div className="vote-section">
        <h3>Bharatiya Janta Party: {votesA} votes</h3>
        <button className="vote-button" onClick={voteForA}>
          Vote for A
        </button>
      </div>
      <div className="vote-section">
        <h3>Aam Aadmi Party: {votesB} votes</h3>
        <button className="vote-button" onClick={voteForB}>
          Vote for B
        </button>
      </div>
      <button className="submit-button" onClick={result}>
        Submit
      </button>
    </div>
  );
};

export default VotingApp;
