import del from "../assets/del.png"
import { useState, useEffect } from 'react' 

const People = ({people, delPerson, endPerson}) => {

    return(
      <>
        {people.map((person)=>(
          <div key={person.id}>
            <br />
            <div id="div-span"></div>
              <div className="action">
                <button id="del-image" onClick={()=>delPerson(person.id)} width="20" height="20"></button> {/* Воскресить или же Даэрическая буква О*/}
                {!person.killed && <button id="end-image" onClick={()=>endPerson(person.id)} width="20" height="20"></button>} {/* Удалить или же Символ Темного братства*/}
              </div>
              <span id="span" className={person.killed && "killed"}>{person.name}</span><br />
              <span id="span" className={person.killed && "reason"}>{person.reason}</span><hr />
          </div>
        )).reverse()}
      </>
    )
  }
  
export default People