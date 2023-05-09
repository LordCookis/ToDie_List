const EditItem = ({name, reason, edit, setName, setReason, editPerson}) => {

    const submitEdit = () => {
      editPerson(edit.id)
    }

    return(
      <>
        <form id="form" onSubmit={submitEdit}>
          <input id="input" value={name} autoComplete="off" placeholder="Назовите жертву Ситиса" onChange={(e)=>setName(e.target.value)}/>
          <br /><br />
          <input id="input" value={reason} autoComplete="off" placeholder="Назовите причину таинства" onChange={(e)=>setReason(e.target.value)}/>
          <br /><br />
          <button id="add-button" type="submit">Изменить мольбу Матери Ночи</button>
        </form>
      </>
    )
  }
  
export default EditItem