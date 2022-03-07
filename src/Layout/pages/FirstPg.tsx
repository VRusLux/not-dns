import './FirstPg.css';
import Catalog from "./Catalog";
import Infoblock from "./Infoblock";
import Footer from "./Footer";

const FirstPg = () => {
    return (
        <div className="Main">
            <div className="Prikol">
               <div className="head">
                   <p className="City">Волгоград</p>
                   <div className="void">
                       <h1 className="Cns">CNS</h1>
                       <input className="inp"></input>
                           <a href="" className="Srv">Сравнить</a>
                           <a href="" className="fav">Избранное</a>
                           <a href="" className="kor">Корзина</a>
                       <Infoblock/>
                       <Catalog/>
                   </div>
               </div>
            </div>
            <Footer/>
        </div>
    );
}


export default FirstPg;



