import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const locationUrl = "https://zomattoo.herokuapp.com/location";
const restUrl = "https://zomattoo.herokuapp.com/restaurants?city=";

class Search extends Component {
    constructor(props){
        super(props);
        console.log(">>>>inside super");
        this.state={
            locations:'',
            restaurants:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.location_id} value={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        }
    }

    renderRestaurants = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.restaurant_id} value={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    //dropdown details
    handleDetails = (event) =>{
        console.log("in search>>>>",this.props);
        this.props.history.push(`/details/${event.target.value}`)
    }

    // restaurants
    handleRest = (event) =>{
        console.log(event.target.value);
        fetch(`${restUrl}${event.target.value}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurants:data})
        })
    }

    render(){
        console.log(">>>>inside render",this.state);
        return(
            <div id="search">
                <div id="logo">
                    <span>z!</span>
                </div>
                <div id="heading">
                    <span>Find The Best Place Near You</span>
                </div>
                <div id="dropdown">
                    <select onChange={this.handleRest}>
                        <option>---Select City---</option>
                        {this.renderCity(this.state.locations)}
                    </select>
                    <select className="restDrop" onChange={this.handleDetails}>
                        <option>---Select Restaurant---</option>
                        {this.renderRestaurants(this.state.restaurants)}
                    </select>
                </div>
            </div>        
        )
    }
    
    //on page load call method
    componentDidMount(){
        console.log(">>>>inside componentDidMount");
        fetch(locationUrl,{method:'GET'} )
        .then((res) => res.json())
        .then((data) => {
            this.setState({locations:data})
        })
    }
}

export default withRouter(Search);