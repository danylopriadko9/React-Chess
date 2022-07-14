import React, { useEffect, useState } from 'react';
import '../App.scss';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import CellComponent from './CellComponent';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: React.FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedSell, setSelectedSell] = useState<Cell | null>(null);

  const onCellClick = (cell: Cell) => {
    if (
      selectedSell &&
      selectedSell !== cell &&
      selectedSell.figure?.canMove(cell)
    ) {
      selectedSell.moveFigure(cell);
      setSelectedSell(null);
    } else {
      setSelectedSell(cell);
    }
  };

  const highlightCells = () => {
    board.highlightCells(selectedSell);
    udateBoard();
  };

  const udateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  useEffect(() => {
    highlightCells();
  }, [selectedSell]);

  return (
    <div className='board'>
      {board.cells.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((cell) => (
            <CellComponent
              click={onCellClick}
              cell={cell}
              key={cell.id}
              selected={
                cell.x === selectedSell?.x && cell.y === selectedSell?.y
              }
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
