import React from "react";
import { Link } from "react-router-dom";
import iphone11cat from "../images/iphone11cat.jpeg";

const Iphone11 = () => {
    return(
        <div className='form-container'>
                        <img src={iphone11cat} alt="iphone11catalogue" style={{width : "300px" , height : "300px"}}/>
                        <h3>Capacite:</h3><ul>
                            <li>64Go </li>
                            <li>128Go</li>
                            <li>256Go</li>
                        </ul>
                        <h3>Dimensions et poids:</h3><ul>
                            <li>Largeur : 75,7 mm</li>
                            <li>Hauteur : 150,9 mm</li>
                            <li>Épaisseur : 8,3 mm</li>
                            <li>Poids : 194 g</li>
                        </ul>
                        <h3>Couleur Disponible:</h3><ul>
                            <li style={{color: '#000000'}}>Noir</li>
                            <li style={{color: '#f0f8ff'}}>Vert</li>
                            <li style={{color: '#FFFF00'}}>Jaune</li>
                            <li style={{color: '#EE82EE'}}>mauve</li>
                            <li style={{color: '#FF0000'}}>Rouge</li>
                            <li>Blanc</li>
                        </ul>
                        <Link to="/Com11" ><button className="form-button"> Commander </button></Link>
                        <Link to="/"><button  className="form-button">Revenir a la page d'acceuil</button></Link>
        </div>
    )
};

export default Iphone11;