import './Infoblock.css';



const Infoblock = () => {
    return (
        <div>
            <div className="Banner"></div>

            <div>
                <h2>Актуальные предложения</h2>
                <div className="Pc">
                    <p className="pcb">Собери свой Пк</p>
                    <p className="pcb">Function in development</p>
                </div>
            </div>

            <div className="actuality">
                    <div className="actblock1"></div>
                    <div className="actblock2"></div>
                    <div className="actblock3"></div>
                    <div className="actblock4"></div>
                    <div className="actblock5"></div>
            </div>

            <div className="stock">
                <p className="St">Акции</p>
                <ul>
                    <li>Товары со скидкой: </li>
                    <li>Выгодные комплекты: </li>
                    <li>Скидка за способ оплаты: </li>
                    <button className="b1">Все акции</button>
                </ul>
            </div>
        </div>
    );
}

export default Infoblock;
