import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from './store/rootStore';
import keydown from 'react-keydown';

import './App.css';
import Board from './Board';
import { Direction, Snake } from './store/domain/Snake';
import { moveSnake, changeSnakeDirection, pauseGame, continueGame, resetGame } from './store/Action';
import Score from './Score';
import Modal from './Modal';

interface AppProps {
  move: () => void;
  changeDirection: (dir: Direction) => void;
  pauseCommand: () => void;
  continueCommand: () => void;
  resetCommand:() => void;
}

//TODO: this should be able to extends AppProps and AppState
interface FullProps {
  move: () => void;
  changeDirection: (dir: Direction) => void;
  pauseCommand: () => void;
  continueCommand: () => void;
  resetCommand:() => void;
  snake: Snake;
  score: number;
  food: number[];
  isSpeedUpdated: boolean;
  isPaused: boolean;
  isGameOver: boolean;
}

const mapStateToProps = (state: AppState) => ({
  snake: state.actionReducer.snake,
  score: state.actionReducer.score,
  food: state.actionReducer.food,
  isSpeedUpdated: state.actionReducer.isSpeedUpdated,
  isPaused: state.actionReducer.isPaused,
  isGameOver: state.actionReducer.isGameOver
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  move: () => dispatch(moveSnake()),
  changeDirection: (dir: Direction) => dispatch(changeSnakeDirection(dir)),
  pauseCommand: () => dispatch(pauseGame()),
  continueCommand: () => dispatch(continueGame()),
  resetCommand:() => dispatch(resetGame()),
});

class App extends React.Component<AppProps, AppState> {

  gameInterval: NodeJS.Timeout = setInterval(() => { }, 300);

  componentDidMount() {
    const fullProps = this.props as FullProps;
    if (!fullProps.isPaused) {
      this.gameInterval = setInterval(() => { this.props.move() }, fullProps.snake.speed);
    }
  }

  componentDidUpdate() {
    const fullProps = this.props as FullProps;
    if (fullProps.isGameOver) {
      clearInterval(this.gameInterval);
    } else if (!fullProps.isPaused || fullProps.isSpeedUpdated) {
      clearInterval(this.gameInterval);
      this.gameInterval = setInterval(() => { this.props.move() }, fullProps.snake.speed);
    } else {
      clearInterval(this.gameInterval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.gameInterval);
  }

  render() {
    const fullProps = this.props as FullProps;
    if (fullProps.isGameOver) {
      return (
        <Modal {...this.props}></Modal>
      )
    } else {
      return (
        <div className="App">
          <Score {...this.props} />
          <Board {...this.props} />
          <div>
            <p>Moving: Arrow Keys</p>
            <p>Stop/Resume: Esc</p>
          </div>
        </div>
      );
    }
  }

  @keydown('down')
  arrowDown(): any {
    this.props.changeDirection(Direction.Down);
  }

  @keydown('up')
  arrowUp(): any {
    this.props.changeDirection(Direction.Up);
  }

  @keydown('left')
  arrowLeft(): any {
    this.props.changeDirection(Direction.Left);
  }

  @keydown('right')
  arrowRight(): any {
    this.props.changeDirection(Direction.Right);
  }

  @keydown('esc')
  esc(): any {
    const fullProps = this.props as FullProps;
    if (fullProps.isPaused) {
      fullProps.continueCommand();
    } else {
      fullProps.pauseCommand();
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
