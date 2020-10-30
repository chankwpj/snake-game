import React from 'react';
import './App.css';

interface Props {
  score: number
}

class Score extends React.Component {

  render() {
    const { score } = this.props as Props;
    // console.log('Rendering score');
    return (
      <div>Score: {score}</div>
    );
  }

}

export default Score;
