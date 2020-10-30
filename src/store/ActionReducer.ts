import { Action, Reducer } from 'redux';
import { GameState } from "./domain/GameState"
import { MOVE_SNAKE, CHANGE_SNAKE_DIRECTION, ActionTypes } from './domain/actions'
import { Snake } from './domain/Snake';

const defaultState: GameState = {
    snake: new Snake(),
    score: 0,
    food: randomPosition(),
    isSpeedUpdated: false
};

function randomPosition(): number[] {
    return [Math.floor(Math.random() * 30), Math.floor(Math.random() * 30)];
}

export const actionReducer: Reducer<GameState, Action> = (
    state = defaultState,
    action: ActionTypes
) => {
    const nextState: GameState = {
        snake: Object.create(state.snake) as Snake,
        score: state.score,
        food: state.food,
        isSpeedUpdated: state.isSpeedUpdated
    };

    const snake = nextState.snake;
    snake.x = state.snake.x;
    snake.y = state.snake.y;
    snake.speed = state.snake.speed;
    snake.direction = state.snake.direction;
    snake.bodyLength = state.snake.bodyLength;
    snake.body = state.snake.body;

    switch (action.type) {
        case MOVE_SNAKE:
            snake.move();
            if (snake.x === state.food[0] && snake.y === state.food[1]) {
                snake.bodyLength += 1;
                snake.speed *= 0.75;
                nextState.isSpeedUpdated = true;
                nextState.food = randomPosition();
                nextState.score += 10;
            } else {
                nextState.isSpeedUpdated = false;
            }
            // console.log("new state", nextState.food);
            return nextState;
        case CHANGE_SNAKE_DIRECTION:
            snake.changeDirection(action.direction);
            return nextState;
        default:
            return state;
    }

}