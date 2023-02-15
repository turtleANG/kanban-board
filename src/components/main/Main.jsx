import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from '../board/Board';
import TaskDetail from '../task-details/TaskDetails';
import css from './Main.module.css';

const Main = (props) => {
  return (
    <main className={css.main}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Board {...props} />} />
          <Route path={'/tasks/:taskId'} element={<TaskDetail {...props} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default Main;