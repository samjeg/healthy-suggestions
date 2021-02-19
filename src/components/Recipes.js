import React, { useEffect, useState }  from 'react';
import './styles/reset.css';
import './styles/Recipes.css';
import vegetables from '../images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg';


function Recipes() {
    const [item, setItem] = useState({});
    
    let recipeIds = `https://api.spoonacular.com/recipes/complexSearch?
    apiKey=${process.env.REACT_APP_SAPI_KEY}`;
    
    let recipeIdArray = [];
    
    
    recipeIds = recipeIds.replace('\n', ''); // get rid of the newline character
    recipeIds = recipeIds.replace('    ', ''); // get rid of extra space 
    
    const fetchItem = async () => {
        let fetchItems = await fetch(recipeIds);
        fetchItems = await fetchItems.json()
        const item = fetchItems.results;
        console.log("items: "+ JSON.stringify(item[0].id));
        setItem(item);
    }; 

    // fetches recipes for spoonacular api  
    fetchItem();
    
    // get recipe ids 
    for(let i=0; i<item.length; i++) {
        console.log("id: " + item[i].id);
        recipeIdArray[i] = item[i].id;
    }  
    
    // get data for the recipe detail using the recipe ids    
    for(let i=0; i<recipeIdArray.length; i++) {
        let nextId = recipeIdArray[i];
        let nextURL =  `https://api.spoonacular.com/recipes/${nextId}/information? 
        apiKey=689a11aea73841168fb75f15765cf0d2`;
        nextURL = nextURL.replace('\n', '');
        nextURL = nextURL.replace('    ', '');    
        console.log("next URL: " + nextURL);
        

        const fetchItem2 = async () => {
            let fetchItems = await fetch(nextURL);
            fetchItems = await fetchItems.json();
            const item = fetchItems.results;
            console.log("items: "+ JSON.stringify(item[0].id));
            setItem(item);
        };
    

    }



    return (
        <div>
            <section className="head-panel">
                <i className="fas fa-carrot"></i>
                <h1>healthy recipes</h1>
            </section>
            <section className="recipes-container">
                {/* title of ul */}
                <h2 className="recipes-title">Recipes</h2>
                <ul className="recipes">
                    <li className="recipe-item">
                        <div className="rcp-img-container">
                            <img className="rcp-img" alt="no image available" src={vegetables} />
                        </div>
                        <div className="rcp-health-score-container"> 
                            <p className="name">Mediterranean Salad</p>
                            <ul className="health-score">
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                        </div>
                        <ul className="recipe-positives">
                            <li className="vegetarian">
                                <i className="fas fa-check"></i>
                                <p>Vegetarian</p>
                            </li>
                            <li className="vegan">
                                <i className="fas fa-check"></i>
                                <p>Vegan</p>
                            </li>
                            <li className="gluten-free">
                                <i className="fas fa-check"></i>
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