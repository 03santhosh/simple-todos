import './index.css'

const TodoItem = (props) => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  )
}

export default TodoItem
