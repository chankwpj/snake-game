import {MOVE_SNAKE, CHANGE_SNAKE_DIRECTION, PAUSE_GAME, CONTINUE_GAME, RESET_GAME} from './domain/actions';
import { Direction } from './domain/Snake';

export const moveSnake = () => ({
    type: MOVE_SNAKE,
});

export const changeSnakeDirection = (dir: Direction) => ({
    type: CHANGE_SNAKE_DIRECTION,
    direction: dir,
});

export const pauseGame = () => ({
    type: PAUSE_GAME,
});

export const continueGame = () => ({
    type: CONTINUE_GAME,
});

export const resetGame = () => ({
    type: RESET_GAME,
});

