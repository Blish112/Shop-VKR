import Container from 'react-bootstrap/Container'
import './css/main.css';
import peth from './images/peth.png';

const Delivery = () => {
    return (
        <Container>
            <h1>Информация по заказу.</h1>
            <div>
                <h4>Иструкция по заказу ассортимента:</h4>
                <ol>
                    <li>Выбирите ассортимент в разеле “Типография”.</li>
                    <li>Добавьте ассортимент в корзину.</li>
                    <li>В разделе “Корзина” укажите колиство ассортиментов.</li>
                    <li>Заполните форму вашими данными.</li>
                    <li>Дождите звонка менеджера для потверждения заказа.</li>
                    <li>Выбирите способ оплаты.</li>
                </ol>
            </div>
            <div class="icons1">
            <img src={peth} alt="BigCo Inc. logo"/>
            </div>
        </Container>
    )
}

export default Delivery;