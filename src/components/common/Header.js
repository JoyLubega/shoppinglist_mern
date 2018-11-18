import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllShoppinglists } from '../../actions/ShoppingLists';

export class Header extends Component {

    // A component that is always rendered.
    componentWillMount(){
        this.props.getAllShoppinglists();
    }

    

    render(){
        return(
            <div className="Header col-sm-12">
                <div className="col-sm-6">
                <h1> Χαρά Shopping</h1>  
                <p>List all your shopping Dreams.</p>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {

}
export default connect(null,{getAllShoppinglists})(Header);