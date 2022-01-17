import React,{Component} from 'react';
import './details.css';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuList from './menuDisplay';
import Header from '../Header';

const url = "https://zomattoo.herokuapp.com/restaurant"
const menuUrl = "https://zomattoo.herokuapp.com/menu"

class Details extends Component{
    constructor(props) {
        super()
        this.state={
            details:'',
            menulist:'',
            useritem:''
        }
    }
    addToCart = (data) => {
        this.setState({userItem:data})
    }
    proceed = () => {
        sessionStorage.setItem('menu', this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }
    render(){
        //let details = this.state.details
        let {details} = this.state // if both side variable same name
        return(
            <>
                <Header/>
                <div className="main">
                    <div id="content">
                        <div id="imgDiv">
                            <img src= {details.restaurant_thumb}/>
                        </div>
                        <div id="textDiv">
                            <h1>{this.state.details.restaurant_name}</h1>
                            <i className="fas fa-star checked"></i>
                            <i className="fas fa-star checked"></i>
                            <i className="fas fa-star checked"></i>
                            <i className="fas fa-star checked"></i>
                            <i className="far fa-star"></i>
                            <span>289 Customer Reviews</span>
                            <h3><strike>Old Price 180</strike></h3>
                            <h3>New Price {this.state.details.cost}</h3>
                            <h3>Best Taste of {details.restaurant_name} At your Door or DineIn</h3>
                            <div>
                                <div className="icon">
                                    <img src="https://i.ibb.co/0KzLdwC/No-contact-delivery-final-CB432269791.png" alt="icon"/>
                                    <p>Contact Less Delivery</p>
                                </div>
                                <div className="icon">
                                    <img src="https://i.ibb.co/kgcsZ3z/icon-amazon-delivered-CB485933725.png" alt="icon"/>
                                    <p>Free Home Delivery</p>
                                </div>
                            </div>
                            <h2 className="stock">
                                Available Now
                            </h2>
                            <div>
                                <button className="btn btn-atc">Back</button>
                                <button className="btn btn-checkout" onClick={this.proceed}>Checkout</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-12">
                        <Tabs>
                            <TabList>
                                <Tab>Details</Tab>
                                <Tab>Contact</Tab>
                                <Tab>Menu</Tab>
                            </TabList>
                            <TabPanel>
                                <h2>{details.restaurant_name}</h2>
                                <p>
                                    A restaurant is a business that prepares and serves food and drinks to customers.Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <h2>{details.address}</h2>
                                <h2>Contact Number :9857556677</h2>
                            </TabPanel>
                            <TabPanel>
                                <MenuList menuData={this.state.menulist}
                                finalOrder = {(data) => {this.addToCart(data)}}/>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </>
        )
    }
    async componentDidMount(){
        const restId = this.props.match.params.id;
        const response = await axios.get(`${url}/${restId}`)
        const menuResponse = await axios.get(`${menuUrl}/${restId}`)
        this.setState({details:response.data[0],menulist:menuResponse.data})
    }
}
export default Details