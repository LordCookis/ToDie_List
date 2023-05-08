import { useState, useEffect } from 'react'

const People = ({page, setPage, people, delPerson, startEdit, endPerson, logout}) => {
    const [from, setFrom] = useState(0)

    useEffect(()=>{
      if(page > (Math.ceil(people.length / 10))){
        setPage(page-1)
      }
      setFrom(page * 10)
    }, [page, people])

    return(
      <><hr />
      <button id="add-button" onClick={logout}>Покинуть убежище</button><hr />
      <center><div id="div-page">
        <button id="page-button" onClick={()=>(page > 0) && setPage(page-1)}>Назад</button>
        <span id="page-span">{page + 1} / {Math.ceil(people.length / 10) + 1}</span>
        <button id="page-button" onClick={()=>((page + 1) < (people.length / 10)) && setPage(page+1)}>Далее</button>
      </div></center>
        {people?.map((person, index)=>(
          (index >= from && index < (from + 10)) ?
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
        : false)).reverse()}
      </>
    )
  }
  
export default People