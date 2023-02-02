import React from "react";
import { Link } from "react-router-dom";
import '../HomePageCss.css';


const Felicitation = () => {
    return(
        <div className="thank-you-page">
            
            <h1 className="thank-you-header">Merci Beaucoup!</h1>
            <h3 className="thank-you-message">Votre achat d'iPhone a réussi!</h3>
            <h3 className="thank-you-message">Nous apprécions votre confiance et espérons que vous apprécierez votre nouvel iPhone.</h3>
            <Link to="/"><button className="form-button" style={{width:"100%"}}>Revenir a la page d'acceuil</button></Link>
        </div>
    )
}

export default Felicitation;