import React , {useState} from "react";
import { Link } from "react-router-dom";
import '../HomePageCss.css';
import iphone13promax from "../images/iphone13promax.jpeg";



const Com11 = () => {
    
    const [quantity, setQuantity] = useState(1);
    
    const [price, setPrice] = useState(15000);
    
    const HandleIncrement = (e) => {
        e.preventDefault(setQuantity(quantity + 1))
        e.preventDefault(setPrice(price + 15000))
    };

    const [selectedRadio,setSelectedRadio]= useState("");

    const [showInput,setShowInput]=useState(false);

    const handleRadioClick = (event) => {
        setSelectedRadio(event.target.value);
        setShowInput(event.target.value === "show");
    };
    
    const HandleDecrement = (e) => {
        if(quantity > 0){
            
            e.preventDefault(setQuantity(quantity - 1))
            e.preventDefault(setPrice(price - 15000))
            
            }
        
    }; 

    return(
        <>
            <form  className="form-container">
                <div className="featured-product-item">
                    <img src={iphone13promax} alt="iphone 13 pro max" />
                    <h3>iphone 13 pro max</h3>
                </div>
            <h4>Nom Complet :</h4> <input type="text" placeholder="Entrez votre nom" className="form-input"/><br></br>
                <h4>Adresse Electronique :</h4> <input type="email" placeholder="Entrez votre email" className="form-input"/><br></br>
                <h4>Numero de telephone :</h4> <input type="text" placeholder="Entrez votre numero" className="form-input"/><br></br>
                <h4>Adresse de livraison :</h4> <input type="text" placeholder="Entrez votre Adresse" className="form-input"/><br></br>

                <select className="form-select">
                            <option>Capacite</option>
                            <option>128Go</option>
                            <option>256Go</option>
                            <option>512Go</option>
                            <option>1T</option>
                </select><br></br>
                
                <select className="form-select">
                            <option>Couleur</option>
                            <option>Or</option>
                            <option>Argent</option>
                            <option>Vert alpin</option>
                            <option>Bleu alpin</option>
                            <option>Graphite</option>
                </select><br></br>
                
                <h4>Payer par: </h4> 
                        <input type="radio" value="cache"/>Cache<br></br>
                        <input type="radio" value="cache"/>Cache 
                    <input
                    type="radio"
                    value="show"
                    checked={selectedRadio === "show"}
                    onClick={handleRadioClick}
                />
                Carte<br></br>
                
                {showInput && <input type="text"
                placeholder="Entrez votre numero de carte" className="form-input" />}

                        <h4>Quantit??: {quantity}  
                            <button onClick={HandleIncrement} className="form-button">+</button>
                            <button onClick={HandleDecrement} className="form-button">-</button>
                            </h4>
                <h4>Prix : {price}</h4> <br></br>

                <Link to="/felicitation"><button className="form-button">Finaliser la commande</button></Link><br></br>

                <Link to="/"><button  className="form-button">Revenir a la page d'acceuil</button></Link>
            </form>
        </>
    )
}
export default Com11;