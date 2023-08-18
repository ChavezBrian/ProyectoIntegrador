import "./App.css";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cards from "./components/Cards/Cards";
import {useState} from "react";
import Nav from "./components/Nav/Nav";
import axios from 'axios'
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import { useEffect } from "react";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const API_KEY = 'henrym-chavezbrian'
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  const EMAIL = "lionelbrian11@gmail.com"
  const PASSWORD = "password"

  const { pathname } = useLocation()
  const navigate = useNavigate()

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
    }
 }

  function onSearch(id){
    if(!id) return alert('Ingresa un Id numérico')
    if(characters.some(char => char.id === parseInt(id))){
      alert(`Ya existe el personaje con el id ${id}`)
      return
    }

    axios(`https://rym2-production.up.railway.app/api/character/${id}?key=${API_KEY}`)
    .then(({data}) => {
      if(data.name){
        setCharacters(prevChars => [...prevChars, data])
      }
    })
    .catch(err => alert(err.response.data.error))
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== parseInt(id)))
  }

  useEffect(()=>{
    !access && navigate('/')
  },[access])

  return (
    <div className="App">
      { pathname !== '/' && <Nav onSearch={onSearch}/> }
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;

