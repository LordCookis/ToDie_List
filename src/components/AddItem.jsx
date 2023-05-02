const AddItem = ({setName, addPerson}) => {

  return(
    <>
      <form id="form" onSubmit={addPerson}>
        <input id="input" autoComplete="off" placeholder="Назовите жертву Ситиса" onChange={(e)=>setName(e.target.value)}/>
        <br /><br />
        <button id="add-button" type="submit">Совершить Чёрное таинство</button>
      </form>
    </>
  )
}

export default AddItem