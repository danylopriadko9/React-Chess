import { Board } from './Board';
import { Colors } from './Colors';
import { Figure } from './figures/Figure';

export class Cell {
  readonly x: Number;
  readonly y: Number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  available: boolean; // можно ли переместиться на данное поле
  id: number; // для реакт ключей

  // создаем ячейку и передаем в нее нужные нам свойства
  constructor(
    board: Board,
    x: Number,
    y: Number,
    color: Colors,
    figure: Figure | null
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.available = false;
    this.id = Math.random();
  }
}
