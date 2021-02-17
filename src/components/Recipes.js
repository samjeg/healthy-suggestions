import React, { useEffect, useState }  from 'react';
import './styles/reset.css';
import './styles/Recipes.css';
import vegetables from '../images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg';

function Recipes() {
    const [item, setItem] = useState({});

    let recipeIds = `https://api.spoonacular.com/recipes/complexSearch?
    apiKey=689a11aea73841168fb75f15765cf0d2`;
    
    let recipeId = ""; 

    // Javascript template literal with a variable 
    let recipeDetails = `https://api.spoonacular.com/recipes/${recipeId}/information? 
    apiKey=689a11aea73841168fb75f15765cf0d2`;
    
    recipeIds = recipeIds.replace('\n', ''); // get rid of the newline character
    recipeIds = recipeIds.replace(' ', ''); // get rid of extra space 
    recipeDetails = recipeDetails.replace('\n', '');
    
    console.log("recipe ids: " + recipeIds);
    const fetchItem = async () => {
        let fetchItems = await fetch(recipeIds);
        fetchItems = await fetchItems.json();
        const item = fetchItems.results;
        console.log("items: "+ item);
        setItem(item);
    }; 

    // updates fetch function if there are any changes 
    useEffect(() => {
        fetchItem();
    }, []);


    return (
        <div>
            <section class="head-panel">
                <i class="fas fa-carrot"></i>
                <h1>healthy recipes</h1>
            </section>
            <section class="recipes-container">
                {/* title of ul */}
                <h2 class="recipes-title">Recipes</h2>
                <ul class="recipes">
                    <li class="recipe-item">
                        <div class="rcp-img-container">
                            <img class="rcp-img" alt="no image available" src={vegetables} />
                        </div>
                        <div class="rcp-health-score-container"> 
                            <p class="name">Mediterranean Salad</p>
                            <ul class="health-score">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                            </ul>
                        </div>
                        <ul class="recipe-positives">
                            <li class="vegetarian">
                                <i class="fas fa-check"></i>
                                <p>Vegetarian</p>
                            </li>
                            <li class="vegan">
                                <i class="fas fa-check"></i>
                                <p>Vegan</p>
                            </li>
                            <li class="gluten-free">
                                <i class="fas fa-check"></i>
                                <p>Gluten Free</p>
                            </li>
                        </ul>
                    </li>
                    <li class="recipe-item">
                        <div class="rcp-img-container">
                            <img class="rcp-img" alt="no image available" src={vegetables} />
                        </div>
                        <div class="rcp-health-score-container"> 
                            <p class="name">Mediterranean Salad</p>
                            <ul class="health-score">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                            </ul>
                        </div>
                        <ul class="recipe-positives">
                            <li class="vegetarian">
                                <i class="fas fa-check"></i>
                                <p>Vegetarian</p>
                            </li>
                            <li class="vegan">
                                <i class="fas fa-check"></i>
                                <p>Vegan</p>
                            </li>
                            <li class="gluten-free">
                                <i class="fas fa-check"></i>
                                <p>Gluten Free</p>
                            </li>
                        </ul>
                    </li>
                    <li class="recipe-item">
                        <div class="rcp-img-container">
                            <img class="rcp-img" alt="no image available" src={vegetables}/>
                        </div>
                        <div class="rcp-health-score-container"> 
                            <p class="name">Mediterranean Salad</p>
                            <ul class="health-score">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                            </ul>
                        </div>
                        <ul class="recipe-positives">
                            <li class="vegetarian">
                                <i class="fas fa-check"></i>
                                <p>Vegetarian</p>
                            </li>
                            <li class="vegan">
                                <i class="fas fa-check"></i>
                                <p>Vegan</p>
                            </li>
                            <li class="gluten-free">
                                <i class="fas fa-check"></i>
                                <p>Gluten Free</p>
                            </li>
                        </ul>
                    </li>
                    <li class="recipe-item">
                        <div class="rcp-img-container">
                            <img class="rcp-img" alt="no image available" src={vegetables} />
                        </div>
                        <div class="rcp-health-score-container"> 
                            <p class="name">Mediterranean Salad</p>
                            <ul class="health-score">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                            </ul>
                        </div>
                        <ul class="recipe-positives">
                            <li class="vegetarian">
                                <i class="fas fa-check"></i>
                                <p>Vegetarian</p>
                            </li>
                            <li class="vegan">
                                <i class="fas fa-check"></i>
                                <p>Vegan</p>
                            </li>
                            <li class="gluten-free">
                                <i class="fas fa-check"></i>
                                <p>Gluten Free</p>
                            </li>
                        </ul>
                    </li>
                    <li class="recipe-item">
                        <div class="rcp-img-container">
                            <img class="rcp-img" alt="no image available" src={vegetables} />
                        </div>
                        <div class="rcp-health-score-container"> 
                            <p class="name">Mediterranean Salad</p>
                            <ul class="health-score">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                            </ul>
                        </div>
                        <ul class="recipe-positives">
                            <li class="vegetarian">
                                <i class="fas fa-check"></i>
                                <p>Vegetarian</p>
                            </li>
                            <li class="vegan">
                                <i class="fas fa-check"></i>
                                <p>Vegan</p>
                            </li>
                            <li class="gluten-free">
                                <i class="fas fa-check"></i>
                                <p>Gluten Free</p>
                            </li>
                        </ul>
                    </li>
                    <li class="recipe-item">
                        <div class="rcp-img-container">
                            <img class="rcp-img" alt="no image available" src={vegetables} />
                        </div>
                        <div class="rcp-health-score-container"> 
                            <p class="name">Mediterranean Salad</p>
                            {/* fas fills the star solid, far fa-star is not filled */}
                            <ul class="health-score">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                            </ul>
                        </div>
                        {/* variable list of attributes for recipes list */}
                        <ul class="recipe-positives">
                            <li class="vegetarian">
                                <i class="fas fa-check"></i>
                                <p>Vegetarian</p>
                            </li>
                            <li class="vegan">
                                <i class="fas fa-check"></i>
                                <p>Vegan</p>
                            </li>
                            <li class="gluten-free">
                                <i class="fas fa-check"></i>
                                <p>Gluten Free</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <footer>  
                <p>By Samuel Jegede</p> 
            </footer>
        </div>
    );
}

export default Recipes;