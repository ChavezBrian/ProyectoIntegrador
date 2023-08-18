import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail(){
    const API_KEY = 'henrym-hx-asandoval'
    const { id } = useParams()

    const [characterDetail, setCharacterDetail] = useState({})

    useEffect(()=>{
        axios(`https://rym2-production.up.railway.app/api/character/${id}?key=${API_KEY}`)
        .then(({data})=>{
            setCharacterDetail(data)
        })
        .catch(err => console.log(err.response.data.error))

        return setCharacterDetail({})
    },[id])



    return <div style={{color:'white',backgroundColor:'#7a7674bf'}}>
        <h1>Id: { characterDetail.id }</h1>
        <h2>Name: { characterDetail.name }</h2>
        <h4>Status: { characterDetail.status}</h4>
        <h4>Species: { characterDetail.species}</h4>
        <h4>Gender: { characterDetail.gender} </h4>
        <h4>Origin: { characterDetail.origin?.name}</h4>
        <h4>Location: {characterDetail.location?.name}</h4>
        <img src={characterDetail.image} alt={characterDetail.name} />
    </div>
}

export default Detail;