import Ball from "./Ball";
import Paddle from "./Paddle";
import { Vec2 } from "./Vec2";
import gameElements from "./gameElements";

const gameFactory = (
  paddleLeftPos: Vec2,
  paddleRightPos: Vec2,
  ballPos: Vec2,
  againstAi: Boolean
): gameElements => {
  const paddleLeft = new Paddle(paddleLeftPos, { x: 5, y: 5 }, 15, 100, "left");
  const paddleRight = new Paddle(
    paddleRightPos,
    { x: 5, y: 5 },
    15,
    100,
    againstAi ? "ai" : "right"
  );
  const ball = new Ball(ballPos, 12, { x: 0, y: 0 });

  return {
    paddleLeft,
    paddleLeftScore: 0,
    paddleRight,
    paddleRightScore: 0,
    ball,
    ballSide: "left",
  };
};

export default gameFactory;
