const People = ({people, delPerson, setEdit, endPerson}) => {

    return(
      <>
        {people.map((person)=>(
          <div key={person.id}>
            <br />
            <div id="div-span"></div>
              <div className="action">
                <button id="del-image" onClick={()=>delPerson(person.id)} width="20" height="20"></button> {/* Удалить или же Даэрическая буква О*/}
                {!person.killed && <button id="end-image" onClick={()=>endPerson(person.id)} width="20" height="20"></button>} {/* Подтвердить или же Символ Темного братства*/}
                {!person.killed && <button id="edit-image" onClick={()=>setEdit({mod: true, id: person.id})} width="20" height="20"></button>} {/* Изменить или же чернильное перо*/}
              </div>
              <span id="span" className={person.killed ? "killed" : undefined}>{person.name}</span><br />
              {person.reason && <span id="span" className={person.killed ? "reason" : undefined}>Причина: {person.reason}</span>}<hr />
          </div>
        )).reverse()}
      </>
    )
  }
  
export default People