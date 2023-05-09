import { PageList } from "./PageList"

export const PageButtons = ({page, setPage, people, total}) => {
  return(
    <center>
    <div id="div-page">
      <button id="page-button" onClick={()=>(page > 0) && setPage(page-1)}>Назад</button>
      <PageList total={total} setPage={setPage} page={page}/>
      <button id="page-button" onClick={()=>((page + 1) < (people.length / 10)) && setPage(page+1)}>Далее</button>
    </div>
  </center>
  )
}