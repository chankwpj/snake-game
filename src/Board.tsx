import React from 'react';
import './App.css';
import {BOARD} from './Constant';
import {Snake} from './store/domain/Snake';

interface Props {
  snake: Snake;
  food: number[];
}

class Board extends React.Component {

  render() {
    const { snake, food } = this.props as Props;
    const bodyIdSet = new Set<String>();
    snake.body.map(body => {
      bodyIdSet.add(this.toKey(body[0], body[1]));
    });
    return (
      <div className="snake-game__map-wrapper">
        {BOARD.map((row, rindx) => {
          return row.map((col, cindx) => {
            return <div
            className={this.updateBoard(bodyIdSet, food, rindx, cindx)}
            key={this.toKey(rindx, cindx)}/>
          });
        })}
      </div>
    );
  }

  updateBoard(bodyIdSet: Set<String>, food: number[], x: number, y: number): string {
    if (bodyIdSet.has(this.toKey(x, y))) { //body TODO: change to set
      return "snake-game__draw-snake-body snake-game__map-block-item";
    } else if(x === food[0] && y === food[1]) { //food
      return "snake-game__draw-snake-food snake-game__map-block-item";
    } else {
      return "snake-game__map-block-item";
    }
  }

  toKey(r: number, c: number): string {
    return r + '-' + c;
  }

}

export default Board;
