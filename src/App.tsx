import React, { useEffect, useState } from 'react';
import './App.scss';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';

function App() {
  // создаем состояние доски
  const [board, setBoard] = useState(new Board());

  // вызываем инициализацию доски при первом рендере страницы
  useEffect(() => {
    restart();
  }, []);

  const restart = () => {
    // создаем новую доску и инициализируем её
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };
  return (
    <div className='app'>
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
