import { LIST_BLOKS } from '../../config'
import css from './Footer.module.css';

const Footer = (props) => {
  const { tasks } = props
  const activeTasks = tasks.filter(task => task.status === LIST_BLOKS.BACKLOG)
  const finishedTasks = tasks.filter(task => task.status === LIST_BLOKS.FINISHED)

  return (
    <footer className={css.footer}>
      <div className={css.tasksCount}>
        <div className={css.tasksCount__item}>Active tasks: {activeTasks.length}</div>
        <div className={css.tasksCount__item}>Finished tasks: {finishedTasks.length}</div>
      </div>
      <div>
        Kanban board by Natalia, 2023
      </div>
    </footer>
  );
}

export default Footer;