import React from 'react';
import './App.css';
import {Snake} from './store/domain/Snake';

interface Props {
  snake: Snake;
  food: number[];
}

class Board extends React.Component {

  render() {
    const { snake, food } = this.props as Props;
    return (
      <div className="snake-game__map-wrapper">
        {
          Array.apply(0, Array(30)).map((v1, r) => {
            return Array.apply(0, Array(30)).map((v2, c) => {
              return <div
                className={this.updateBoard(snake, food, r, c)}
                key={this.toKey(r, c)} />
            })
          })
        }
      </div>
    );
  }

  updateBoard(snake: Snake, food: number[], x: number, y: number): string {
    if (snake.body.find((e:number[]) => e[0] === x && e[1] === y)) {
      return "snake-game__draw-snake-body snake-game__map-block-item";
    } else if(x === food[0] && y === food[1]) {
      return "snake-game__draw-snake-food snake-game__map-block-item";
    } else {
      return "snake-game__map-block-item";
    }
  }

  toKey(r: number, c: number): string {
    return r + '' + c;
  }

}

export default Board;
