import React from 'react';
import { Link } from 'react-router-dom';
import iphone13promaxcat from '../images/iphone13promaxcat.jpeg'

const Iphone13promax = () => {
        return(
            <div className='form-container'>
                <img src={iphone13promaxcat} alt="iphone11catalogue" style={{width : "300px" , height : "300px"}}/>
                <h3>Capacite:</h3><ul>
                    <li> 128Go </li>
                    <li> 256Go </li>
                    <li> 512Go </li>
                    <li> 1T </li>
                </ul>
                <h3>Dimensions et poids:</h3><ul>
                    <li>Largeur : 78,1 mm</li>
                    <li>Hauteur : 160,8 mm</li>
                    <li>Épaisseur : 7,65 mm</li>
                    <li>Poids : 238 g</li>
                </ul>
                <h3>Couleur Disponible:</h3><ul>
                    <li style={{color: '#B36700'}}>Or</li>
                    <li style={{color: '#C0C0C0'}}>Argent</li>
                    <li style={{color: '#90EE90'}}>Vert alpin</li>
                    <li style={{color: '#4169e1'}}>Bleu alpin</li>
                    <li style={{color: '#383428'}}>Graphite</li>
                </ul>
                <Link to="/Com13promax"><button className="form-button"> Commander </button></Link>
                <Link to="/"><button  className="form-button">Revenir a la page d'acceuil</button></Link>
        </div>
        )
    };

export default Iphone13promax;