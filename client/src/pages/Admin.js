import { Container, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { AppContext } from '../components/AppContext.js'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../http/userAPI.js'
import admom from './images/admin.png';
import './css/main.css';

const Admin = () => {
    const { user } = useContext(AppContext)
    const navigate = useNavigate()

    const handleLogout = (event) => {
        logout()
        user.logout()
        navigate('/login', {replace: true})
    }

    return (
        <Container>
            <h1>Панель управления</h1>
            <p>
                Это панель управления магазином для администратора
            </p>
            <ol>
                <li><Link style={{color: 'black',}} to="/admin/orders">Заказы в магазине</Link></li>
                <li><Link style={{color: 'black',}} to="/admin/categories">Категории каталога</Link></li>
                <li><Link style={{color: 'black',}} to="/admin/brands">Бренды каталога</Link></li>
                <li><Link style={{color: 'black',}} to="/admin/products">Ассортимент</Link></li>
            </ol>
            <Button onClick={handleLogout}>Выйти</Button>
            <div class="icons4">
            <img src={admom} alt="BigCo Inc. logo"/>
            </div>
        </Container>
    )
}

export default Admin