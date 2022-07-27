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
  const [price, setPrice] = useState(0)

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
            return { ...item, title: title, description: description, price: price }
          }
          return item
        })
      )

      setTitle('')
      setDescription('')
      setPrice(0)

      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'value changed')
    } else {
      showAlert(true, 'success', 'item added to the list')
      const newItem = {
        id: new Date().getTime().toString(),
        title: title,
        description: description,
        price:price
      }

      setList([...list, newItem])
      setTitle('')
      setDescription('')
      setPrice(0)

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
    setPrice(specificItem.price)

  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  // App Return
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Products</h3>
        
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
              type="number"
              className="grocery"
              placeholder="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">
          {isEditing ? 'edit' : 'submit'}
        </button>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
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
