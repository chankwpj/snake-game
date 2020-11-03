import { Direction } from "./Snake";

export const MOVE_SNAKE = 'MOVE_SNAKE';
export const CHANGE_SNAKE_DIRECTION = 'CHANGE_SNAKE_DIRECTION';
export const PAUSE_GAME = 'PAUSE_GAME';
export const CONTINUE_GAME = 'CONTINUE_GAME';

interface MoveAction {
  type: typeof MOVE_SNAKE,
}

interface ChangeDirection {
  type: typeof CHANGE_SNAKE_DIRECTION,
  direction: Direction
}

interface PauseGame {
  type: typeof PAUSE_GAME,
}

interface ContinueGame {
  type: typeof CONTINUE_GAME,
}

export type ActionTypes = MoveAction | ChangeDirection | PauseGame | ContinueGame ;
