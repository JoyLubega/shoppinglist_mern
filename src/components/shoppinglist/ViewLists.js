import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';



class ViewShoppingLists extends React.Component{
    constructor(props){
      super(props);
      this.state ={
          data: 'Buy',
          strike:false,
          bought_lists:[]
        };
    }


    btnClick=(id)=>{
        const {bought_lists} = this.state
        if(bought_lists.includes(id)){
            bought_lists.splice(bought_lists.indexOf(id),1);
            this.setState({
                bought_lists
            })
        }else{
        this.setState({
            bought_lists:[...this.state.bought_lists,id]
        })
    }
    
                if (this.state.strike ===false) {
        
                    this.setState({data: 'unBuy', strike:true});
                }else{
                    
                    this.setState({data: 'Buy', strike:false})
                }    
}
       
    renderShoppinglists = () =>  (
        _.map(this.props.shoppinglists, shoppinglist => {
            const list_id = shoppinglist._id;
            const strikeState = (this.state.bought_lists.includes(list_id)) ? 'line-through': 'None' ;
            const text = (this.state.bought_lists.includes(list_id)) ? 'UnBuy': 'Buy';
            return (
                <tr key={list_id}  style={{ 'textDecoration': strikeState}}>
                    <td  >{shoppinglist.name}</td>
                    <td>{shoppinglist.description}</td>
                    <td>
                        <Link 
                            className="btn btn-outline-success" 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="View Items"  
                            to={`/${list_id}/${shoppinglist.name}/shoppingitems`}
                        ><i className="far fa-eye"></i></Link>
                      
                        <button 
                            type="button" 
                            className="btn btn-outline-primary"
                            onClick={()=>{this.props.updateOneShoppinglist(shoppinglist._id)}} 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Update_List"
                             
                            ><i class="fas fa-edit"></i></button>  
                        
                        <button 
                            type="button" 
                            id="del"
                            className="btn btn-outline-danger"
                            onClick={()=>{this.props.deleteOneShoppingList(shoppinglist._id)}} 
                            data-toggle="tooltip" 
                            data-placement="top" 
                            title="Delete_item" 
                            ><i class="fas fa-trash"></i></button>
                    </td> 
                    <td>
                        
                    <button id={list_id} type="button"  className="btn btn-outline-warning" onClick={()=>{this.btnClick(shoppinglist._id)}}>{text}</button>    
                    </td>                 
                </tr>
                
            );
        })
    );
  
    render()
    {
        
      return <div className="Shoppinglists container">
                
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
                  {this.renderShoppinglists()}
              </tbody>
          </table>
          
      </div>
  </div>
    }
  
  }
  
  export default ViewShoppingLists;