import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from './store/rootStore';
import keydown from 'react-keydown';

import './App.css';
import Board from './Board';
import { Direction, Snake } from './store/domain/Snake';
import { moveSnake, changeSnakeDirection } from './store/Action';
import Score from './Score';

interface AppProps {
  move: () => void;
  changeDirection: (dir: Direction) => void;
}

interface FullProps {
  move: () => void;
  changeDirection: (dir: Direction) => void;
  snake: Snake;
  score: number;
  food: number[];
  isSpeedUpdated: boolean;
}

const mapStateToProps = (state: AppState) => ({
  snake: state.actionReducer.snake,
  score: state.actionReducer.score,
  food: state.actionReducer.food,
  isSpeedUpdated: state.actionReducer.isSpeedUpdated
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  move: () => dispatch(moveSnake()),
  changeDirection: (dir: Direction) => dispatch(changeSnakeDirection(dir)),
});

class App extends React.Component<AppProps, AppState> {

  gameInterval = setInterval(() => { }, 300);

  componentDidMount() {
    const other = this.props as FullProps;
    console.log("speed", other.snake.speed);
    this.gameInterval = setInterval(() => { this.props.move() }, other.snake.speed);
  }

  componentDidUpdate() {
    const other = this.props as FullProps;
    if (other.isSpeedUpdated) {
      clearInterval(this.gameInterval);
      console.log("speed", other.snake.speed);
      this.gameInterval = setInterval(() => { this.props.move() }, other.snake.speed);
    }
  }

  componentWillUnmount() {
    clearInterval(this.gameInterval);
  }

  render() {
    return (
      <div className="App">
        <Score {...this.props} />
        <Board {...this.props} />
        <div>Pause Button</div>
        <div>Direction Control</div>
      </div>
    );
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

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
