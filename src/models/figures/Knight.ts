import { Colors } from '../Colors';
import { Figure, figureName } from './Figure';
import blackLogo from '../../assets/black-knight.png';
import whiteLogo from '../../assets/white-knight.png';
import { Cell } from '../Cell';

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = figureName.KNIGHT;
  }
}
