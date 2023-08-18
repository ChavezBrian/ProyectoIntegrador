import { connect } from "react-redux";
import Card from "../Card/Card";
import styles from './Favorites.module.css'

function Favorites({ myFavorites }){
    return <div className={styles.container}>
        {myFavorites.map(char => (
            <Card
                key={char.id}
                id={char.id}
                name={char.name}
                status={char.status}
                gender={char.gender}
                species={char.species}
                origin={char.origin.name}
                image={char.image}
            />
        ))}
    </div>
}

export function mapStateToProps(state){
    return {
        myFavorites:state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites) ;