import React from 'react';
import { Link } from 'react-router-dom';
import iphone13cat from '../images/iphone13cat.jpeg';

const Iphone13 = () => {
        return(
            <div className='form-container'>
                <img src={iphone13cat} alt="iphone11catalogue" style={{width : "300px" , height : "300px"}}/>
                <h3>Capacite:</h3><ul>
                    <li>128Go </li>
                    <li>256Go</li>
                    <li>512Go </li>
                </ul>
                <h3>Dimensions et poids:</h3><ul>
                    <li>Largeur : 71,4 mm</li>
                    <li>Hauteur : 146 mm</li>
                    <li>Épaisseur : 7,65 mm</li>
                    <li>Poids : 173 g</li>
                </ul>
                <h3>Couleur Disponible:</h3><ul>
                    <li style={{color: '#877e78'}}>Minuit</li>
                    <li style={{color: '#f0f8ff'}}>Vert</li>
                    <li style={{color: '#0000ff'}}>Bleu</li>
                    <li style={{color: '#ffc0cb'}}>Rose</li>
                    <li style={{color: '#FF0000'}}>Rouge</li>
                    <li style={{color: '#F0f3f4'}}>lumière stellaire</li>
                </ul>
                <Link to="/Com13" ><button className="form-button"> Commander </button></Link>
                <Link to="/"><button  className="form-button">Revenir a la page d'acceuil</button></Link>
        </div>
        )
    };

export default Iphone13;