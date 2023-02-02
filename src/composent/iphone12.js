import React from 'react';
import { Link } from 'react-router-dom';
import iphone12cat from '../images/iphone12cat.jpeg';


const Iphone12 = () => {
        return( 
            <div className='form-container'>
                            <img src={iphone12cat} alt="iphone11catalogue" style={{width : "300px" , height : "300px"}}/>
                            <h3>Capacite:</h3><ul>
                                <li>64Go </li>
                                <li>128Go</li>
                                <li>256Go </li>
                            </ul>
                            <h3>Dimensions et poids:</h3><ul>
                                <li>Largeur : 71,5 mm</li>
                                <li>Hauteur : 146 mm</li>
                                <li>Épaisseur : 7,4 mm</li>
                                <li>Poids : 162 g</li>
                            </ul>
                            <h3>Couleur Disponible:</h3><ul>
                                <li style={{color: '#000000'}}>Noir</li>
                                <li style={{color: '#f0f8ff'}}>Vert</li>
                                <li style={{color: '#0000ff'}}>Bleu</li>
                                <li style={{color: '#EE82EE'}}>mauve</li>
                                <li style={{color: '#FF0000'}}>Rouge</li>
                                <li>Blanc</li>
                            </ul>
                            <Link to="/Com12"><button className="form-button"> Commander </button></Link>
                            <Link to="/"><button  className="form-button">Revenir a la page d'acceuil</button></Link>
            </div>

        )
    };

export default Iphone12;