export const PageButtons = ({page, setPage, people}) => {
  return(
    <center>
    <div id="div-page">
      <button id="page-button" onClick={()=>(page > 0) && setPage(page-1)}>Назад</button>
      <span id="page-span">{page + 1} / {Math.ceil(people.length / 10)}</span>
      <button id="page-button" onClick={()=>((page + 1) < (people.length / 10)) && setPage(page+1)}>Далее</button>
    </div>
  </center>
  )
}