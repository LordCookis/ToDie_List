const AddItem = ({setName, setReason, addPerson}) => {

  return(
    <>
      <form id="form" onSubmit={addPerson}>
        <input id="input" autoComplete="off" placeholder="Назовите жертву Ситиса" onChange={(e)=>setName(e.target.value)}/>
        <br /><br />
        <input id="input" autoComplete="off" placeholder="Назовите причину таинства" onChange={(e)=>setReason(e.target.value)}/>
        <br /><br />
        <button id="add-button" type="submit">Совершить Черное таинство</button>
      </form>
    </>
  )
}

export default AddItem