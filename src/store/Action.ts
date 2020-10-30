import {MOVE_SNAKE, CHANGE_SNAKE_DIRECTION} from './domain/actions';
import { Direction } from './domain/Snake';

export const moveSnake = () => ({
    type: MOVE_SNAKE,
});

export const changeSnakeDirection = (dir: Direction) => ({
    type: CHANGE_SNAKE_DIRECTION,
    direction: dir,
});