import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { services } from './services'
import LoginPage from './components/LoginPage'
import AddItem from './components/AddItem'
import EditItem from './components/EditItem'
import People from './components/People'

function App() {
  const [name, setName] = useState("")
  const [reason, setReason] = useState("")
  const [people, setPeople] = useState([])
  const [edit, setEdit] = useState({mod: false, id: 0})
  const [session, setSession] = useState(false)

  useEffect(()=>{
    session && getPeople()
  }, [session])

  const getPeople = async() => {
    const result = await services.todo.get(session.login)
    setPeople(result)
  }

  const addPerson = (e) => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 999999) 
    if (!name) {return}
    const person = {
      id,
      name,
      killed: false,
      reason,
      owner: session.login
    }
    setPeople([...people, person])
    services.todo.add(id, name, reason, session.login)
  }

  const delPerson = (id) => {
    const filtered = people.filter((person) => person.id != id)
    setPeople(filtered)
    services.todo.del(id)
  }

  const endPerson = (id) => {
    const filtered = people.map((person)=> {
      return person.id === id ? {...person, killed: true} : person
    })
    setPeople(filtered)
    services.todo.end(id)
  }

  const editPerson = (id) => {
    const filtered = people.map((person) => {
      return person.id === id ? {...person, name, reason} : person
    })
    setEdit({...edit, mod: false})
    setReason("")
    setPeople(filtered)
    services.todo.upd(id, name, reason)
  }

  return (
    <>
    <div id="main"><center><span id="main-span">Темное Братство</span></center><hr />
      {!session ? <LoginPage
        setSession={setSession}
      /> :
      <>{!edit.mod ? <AddItem 
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
        setSession={setSession}
      /></>}
    </div>
    </>
  )
}

export default App