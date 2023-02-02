import React from 'react';
import { Link } from 'react-router-dom';
import iphone11promaxcat from '../images/iphone11promaxcat.jpeg';

const Iphone11promax = () => {
        return(
            <div className='form-container'>
            <img src={iphone11promaxcat} alt="iphone11catalogue" style={{width : "300px" , height : "300px"}}/>
            <h3>Capacite:</h3><ul>
                <li> 128Go </li>
                <li> 256Go </li>
                <li> 512Go </li>
            </ul>
            <h3>Dimensions et poids:</h3><ul>
                <li>Largeur : 77,4 mm</li>
                <li>Hauteur : 158 mm</li>
                <li>Épaisseur : 8,1 mm</li>
                <li>Poids : 266 g</li>
            </ul>
            <h3>Couleur Disponible:</h3><ul>
                <li style={{color: '#B36700'}}>Or</li>
                <li style={{color: '#D3D3D3'}}>Gris sidéral</li>
                <li style={{color: '#C0C0C0'}}>Argent</li>
                <li style={{color: '#254443'}}>Vert nuit</li>
            </ul>
            <Link to="/Com11promax" ><button className="form-button"> Commander </button></Link>
            <Link to="/"><button  className="form-button">Revenir a la page d'acceuil</button></Link>
        </div>
        )
    };
export default Iphone11promax;