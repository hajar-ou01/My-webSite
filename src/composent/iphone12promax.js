import React from 'react';
import { Link } from 'react-router-dom';
import iphone12promaxcat from '../images/iphone12promaxcat.jpeg';

const Iphone12promax = () => {
        return(
            <div className='form-container'>
                        <img src={iphone12promaxcat} alt="iphone11catalogue" style={{width : "300px" , height : "300px"}}/>
                            <h3>Capacite:</h3><ul>
                                <li>128Go </li>
                                <li>256Go </li>
                                <li>512Go </li>
                            </ul>
                            <h3>Dimensions et poids:</h3><ul>
                                <li>Largeur : 78,1 mm</li>
                                <li>Hauteur : 160,8 mm</li>
                                <li>Épaisseur : 7,4 mm</li>
                                <li>Poids : 226 g</li>
                            </ul>
                            <h3>Couleur Disponible:</h3><ul>
                                <li style={{color: '#B36700'}}>Or</li>
                                <li style={{color: '#383428'}}>Graphite</li>
                                <li style={{color: '#C0C0C0'}}>Argent</li>
                                <li style={{color: '#191970'}}>Bleu Pacifique</li>
                            </ul>
                            <Link to="/Com12promax" ><button className="form-button"> Commander </button></Link>
                            <Link to="/"><button  className="form-button">Revenir a la page d'acceuil</button></Link>
                        </div>
        )
    };

export default Iphone12promax;