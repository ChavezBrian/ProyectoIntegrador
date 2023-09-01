import { useState } from 'react';
import styles from './Form.module.css';
import { validation } from './validation';

function Form({ login }){
    const [userData, setUserData] = useState({
        email:'',
        password:'',
    })
    const [errors, setErrors] = useState({})

    function handleChange(evento){
        setErrors(validation({...userData, [evento.target.name]:evento.target.value}))
        setUserData({...userData, [evento.target.name]:evento.target.value})
    }

    const handleSubmit = (evento) =>{
        evento.preventDefault()
        login(userData)
    }

    return <div className={styles.divContainer}>
        <form className={styles.container} onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email:
                <input 
                    type="text"
                    placeholder='Ingrese un email...'
                    id='email'
                    name='email'
                    value={userData.email}
                    onChange={handleChange}
                    className={errors.email && styles.warning}
                    />
            </label>

            { errors.email && (<p className={styles.danger}>{errors.email}</p>) }

            <label htmlFor="password">
                Password:
                <input 
                    type="password"
                    placeholder='Ingrese una contraseña...'
                    id='password'
                    name='password'
                    value={userData.password}
                    onChange={handleChange}
                    className={errors.password && styles.warning}
                    />
            </label>

            { errors.password && <p className={styles.danger}>{errors.password}</p> }
            
            <button>Submit</button>
        </form>
    </div>
}

export default Form;