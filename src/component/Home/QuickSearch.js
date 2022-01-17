import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay';
import './QuickSearch.css';
 const url ="https://zomattoo.herokuapp.com/mealType";

class QuickSearch  extends Component {
    constructor(props) {
        super(props)

        this.state={
            MealType:''
        }
    }
    render(){
        return(
            <div id="quicksearch">
                <span id="QuickHeading">
                    Quick Searches
                </span>
                <span id="QuickSubHeading">
                    Discover Restaurant By Type
                </span>
                <QuickDisplay quickData = {this.state.MealType}/>
            </div> 
        )
    }
     //on page load call mealtype api method
     componentDidMount(){
         fetch(url, {method:'GET'})
         .then((res) => res.json ())
         .then((data) => {
             this.setState({MealType:data})
         })
     }
}

export default QuickSearch;