import { Container, Navbar, Nav } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'
import { AppContext } from './AppContext.js'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import './css/main.css';

const NavBar = observer(() => {
    const { user, basket } = useContext(AppContext)
    return (
        <Navbar bg="black" variant="black">
            <Container>
                <NavLink style={{color: 'white',}} to="/" className="navbar-brand">Типография</NavLink>
                <Nav className="ml-auto">
                    <NavLink style={{color: 'white',}} to="/delivery" className="nav-link">Инфо</NavLink>
                    <NavLink style={{color: 'white',}} to="/contacts" className="nav-link">Контакты</NavLink>
                    {user.isAuth ? (
                        <NavLink style={{color: 'white',}} to="/user" className="nav-link">Личный кабинет</NavLink>
                    ) : (
                        <>
                            <NavLink style={{color: 'white',}} to="/login" className="nav-link">Войти</NavLink>
                            <NavLink style={{color: 'white',}} to="/signup" className="nav-link">Регистрация</NavLink>
                        </>
                    )}
                    {user.isAdmin && (
                        <NavLink style={{color: 'white',}} to="/admin" className="nav-link">Панель управления</NavLink>
                    )}
                    <NavLink style={{color: 'white',}} to="/basket" className="nav-link">
                        Корзина
                        {!!basket.count && <span>({basket.count})</span>}
                    </NavLink>
                </Nav>                   
            </Container>                      
        </Navbar>
    )
})


export default NavBar