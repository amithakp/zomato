import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import {withRouter} from 'react-router-dom';

const url ="https://developerjwt.herokuapp.com/api/auth/userinfo";

class Header extends Component {
    constructor(props){
        super()
         this.state={
            userdata:''
         }
    }

    handleLogout = () => {
        this.setState({userdata:''})
        localStorage.removeItem('userdata')
        localStorage.removeItem('ltk')
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userdata.name){
            let data = this.state.userdata;
            let outputArray = [data.name,data.email,data.phone,data.role]
            localStorage.setItem('userdata',outputArray)
            return(
                <>
                    <button className="btb btn-info">Hi {outputArray[0]}</button>
                    <button onClick={this.handleLogout} id="logout" className="btn btn-danger">
                        Logout
                    </button>
                </>
            )
        }else{
            return(
            <>
                <Link to="/login" className="btn btn-success">Login</Link> &nbsp;&nbsp;
                <Link to="/register" className="btn btn-info">Register</Link>
             </>
            )
        }
    }
    render(){
        return(
            <>
                <div id="header"> 
                    <div id="brand">
                        <Link to="/" id="zomato">ZOMATO</Link>
                    </div>
                    <div className="social">
                       {/* <Link To="/" className="glyphicon glyphicon-log-in">Login</Link>
                       <Link To="/register" className class="glyphicon glyphicon-user">Register</Link>  */}
                       {this.conditionalHeader()}
                    </div>
                </div>
            </>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':localStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userdata:data
            })
        })
    }
    
}

export default withRouter(Header);