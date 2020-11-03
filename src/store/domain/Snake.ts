import {BOARD_LENGTH, INITIAL_SPEED, INITIAL_SNAKE_HEAD_X, INITIAL_SNAKE_HEAD_Y, INITIAL_BODY} from "../../Constant";

class Snake {

  x: number = INITIAL_SNAKE_HEAD_X;
  y: number = INITIAL_SNAKE_HEAD_Y;
  bodyLength: number = INITIAL_BODY.length;
  body: number[][] = INITIAL_BODY;
  direction: Direction = Direction.Right;
  speed: number = INITIAL_SPEED;

  move(): void {
    if (this.direction === Direction.Up) {
      this.x -= 1;
    } else if (this.direction === Direction.Down) {
      this.x += 1;
    } else if (this.direction === Direction.Left) {
      this.y -= 1;
    } else if (this.direction === Direction.Right) {
      this.y += 1;
    }

    if (this.x < 0) {
      this.x = BOARD_LENGTH - 1;
    }
    if (this.y < 0) {
      this.y = BOARD_LENGTH - 1;
    }
    if (this.x >= BOARD_LENGTH) {
      this.x = 0;
    }
    if (this.y >= BOARD_LENGTH) {
      this.y = 0;
    }
        
    this.body.unshift([this.x, this.y]); //add to head
    if (this.body.length > this.bodyLength) {
      this.body.pop(); //remove end
    }
  }

  changeDirection(dir: Direction): void {
    if ((dir === Direction.Down && this.direction === Direction.Up)) {
      return;
    }

    if ((dir === Direction.Up && this.direction === Direction.Down)) {
      return;
    }

    if ((dir === Direction.Right && this.direction === Direction.Left)) {
      return;
    }

    if ((dir === Direction.Left && this.direction === Direction.Right)) {
      return;
    }
    this.direction = dir;
  }

  isCrashed(): boolean {
    const set = new Set();
    this.body.map((bodyPart: number[]) => {
      set.add(bodyPart[0] + '' + bodyPart[1]); //TODO: bodyPart comparision is not working
    })
    return set.size !== this.body.length;
  }

}

enum Direction {
  Up,
  Down,
  Left,
  Right
}

export { Snake, Direction };
