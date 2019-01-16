import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import store from '../App'



class ViewShoppingLists extends React.Component{
    constructor(props){
      super(props);
      let bought = JSON.parse(localStorage.getItem('values'))
      this.state ={
          data: 'Buy',
          strike:false,
          bought_lists:bought,
          values:[]
          
        };
    }
    
    componentDidMount() {
        // this.hydrateStateWithLocalStorage();
        //localStorage.setItem('values',this.state.bought_lists)
     }

    //  hydrateStateWithLocalStorage() {
    //      console.log(this.state)
    //       const { values} = this.state
    //       if (localStorage.hasOwnProperty(values)) {
    //         // get the key's value from localStorage
    //         let value = localStorage.getItem(values);
    
    //         // parse the localStorage string and setState
    //         try {
    //           value = JSON.parse(value);
    //           this.setState({ [values]: value });
    //         } catch (e) {
    //           // handle empty string
    //           this.setState({ [values]: value });
    //         }
    //       }
        
    //   }
    
    btnClick=(id)=>{
        const {bought_lists} = this.state
        this.setState({bought_lists})
       
        
        let bou= JSON.stringify(this.state.bought_lists);

        if(bought_lists.includes(id)){
            bought_lists.splice(bought_lists.indexOf(id),1);
            this.setState({
                bought_lists,
                values:bought_lists
            })
            console.log(bought_lists)
            
            
            // localStorage.setItem('values', bou)

        }else{
            console.log(bought_lists)
        this.setState({
            bought_lists:[...bought_lists,id]
        })
        console.log(bought_lists)
        // localStorage.setItem('values', bou);
    }
    
                if (this.state.strike ===false) {
        
                    this.setState({data: 'unBuy', strike:true});
                }else{
                    
                    this.setState({data: 'Buy', strike:false})
                }    
}
       
    renderShoppinglists = () =>  (
        _.map(this.props.shoppinglists, shoppinglist => {
            localStorage.setItem('values', JSON.stringify(this.state.bought_lists))
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
                        
                    <button id={list_id} type="button"  className="btn btn-warning" onClick={()=>{this.btnClick(shoppinglist._id)}}>{text}</button>    
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