import React from 'react';
import { Cell } from '../models/Cell';

type CellComponentProps = {
  cell: Cell;
};

const CellComponent: React.FC<CellComponentProps> = ({ cell }) => {
  return (
    <div className={['cell', `cell_${cell.color}`].join(' ')}>
      {cell.figure?.logo && <img src={cell.figure.logo} />}
    </div>
  );
};

export default CellComponent;
