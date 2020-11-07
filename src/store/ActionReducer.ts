import { Action, Reducer } from 'redux';
import { GameState } from "./domain/GameState"
import { ActionTypes, MOVE_SNAKE, CHANGE_SNAKE_DIRECTION, PAUSE_GAME, CONTINUE_GAME, RESET_GAME } from './domain/actions'
import { Snake } from './domain/Snake';
import { BOARD_LENGTH, SCORE, SPEED_MULTIPLIER } from '../Constant';

const defaultState: GameState = {
    snake: new Snake(),
    score: 0,
    food: randomPosition(),
    isSpeedUpdated: false,
    isPaused: false,
    isGameOver: false,
};

function randomPosition(): number[] {
    return [Math.floor(Math.random() * BOARD_LENGTH), Math.floor(Math.random() * BOARD_LENGTH)];
}

function copyState(currentState: GameState) {
    const nextState: GameState = {
        snake: new Snake(),
        score: currentState.score,
        food: currentState.food,
        isSpeedUpdated: false,
        isPaused: currentState.isPaused,
        isGameOver: currentState.isGameOver
    };

    const snake = nextState.snake;
    snake.x = currentState.snake.x;
    snake.y = currentState.snake.y;
    snake.speed = currentState.snake.speed;
    snake.direction = currentState.snake.direction;
    snake.bodyLength = currentState.snake.bodyLength;
    snake.body = currentState.snake.body.slice();

    return nextState;
}

export const actionReducer: Reducer<GameState, Action> = (
    state = defaultState,
    action: ActionTypes
) => {

    if (action.type === RESET_GAME) {
        return defaultState;
    }

    const nextState: GameState = copyState(state);
    const snake = nextState.snake;

    switch (action.type) {
        case MOVE_SNAKE:
            snake.move();
            if (snake.x === state.food[0] && snake.y === state.food[1]) {
                snake.bodyLength += 1;
                snake.speed *= SPEED_MULTIPLIER;
                nextState.isSpeedUpdated = true;
                nextState.food = randomPosition();
                nextState.score += SCORE;
            } else if (snake.isCrashed()) {
                console.log('Game is over.');
                nextState.isGameOver = true;
            }
            return nextState;
        case CHANGE_SNAKE_DIRECTION:
            snake.changeDirection(action.direction);
            return nextState;
        case PAUSE_GAME:
            console.log('Pause the game');
            nextState.isPaused = true;
            return nextState;
        case CONTINUE_GAME:
            console.log('Continue the game');
            nextState.isPaused = false;
            return nextState;
        default:
            return state;
    }

}