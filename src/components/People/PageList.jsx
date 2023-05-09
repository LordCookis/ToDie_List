import { useEffect } from "react"

export const PageList = ({total, setPage, page}) =>{

  useEffect(()=>{
    console.log("page", page)
    console.log("total", total)
  },[page])

  return(
    <>
    <center className="pages">
        {Array(total).fill(1).map((item, index)=>{
          if(index < page-2 || index > page + 2){return}
          return <button key={index+1} id="page-span" className={`${page === index ? "active" : ""}`} onClick={()=>setPage(index)}>{index+1}</button>           
        })}
    </center>
    </>
  )
}