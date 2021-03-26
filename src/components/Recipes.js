import React  from 'react';
import './styles/reset.css';
import './styles/Recipes.css';
import data from '../data/recipe_items.json';
import Stars from './Stars';
import Positives from './Positives';

const Recipes = () => {
        
    return (
        <div>
            <section className="head-panel">
                <i className="fas fa-carrot"></i>
                <h1>healthy recipes</h1>
            </section>
            <section className="recipes-container">
                <h2 className="recipes-title">Recipes</h2>
                <ul className="recipes">
                    {data.map((item, i) => { 
                        return  (
                                <li className="recipe-item" key={i}>
                                    <div className="rcp-img-container">
                                        <img className="rcp-img" alt="no image available" src={item.image} />
                                    </div>
                                    <div className="rcp-health-score-container"> 
                                        <p className="name">{item.title}</p>
                                        <Stars size={item.rating}/>
                                    </div>
                                    <Positives veg={item.vegetarian} vegan={item.vegan} healthy={item.healthy}/>  
                                </li>
                    )})}
                </ul>
            </section>
            <footer>  
                <p>By Samuel Jegede</p> 
            </footer>
        </div>
    );
}

export default Recipes;