import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LIST_BLOKS } from '../../config'
import AddNewTask from '../add-new-task/AddNewTask'
import css from './List.module.css'

const List = (props) => {
  const { type, title, tasks, addNewTask, changeTaskStatus, dropdown } = props
  const [isFormVisible, setFormVisible] = useState(false)

  const handleAddNewClick = () => {
    setFormVisible(!isFormVisible)
  }

  const formSubmit = (title) => {
    addNewTask(title)
    setFormVisible(!isFormVisible)
  }

  const changeStatus = (taskId, status) => {
    changeTaskStatus(taskId, status)
    setFormVisible(!isFormVisible)
  }

  const setDropdownListType = (type) => {
    const listBlocks = Object.values(LIST_BLOKS)
    const currentIndex = listBlocks.indexOf(type)
    return listBlocks[currentIndex - 1]
  }

  return (
    <div className={css.list}>
      <h2 className={css.listTitle}>{title}</h2>
      {tasks.length ? 
        tasks.map(task =>
          <Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
            <div className={css.listItem}>{task.title}</div>
          </Link>
        ) :
        <p className={css.noTaskListItem}>No tasks added yet</p>
      }
      {isFormVisible ? (
        <AddNewTask formSubmit={formSubmit} changeStatus={changeStatus} type={type} tasks={tasks} dropdown={dropdown} setDropdownListType={setDropdownListType} />
      ) :
        <button onClick={handleAddNewClick} className={css.addButton}>+ Add new task</button>
      }
    </div>
  )
}

export default List
