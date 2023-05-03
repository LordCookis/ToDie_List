import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import AddItem from './components/AddItem'
import EditItem from './components/EditItem'
import People from './components/People'

function App() {
  const [name, setName] = useState("")
  const [reason, setReason] = useState("")
  const [people, setPeople] = useState([])
  const [edit, setEdit] = useState({mod: false, id: 0})

  const addPerson = (e) => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 999999) 
    if (!name) {return}
    const person = {
      id,
      name,
      killed: false,
      reason
    }
    setPeople([...people, person])
  }

  const delPerson = (id) => {
    const filtered = people.filter((person) => person.id != id)
    setPeople(filtered)
  }

  const endPerson = (id) => {
    const filtered = people.map((person)=> {
      return person.id === id ? {...person, killed: true} : person
    })
    setPeople(filtered)
  }

  const editPerson = (id) => {
    const filtered = people.map((person) => {
      return person.id === id ? {...person, name, reason} : person
    })
    setEdit({...edit, mod: false})
    setReason("")
    setPeople(filtered)
  }

  return (
    <div id="main">
      {!edit.mod ? <AddItem 
        setName={setName}
        setReason={setReason}
        addPerson={addPerson}
      /> :
      <EditItem
        people={people}
        edit={edit}
        setName={setName}
        setReason={setReason}
        editPerson={editPerson}
      />}
      <People 
        people={people}
        edit={edit}
        setEdit={setEdit}
        delPerson={delPerson}
        endPerson={endPerson}
      />
    </div>
  )
}

export default App