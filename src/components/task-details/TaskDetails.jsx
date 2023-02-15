import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import closeIcon from '../../assets/closeIcon.svg'
import css from './TaskDetails.module.css';

const TaskDetail = (props) => {
  const params = useParams();
  const taskId = params.taskId;
  const { tasks, setTasks } = props
  const task = tasks.find(task => task.id === taskId)
  const [isVisible, setVisible] = useState(false)
  const defaultDescription = task ? task.description : ''
  const [description, setDescription] = useState(defaultDescription)

  const handleEditClick = () => {
    setVisible(!isVisible)
  }

  const handleChange = e => {
    setDescription(e.target.value)
  }

  const saveChanges = (e) => {
    e.preventDefault();
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, description: description }
      }
      return task
    });
    setTasks(updatedTasks)
    setVisible(false)
  }

  const renderTaskDetails = () => {
    return (
      <div className={css.taskDetails}>
        <div className={css.header}>
          <h2 className={css.title}>{task.title}</h2>
          <Link to='/' className={css.close}><img src={closeIcon} alt='close icon' /></Link>
        </div>
        <form className={css.description} onSubmit={saveChanges}>
          <div>
            {!isVisible ? <p onClick={handleEditClick}>{task.description || 'This task has no description'}</p> : (
              <textarea className={css.textarea} rows='10' autoFocus={true} value={description} onChange={handleChange} name='description' placeholder='Enter task description'>{task.description}</textarea>
            )}
          </div>
          <div className={css.buttons}>
            {isVisible ? <button className={css.button} type='submit'>Save</button> : ''}
          </div>
        </form>
      </div>
    )
  }

  const renderEmptyState = () => {
    return (
      <div className={css.emptyState}>
        <h2>Task with ID <em>{taskId}</em> was not found</h2>
        <Link to='/' className={css.close}><img src={closeIcon} alt='close icon' /></Link>
      </div>
    )
  }

return (
  <>
    {task ? renderTaskDetails() : renderEmptyState()}
  </>
)
}

export default TaskDetail
