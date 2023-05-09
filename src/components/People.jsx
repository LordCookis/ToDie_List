import { useState, useEffect } from 'react'
import { PeopleList } from './People/PeopleList'
import { PageButtons } from './People/PageButtons'

const People = ({page, setPage, people, delPerson, startEdit, endPerson, logout}) => {
    const [from, setFrom] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(()=>{
      if(page+1 > Math.ceil(people.length / 10) && people.length){
        setPage(page-1)
      }
      setTotal(Math.ceil(people.length / 10))
      console.log(total)
      setFrom(page * 10)
    }, [page, people])

    return(
      <>
        <hr />
        <button id="add-button" onClick={logout}>Покинуть убежище</button><hr />

        <PageButtons
          page={page}
          people={people}
          setPage={setPage}
          total={total}/>

        <PeopleList
          from={from}
          people={people}
          delPerson={delPerson}
          startEdit={startEdit}
          endPerson={endPerson}/>
      </>
    )
  }
  
export default People