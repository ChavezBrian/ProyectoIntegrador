import style from "./SearchBar.module.css"
import {useState} from "react"

export default function SearchBar({ onSearch }) {

  const [id, setId] = useState('')

  function handleChange(evento){
    setId(evento.target.value)
 } 

  const search = () => {
    onSearch(id)
    setId('')
  }

  return (
    <div className={style.container}>
      <input className={style.input} type="search" onChange={handleChange} value={id} />
      <button className={style.button} onClick={search}>Agregar</button>
    </div>
  );
}
