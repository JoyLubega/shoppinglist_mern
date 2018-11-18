import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';
import Notifications, {notify} from 'react-notify-toast';

import AddListForm from '../shoppinglist/AddListForm';
import ViewLists from '../shoppinglist/ViewLists';

import { 
    postShoppinglist,
    getAllShoppinglists,
    getOneShoppinglist,
    deleteShoppinglist, 
    deleteShoppinglists
 } from '../../actions/ShoppingLists';


export class ListsContainer extends Component {
    constructor(props){

        super(props);
        this.state = {
            limit: 5,
            page: 1,
            term: ''

        }
    }
    
    componentDidMount(){
        
        this.props.getAllShoppinglists();
    }

    updateOneShoppinglist = id => {
        this.props.getOneShoppinglist(id).then(() => this.props.history.push(`/${id}`))
    }

    // Create a shopping list.
    addShoppingList = (values) => {
        this.props.postShoppinglist(values)
        .then(()=>{
            
            notify.show('Shopping list successfully created!');
        })
        .catch(e=>{
            console.log(e)
        })
        
        
    }


    // Delete a single shopping list.
    deleteOneShoppingList = (listId) => {
       
        confirmAlert({
            title: 'Confirm to Delete',                       
            message: 'Are you sure you want to delete this shoppinglist?',                 
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => this.props.deleteShoppinglist(listId)
                },
                {
                  label: 'No',
                  onClick: () => ''
                }
              ]      
        });
    }

    // Delete all shopping lists for a user.
    deleteAllShoppingLists = () => {
        confirmAlert({
            title: 'Confirm to DELETE',                       
            message: 'Are you sure you want to delete All Shoppinglists?',                 
            buttons: [
                    {
                    label: 'Yes',
                    onClick: () => this.props.deleteShoppinglists(),
                    },
                    {
                    label: 'No',
                    onClick: () => ' '
                    }
                ]      
        });
    }

    render(){  
    
        return(
            <div className="Shoppinglist container">
            <Notifications />

                <AddListForm onSubmit={this.addShoppingList}/>
                
                <ViewLists 
                    shoppinglists={this.props.shoppinglists}
                    deleteOneShoppingList={this.deleteOneShoppingList}
                    deleteAllShoppingLists={this.deleteAllShoppingLists}
                    searchError={this.props.errorMessage}
                    updateOneShoppinglist={this.updateOneShoppinglist}
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    
    const { singleShoppingList } = state.oneshoppinglist;
    const { shoppinglists, count, errorMessage } = state.allshoppinglists;
    return{
        singleShoppingList,
        shoppinglists,
        count,
        errorMessage
     } ;
}

export default connect(
    mapStateToProps, 
    {
        postShoppinglist,
        getAllShoppinglists,
        getOneShoppinglist,
        deleteShoppinglist, 
        deleteShoppinglists
        
    })(ListsContainer);