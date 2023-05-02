import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { services } from './services'
import AddItem from './components/AddItem'
import People from './components/People'

function App() {
  const [name, setName] = useState("")
  const [people, setPeople] = useState([])

  const addPerson = (e) => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 999999) 
    if (!name) {return}
    const person = {
      id,
      name,
      killed: false,
      reason: "Причина: прикола ради"
    }
    setPeople([...people, person])
    console.log(people)
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
    console.log(people)
  }

  return (
    <div id="main">
      <AddItem 
        setName={setName}
        addPerson={addPerson}
      />
      <People 
        people={people}
        delPerson={delPerson}
        endPerson={endPerson}
      />
    </div>
  )
}

export default App