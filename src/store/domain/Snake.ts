import { textSpanIsEmpty } from "typescript";

class Snake {

  x: number = 0;
  y: number = 2;
  bodyLength: number = 3;
  body: number[][] = [[0, 2], [0, 1], [0, 0]];
  direction: Direction = Direction.Right;
  speed: number = 250;

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
      this.x = 29;
    }
    if (this.y < 0) {
      this.y = 29;
    }
    if (this.x >= 30) {
      this.x = 0;
    }
    if (this.y >= 30) {
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

}

enum Direction {
  Up,
  Down,
  Left,
  Right
}

export { Snake, Direction };
