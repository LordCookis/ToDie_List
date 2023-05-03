import { useEffect, useState } from "react"

const EditItem = ({edit, people, setName, setReason, editPerson}) => {

    const [person, setPerson] = useState({})
    
    const setValueName = (e) => {
        setName(e.target.value)
        setPerson({...person, name: e.target.value})
    }

    const setValueReason = (e) => {
        setReason(e.target.value)
        setPerson({...person, reason: e.target.value})
    }

    useEffect(()=>{
        const filtered = people.find((item)=>item.id === edit.id)
        setPerson(filtered)
    }, [])

    return(
      <>
        <form id="form" onSubmit={()=>editPerson(edit.id)}>
          <input id="input" value={person.name} autoComplete="off" placeholder="Назовите жертву Ситиса" onChange={setValueName}/>
          <br /><br />
          <input id="input" value={person.reason} autoComplete="off" placeholder="Назовите причину таинства" onChange={setValueReason}/>
          <br /><br />
          <button id="add-button" type="submit">Изменить мольбу Матери Ночи</button>
        </form>
      </>
    )
  }
  
  export default EditItem