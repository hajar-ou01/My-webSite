import React, { useState } from 'react';
import './HomePageCss.css';
import {  Link } from 'react-router-dom';
import iphone11 from './images/iphone11.jpeg';
import iphone11promax from './images/iphone11promax.jpeg';
import iphone12 from './images/iphone12.jpeg';
import iphone12promax from './images/iphone12promax.jpeg';
import iphone13 from './images/iphone13.jpeg';
import iphone13promax from './images/iphone13promax.jpeg';
import apple from './images/apple.jpg';
import Icone from './images/Icone.jpg';



const HomePage = () => {
    const [count , setCount]=useState(0);
    return (
        <div className="container">
                <div className="home-page-container">
                <header>
                    <img src={apple} alt="icon-apple" style={{width : "80px" , height : "80px"}}/>
                    <h1 className="home-page-title">Apple store</h1>
                    <h4 className='panier'>{count}</h4>
                    <Link to="/commande">
                        <img src={Icone} alt="icone" className="Icone"></img>
                    </Link>   
                </header>

                <div className="featured-products-container">
                    <div className="featured-product-item">
                        <img src={iphone11} alt="iphone 11" />
                        <h3>iphone 11 normal</h3>
                        <p>L'iPhone 11 est le modèle le plus accessible de la douzième génération du célèbre smartphone d'Apple. 
                        Successeur direct de l'iPhone XR,il dispose d'un écran LCD de 6,1 pouces,
                        un SoC Apple A13 Bionic et un double capteur photo arrière.</p>
                        <h3 value="5000" className="prix">Prix : 5000DH</h3>
                        <Link to="/iphone11"><button className="form-button">Voir plus de detail sur ce produit</button></Link>
                    <Link to="/Com11"><button className="form-button" >Commander</button></Link>
                    <button className="form-button" onClick={()=> setCount(count+1)}>Ajouter au panier</button>
                    </div></div>
                
                    <div className="featured-products-container">
                        <div className="featured-product-item">
                        <img src={iphone11promax} alt="iphone 11 pro max" />
                        <h3>iphone 11 pro max</h3>
                        <p>Avec son écran de 6,5 pouces, l'iPhone 11 Pro Max est le plus grand des iPhone de 2019. Successeur du XS Max, ce mobile embarque un triple module caméra avec grand-angle (12 Mpix),
                        téléobjectif (12 Mpix) et ultra grand-angle (12 Mpix)</p>
                        <h3 value="8000"  className="prix">Prix : 8000DH</h3>  
                        <Link to="/iphone11promax"><button className="form-button">Voir plus de detail sur ce produit</button></Link> 
                        <Link to="/Com11promax"><button className="form-button">Commander</button></Link>
                        <button className="form-button" onClick={()=> setCount(count+1)}>Ajouter au panier</button>
                    </div></div>
                
                    <div className="featured-products-container">
                        <div className="featured-product-item">
                            <img src={iphone12} alt="iphone 12" />
                            <h3>iphone 12</h3>
                            <p> L'écran de l'iPhone 12 mini a des angles arrondis qui suivent la ligne élégante de l'appareil et s'inscrivent dans un rectangle standard. Si l'on mesure ce rectangle,
                            l'écran affiche une diagonale de 5,42 pouces (la zone d'affichage réelle est moindre).</p>
                            <h3 value="9000"  className="prix">Prix : 9000DH</h3>
                            <Link to="/iphone12"><button className="form-button">Voir plus de detail sur ce produit</button></Link>
                            <Link to="/Com12"><button className="form-button">Commander</button></Link>
                            <button className="form-button" onClick={()=> setCount(count+1)}>Ajouter au panier</button>
                    </div></div>

                    <div className="featured-products-container">
                        <div className="featured-product-item">
                            <img src={iphone12promax} alt="iphone 12 pro max" />
                            <h3>iphone 12 pro max</h3>
                            <p>L'iPhone 12 Pro Max est le modèle grand-format haut de gamme de la 14e génération de smartphone d'Apple annoncé le 13 octobre 2020.
                            Il est équipé d'un écran de 6,7 pouces OLED HDR 60 Hz, d'un triple capteur photo avec ultra grand-angle et téléobjectif (x5 optique)
                            et d'un SoC Apple A14 Bionic compatible 5G (sub-6 GHz).</p>
                            <h3 value="10000"  className="prix">Prix : 10000DH</h3>
                            <Link to="/iphone12promax"><button className="form-button">Voir plus de detail sur ce produit</button></Link>
                            <Link to="/Com12promax"><button className="form-button">Commander</button></Link>
                            <button className="form-button" onClick={()=> setCount(count+1)}>Ajouter au panier</button>
                    </div>
                    </div>

                    <div className="featured-products-container">
                        <div className="featured-product-item">
                            <img src={iphone13} alt="iphone 13" />
                            <h3>iphone 13</h3>
                            <p>L'écran de l'iPhone 13 a des angles arrondis qui suivent la ligne élégante de l'appareil et s'inscrivent dans un rectangle standard. 
                            Si l'on mesure ce rectangle, l'écran affiche une diagonale de 6,06 pouces (15,40 cm) </p>
                            <h3 value="13000"  className="prix">Prix : 13000DH</h3>
                            <Link to="/iphone13"><button className="form-button">Voir plus de detail sur ce produit</button></Link>
                            <Link to="/Com13"><button className="form-button">Commander</button></Link>
                            <button className="form-button" onClick={()=> setCount(count+1)}>Ajouter au panier</button>
                    </div></div>

                    <div className="featured-products-container">
                        <div className="featured-product-item">
                            <img src={iphone13promax} alt="iphone 13 pro max" />
                            <h3>iphone 13 pro max</h3>
                            <p>L'iPhone 13 Pro Max, d'Apple, est un smartphone XXL avec un grand écran OLED de 6,7 pouces.
                            Doté d'un taux de rafraîchissement adaptatif pouvant varier entre 10 et 120 Hz,
                            cet appareil utilise la puce A15 Bionic, dispose d'un triple module caméra avec équivalents 13, 26 </p>
                            <h3 value="15000" className="prix">Prix : 15000DH</h3>
                            <Link to="/iphone13promax"><button className="form-button">Voir plus de detail sur ce produit</button></Link>
                            <Link to="/Com13promax"><button className="form-button">Commander</button></Link>
                            <button className="form-button" onClick={()=> setCount(count+1)}>Ajouter au panier</button>
                    </div></div>

                </div>

        </div>
    );
    };


export default HomePage;
