const People = ({people, delPerson, startEdit, endPerson, logout}) => {

    return(
      <><hr />
      <button id="add-button" onClick={logout}>Покинуть убежище</button>
        {people?.map((person)=>(
          <div key={person.id}>
            <hr /><br />
            <div id="div-span"></div>
              <div className="action">
                <button id="del-image" onClick={()=>delPerson(person.id)} width="20" height="20"></button>
                {!person.killed && <button id="end-image" onClick={()=>endPerson(person.id)} width="20" height="20"></button>}
                {!person.killed && <button id="edit-image" onClick={()=>startEdit(person.name, person.reason, person.id)} width="20" height="20"></button>}
              </div>
              <span id="span" className={person.killed ? "killed" : undefined}>{person.name}</span><br />
              {person.reason && <span id="span" className={person.killed ? "reason" : undefined}>Причина: {person.reason}</span>}<br /><br />
          </div>
        )).reverse()}
      </>
    )
  }
  
export default People