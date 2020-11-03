import { Snake } from "./Snake";

export interface GameState {
    snake: Snake;
    score: number;
    food: number[];
    isSpeedUpdated: boolean;
    isPaused: boolean;
    isGameOver: boolean;
}
