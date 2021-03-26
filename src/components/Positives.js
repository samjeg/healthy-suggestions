import React from 'react';
import './styles/reset.css';
import './styles/Recipes.css';

function Positives(props) {
    let veg_value = null;
    let vegan_value = null;
    let healthy_value = null;

    if(props.veg) {
		veg_value = <li key="veg">
                        <i className="fas fa-check"></i>
                        <p>Vegetarian</p>
                    </li>;
    }

    if(props.vegan) {
		vegan_value = <li key="vegan">
                        <i className="fas fa-check"></i>
                        <p>Vegan</p>
                      </li>;
    }

    if(props.healthy) {
		healthy_value = <li key="healthy">
                            <i className="fas fa-check"></i>
	                        <p>Healthy</p>
                        </li>;
    }

	return (
			<ul className="recipe-positives">
                {veg_value}
                {vegan_value}
                {healthy_value}
	        </ul>
	);
}

export default Positives; 