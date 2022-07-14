import { Colors } from '../Colors';
import { Figure, figureName } from './Figure';
import blackLogo from '../../assets/black-pawn.png';
import whiteLogo from '../../assets/white-pawn.png';
import { Cell } from '../Cell';

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);

    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = figureName.PAWN;
  }
}
