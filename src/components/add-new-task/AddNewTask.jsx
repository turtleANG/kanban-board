import { useState } from 'react'
import { LIST_BLOKS } from '../../config'

import css from './AddNewTask.module.css';

const AddNewTask = (props) => {
  const { type, formSubmit, dropdown, changeStatus, setDropdownListType } = props
  const [values, setValues] = useState({
    title: ''
  })


  const handleChangeInput = e => {
    const fieldName = e.target.name
    setValues({ ...values, [fieldName]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (values.title) {
      formSubmit(values.title)
    }
  }

  const handleChangeSelect = (e) => {
    const newStatus = type
    const taskId = e.target[e.target.selectedIndex].id
    changeStatus(taskId, newStatus)
  }

  const listTasks = dropdown.filter(task => task.status === setDropdownListType(type))

  return (
    <>
      {type === LIST_BLOKS.BACKLOG ? (
        <form onSubmit={handleSubmit} className={css.form}>
          <input className={css.addInput} id='taskTitle' name='title' type='text' placeholder='Enter task title' onChange={handleChangeInput} value={values.title} autoFocus={true} />
          <button className={css.submitButton} type='submit'>Submit</button>
        </form>
      ) :
        (
          <select className={css.selectTask} onChange={handleChangeSelect}>
            <option></option>
            {Object.values(listTasks).map(list => {
              return (
                <option className={css.optionTask} key={list.id} id={list.id} value={list.title}>{list.title}</option>
              )
            })}
          </select>
        )}
    </>
  );
}

export default AddNewTask;