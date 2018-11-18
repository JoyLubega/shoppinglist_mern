import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';



const ViewShoppingLists = (props) => {
    const { 
        shoppinglists,
        deleteOneShoppingList,
        updateOneShoppinglist,
     } = props;

    const renderShoppinglists = () =>  (
        _.map(shoppinglists, shoppinglist => {
            const list_id = shoppinglist._id;
            return (
                <tr key={list_id}>
                    <td>{shoppinglist.name}</td>
                    <td>{shoppinglist.description}</td>
                    <td>
                        <Link 
                            className="btn btn-outline-success" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="View Items"  
                            to={`/${list_id}/${shoppinglist.name}/shoppingitems`}
                        ><i class="far fa-eye"></i></Link>
                      
                        <button 
                            type="button" 
                            className="btn btn-outline-primary"
                            onClick={()=>{updateOneShoppinglist(shoppinglist._id)}} 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Update_List"
                             
                            ><i class="fas fa-edit"></i></button>  
                        
                        <button 
                            type="button" 
                            className="btn btn-outline-danger"
                            onClick={()=>{deleteOneShoppingList(shoppinglist._id)}} 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Delete_item" 
                            ><i class="fas fa-trash"></i></button>  
                    </td>                  
                </tr>
                
            );
        })
    );

    return(
        <div className="Shoppinglists container">
            
            <br /> <br/>
            
            <h2>Shopping Lists:</h2>
            
            <div className="col-sm-12">
                <table className="table bordered">
                    <thead>
                        <tr>  
                            <td>Name</td>
                            <td>Description</td>
                            <td>Actions</td>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {renderShoppinglists()}
                    </tbody>
                </table>
                
            </div>
        </div>
    );

}

export default ViewShoppingLists;
