import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')

  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  }
  return []
}

function App() {
  // Hooks
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  //Functions
  const handleSubmit = e => {
    e.preventDefault()
    if (!title) {
      showAlert(true, 'danger', 'please enter value')
    } else if (title && isEditing) {
      setList(
        list.map(item => {
          if (item.id === editID) {
            return { ...item, title: title, description: description }
          }
          return item
        })
      )

      setTitle('')
      setDescription('')

      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'value changed')
    } else {
      showAlert(true, 'success', 'item added to the list')
      const newItem = {
        id: new Date().getTime().toString(),
        title: title,
        description: description
      }

      setList([...list, newItem])
      setTitle('')
      setDescription('')

    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }
  const clearList = () => {
    showAlert(true, 'danger', 'empty list')
    setList([])
  }

  const removeItem = id => {
    showAlert(true, 'danger', 'item removed')
    setList(list.filter(item => item.id !== id))
  }

  const editItem = id => {
    const specificItem = list.find(item => item.id === id)
    setIsEditing(true)
    setEditID(id)

    setTitle(specificItem.title)
    setDescription(specificItem.description)

  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  // App Return
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Grocery bud</h3>
        
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="grocery"
            placeholder="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="drocery-container">
          <List
            items={list}
            removeItem={removeItem}
            list={list}
            editItem={editItem}
          />
          <button className="clear-btn" onClick={clearList}>
            Clear Items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
