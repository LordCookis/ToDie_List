export const PageButtons = ({total, page, setPage, people}) => {
  return(
    <center>
    <div id="div-page">
      <button id="page-button" onClick={()=>(page > 0) && setPage(page-1)}>Назад</button>
      <center><div className="pages">
      {Array(total).fill(1).map((item, index)=>{
        if(index < page-2 || index > page + 2){return}
        return(<button key={index+1} id="page-span" className={`${page === index ? "active" : ""}`} onClick={()=>setPage(index)}>{index+1}</button>)
      })}
      </div></center>
      <button id="page-button" onClick={()=>((page + 1) < (people.length / 10)) && setPage(page+1)}>Далее</button>
    </div>
  </center>
  )
}