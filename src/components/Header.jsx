import React from "react"
import LOGOIMAGE from '../images/logo.jpg'


class Header extends React.Component{
    render(){
      console.log("props==>",this.props)
        return(
            <div className="header">
                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
        <Logo/> <button onClick={()=>this.props.get_props("auto")}>Send</button>


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
            </div>
        )
    }
}


class Logo extends React.Component{
    render(){
        return(
            <div>
                <img src={LOGOIMAGE} alt="" width="100" height="50"/>
                <h2>logo</h2>
            </div>
        )
    }
}


export {
 Header,
 Logo
};