import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites
}) {
  // console.log(props);
  const [isFav, setIsFav] = useState(false);
  const { pathname } = useLocation()

   useEffect(()=>{
      myFavorites.forEach(charFav => {
         charFav.id === id && setIsFav(true)
      })
   },[myFavorites])

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
      });
    }
  };

  return (
    <div className={styles.container}>
      { pathname === '/home' && <button onClick={() => onClose(id)}>X</button> }
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <h2>{id}</h2>
      <Link to={`/detail/${id}`}>
        <h2 className={styles.titleName}>{name}</h2>
      </Link>
      <h2>{species}</h2>
      <h2>{status}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export function mapStateToProps(state){
   return {
      myFavorites:state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
