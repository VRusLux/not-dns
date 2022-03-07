import './Catalog.css';


const Catalog = () => {
    return (

            <div className="Cat">

                <div className="Td rad1">
                        <div className="Cube2">
                            <h3>Смартфоны и гаджеты</h3>
                            <ul>
                                <li>Смартфоны</li>
                                <li>Смарт часы и браслеты</li>
                                <li>Сотовые телефоны</li>
                                <li>Стационарные сотовые телефоны</li>
                            </ul>
                            <h3>Планшеты и Эл.Книги</h3>
                            <ul>
                                <li>Планшеты</li>
                                <li>Эл.Книги</li>
                                <li>Цифровые блокноты</li>
                            </ul>

                        </div>
                    <h4>Смартфоны и гаджеты</h4>
                    <p className="par">планшеты фототехника</p>
                </div>

                <div className="Td">

                        <div className="Cube2">
                          <h3>Телевизоры и Аксессуары</h3>
                            <ul>
                                <li>Телевизоры</li>
                                <li>Кронштейны</li>
                                <li>Видеокабели/переходники</li>
                                <li>Крепления для видео-аудио техники</li>
                            </ul>
                        </div>

                    <h4>Тв и мультимедиа</h4>
                    <p className="par">аудио видеоигры</p>

                </div>

                <div className="Td">
                        <div className="Cube2">
                            <h3>Компьютеры и ноутбуки</h3>
                            <ul>
                                <li>Персональные компьютеры</li>
                                <li>Ноутбуки</li>
                                <li>Моноблоки</li>
                            </ul>
                        </div>

                    <h4>Компьютеры</h4>
                    <p className="par">комплектующие ноутбуки</p>

                </div>

                <div className="Td rad2">
                        <div className="Cube2">
                            <h3>Оргтехника и офисное оборудование</h3>
                            <ul className="par">
                                <li>Техника для печати</li>
                                <li>3D печать</li>
                                <li>Работа с бумагой</li>
                                <li>Картриджи, тонеры, чернила</li>
                            </ul>
                        </div>
                    <h4>Офис и сеть</h4>
                    <p className="par">кресла проекторы</p>

                </div>

            </div>


    );
}



export default Catalog;