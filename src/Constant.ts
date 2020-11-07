
const BOARD_LENGTH: number = 15;
const INITIAL_SPEED: number = 100;
const INITIAL_SNAKE_HEAD_X: number = 0;
const INITIAL_SNAKE_HEAD_Y: number = 8;
const INITIAL_BODY: number[][] = [[0, 8], [0, 7], [0, 6], [0, 5], [0, 4], [0, 3], [0, 2], [0, 1], [0, 0]];
const SPEED_MULTIPLIER: number = 0.85;
const SCORE: number = 10;
const BOARD: number[][] = Array.apply(null, Array(BOARD_LENGTH)).map((v1, r) => {
    return Array.apply(null, Array(BOARD_LENGTH)) as number[];
});

export { BOARD_LENGTH, INITIAL_SPEED, INITIAL_SNAKE_HEAD_X, INITIAL_SNAKE_HEAD_Y, INITIAL_BODY, SPEED_MULTIPLIER, SCORE, BOARD };
