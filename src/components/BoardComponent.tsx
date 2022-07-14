import React from 'react';
import '../App.scss';
import { Board } from '../models/Board';
import CellComponent from './CellComponent';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
  return (
    <div className='board'>
      {board.cells.map((cells, i) => (
        <React.Fragment key={i}>
          {cells.map((cell) => (
            <CellComponent cell={cell} key={cell.id} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
