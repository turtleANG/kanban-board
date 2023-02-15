import uniqid from 'uniqid'
import { LIST_BLOKS, LIST_TITLES } from '../../config'
import List from '../list/List';
import css from './Board.module.css';

const Board = (props) => {
  const { tasks, setTasks } = props

  const addNewTask = (title) => {
    const task = {
      id: uniqid(),
      title,
      description: '',
      created: new Date().toISOString(),
      status: 'backlog',
    }

    setTasks([...tasks, task]);
  }

  const changeTaskStatus = (taskId, status) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, created: new Date().toISOString(), status: status }
      }
      return task
    })
    updatedTasks.sort(function (a, b) {
      if (a.created > b.created) {
        return 1;
      }
      if (a.created < b.created) {
        return -1;
      }
      return 0;
    });
    setTasks(updatedTasks)
  }

  return (
    <section className={css.board}>
      {
        Object.values(LIST_BLOKS).map(type => {
          const dropdown = tasks
          const listTasks = tasks.filter(task => task.status === type)
          return (
            <List
              key={LIST_TITLES[type]}
              type={type}
              title={LIST_TITLES[type]}
              tasks={listTasks || []}
              dropdown={dropdown}
              addNewTask={addNewTask}
              changeTaskStatus={changeTaskStatus}
            />
          )
        })
      }
    </section>
  );
}

export default Board;