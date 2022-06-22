import { Container, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { AppContext } from '../components/AppContext.js'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../http/userAPI.js'
import pol from './images/user.png';
import './css/main.css';

const User = () => {
    const { user } = useContext(AppContext)
    const navigate = useNavigate()

    const handleLogout = (event) => {
        logout()
        user.logout()
        navigate('/login', {replace: true})
    }

    return (
        <Container>
            <h1>Личный кабинет</h1>
            <p>
                Это личный кабинет покупателя магазина.
            </p>
            <ol>
                <li><Link style={{color: 'black',}} to="/user/orders">История заказов</Link></li>
            </ol>
            <Button onClick={handleLogout}>Выйти</Button>
            <div class="icons3">
            <img src={pol} alt="BigCo Inc. logo"/>
            </div>
        </Container>
    )
}

export default User