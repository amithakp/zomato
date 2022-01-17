import React from 'react';
import {Link} from 'react-router-dom';
 
const QuickDisplay = (props) => {
    const  renderMeal = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    <Link to={`list/${item.mealtype_id}`} key={item.mealtype_id}>
                        <div class="tileContainer">
                            <div class="TileComponent1">
                                <img src={item.meal_image} alt="snacks"/>
                            </div>
                            <div class="TileComponent2">
                                <div class="ComponentHeading">  
                                    {item.mealtype}
                                    <div class="ComponentSubHeading">
                                       {item.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    return(
        <div class="MainTileContainer">
            {renderMeal(props)}
        </div> 
    )
}

 export default QuickDisplay;