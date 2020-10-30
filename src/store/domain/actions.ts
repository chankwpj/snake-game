import { Direction } from "./Snake";

export const MOVE_SNAKE = 'MOVE_SNAKE';
export const CHANGE_SNAKE_DIRECTION = 'CHANGE_SNAKE_DIRECTION';

interface MoveAction {
  type: typeof MOVE_SNAKE,
}

interface ChangeDirection {
  type: typeof CHANGE_SNAKE_DIRECTION,
  direction: Direction
}

export type ActionTypes = MoveAction | ChangeDirection;
